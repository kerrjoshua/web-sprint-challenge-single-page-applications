import * as Yup from 'yup';

const formSchema = Yup.object().shape({

    name: Yup
        .string()
        .trim()
        .required("A name is required.")
        .min(2, 'name must be at least 2 characters'),
    size: Yup
        .string()
        .required("What size should we make it?"),
    mushrooms: Yup
        .bool()
        .required('a true/false value for mushrooms is required'),
    olives: Yup
        .bool()
        .required('a true/false value for olives is required'),
    onion: Yup
        .bool()
        .required('a true/false value for onion is required'),
    peppers: Yup
        .bool()
        .required('a true/false value for peppers is required'),  
    specInst: Yup
        .string()

})

export default formSchema;