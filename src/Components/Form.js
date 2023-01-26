function Form() {

    return (
        <div id='form' className='container'>
        <form id='pizza-form'>
            <label>Name:
             <input type='text' id='name-input' placeholder='Your name here...'/>
            </label>
            <label>Size:
                <select id='size-dropdown'>
                    <option value="">--Select a Size--</option>
                    <option value="s">Small</option>
                    <option value="m">Medium</option>
                    <option value="l">Large</option>
                </select>
            </label>
            <fieldset>
                <legend>Select toppings:</legend>
                <div className='left'>
                    <label className='checkbox'>
                        <input type='checkbox' name='olives' value='olives'/>Olives
                    </label>
                    <label className='checkbox'>
                        <input type='checkbox' name='mushrooms' value='mushrooms'/>Mushrooms
                    </label>
                </div>
                <div className='right'>
                    <label className='checkbox'>
                        <input type='checkbox' name='onion' value='onion'/>Onion
                    </label>
                    <label className='checkbox'>
                        <input type='checkbox' name='peppers' value='peppers'/>Peppers
                    </label>
                </div>
                
                
                
            </fieldset>
        </form>

        </div> 
    )

}

export default Form;