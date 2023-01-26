function Form(props) {

    const {
        handleChange,
        formData
    } = props;

    const change = (evt => {
        const { name, value, checked } = evt.target;
        const valueToUse = evt.target.type === 'checkbox' ? checked : value;
        handleChange(name, valueToUse);
    })


    return (
        <div id='form' className='container'>
            <h3 className='tight'>Pizza Order Form</h3>
        <form id='pizza-form' >
            <div><label>Name:
             <input 
                type='text' 
                id='name-input'
                name='name'
                onChange={change} 
                value={formData.name}
                placeholder='Your name here...'/>
            </label></div>
            
            <div><label>Size:
                <select 
                    id='size-dropdown'
                    onChange={change} 
                    value={formData.size} 
                    name='size'>
                    <option value="">--Select a Size--</option>
                    <option value="s">Small</option>
                    <option value="m">Medium</option>
                    <option value="l">Large</option>
                </select>
            </label></div>
            <fieldset>
                <legend>Select toppings:</legend>
                <div className='left'>
                    <label className='checkbox'>
                        <input 
                            type='checkbox' 
                            name='olives' 
                            value='olives'
                            onChange={change} 
                            checked={formData.olives}                            
                            />Olives
                    </label>
                    <label className='checkbox'>
                        <input 
                            type='checkbox' 
                            name='mushrooms' 
                            value='mushrooms'
                            onChange={change} 
                            checked={formData.mushrooms}                            
                            />Mushrooms
                    </label>
                </div>
                <div className='right'>
                    <label className='checkbox'>
                        <input 
                            type='checkbox' 
                            name='onion' 
                            value='onion'
                            onChange={change} 
                            checked={formData.onion}                    
                            />Onion
                    </label>
                    <label className='checkbox'>
                        <input 
                            type='checkbox' 
                            name='peppers' 
                            value='peppers'
                            onChange={change} 
                            checked={formData.peppers}
                            />Peppers
                    </label>
                </div>                
            </fieldset>

            <div><label>Special Instructions:
            <input 
                type='text' 
                id='special-text' 
                name='specInst' 
                placeholder='Let us know...'
                onChange={change} 
                checked={formData.specInst}
                />
            </label></div>

            <button id='order-button' >Add to Order</button>
        </form>

        </div> 
    )

}

export default Form;