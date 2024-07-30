import { useFormik } from "formik";
import * as Yup from 'yup';
import { fileParser } from "../utils/fileParser";
import { useDispatch } from "react-redux";
import { registerUserAction } from "../store/userSlice";
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";


function FormComponent() {

    // validation types for file
    const VALID_TYPE = ['image/png', 'image/jpg', 'image/jpeg'];
    const KB = 1024;
    const MB = KB * 1024;

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const formik = useFormik({
        // initialValue
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            gender: '',
            birthDate: '',
            image: ''
        },
        // validation
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(2, 'Too Short')
                .max(50, 'Too Long')
                .required('Required'),
            lastName: Yup.string()
                .min(2, 'Too Short')
                .max(50, 'Too Long')
                .required('Required'),
            email: Yup.string()
                .email()
                .matches(/^(?!.*@[^,]*,)/)
                .required('Required'),
            password: Yup.string()
                .min(8, 'Too Short')
                .required('Required'),
            gender: Yup.string()
                .required('Required'),
            birthDate: Yup.string()
                .required('Required'),
            image: Yup.mixed()
                .test('fileSize', 'File is too big... max to 2mb', (value) => value.size < MB * 2)
                .test('fileType', 'Wrong type file', value => VALID_TYPE.includes(value.type))
                .required('Required')
        }),
        // submitForm
        onSubmit: (values) => {
            // console.log(values);
            fileParser(values.image)
                .then(response => {
                    // response - je image u stringu
                    // values - {} sa svim podacima
                    dispatch(registerUserAction({ ...values, image: response })); // prosledjuje u redux
                    // msg for register 
                    toast.success('Uspesno si se registrovao',);
                    // prebacuje do homePage
                    navigate('/');

                    // primer za backend
                    // UseService.saveUser({...values, image: response })
                })
                .catch(err => console.log(err))
            formik.resetForm();
        }
    });


    const showError = (name) => formik.errors[name] && formik.touched[name] && formik.errors[name]

    return (
        <div>
            <h2 className="title">Register Form</h2>

            <form onSubmit={formik.handleSubmit} className="flex flex-col border-[2px] border-blue-900 rounded-lg w-[500px] mx-auto p-4">
                <label htmlFor="firstName"  >First Name: <span>{showError('firstName')}</span></label>
                <input
                    type="text"
                    placeholder="Insert First Name"
                    id="firstName"
                    className=""
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange} />

                <label htmlFor="lastName">Last Name: <span>{showError('lastName')}</span></label>
                <input
                    type="text"
                    placeholder="Insert Last Name"
                    id="lastName"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange} />


                <label htmlFor="email">Email: <span>{showError('email')}</span></label>
                <input
                    type="email"
                    placeholder="Insert Email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange} />

                <label htmlFor="password">Password: <span>{showError('password')}</span></label>
                <input
                    type="password"
                    placeholder="Insert Password"
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange} />

                <label htmlFor="gender">Gender: <span>{showError('gender')}</span></label>
                <select
                    id="gender"
                    name="gender"
                    value={formik.values.gender}
                    onChange={formik.handleChange}>
                    <option value="" disabled>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                <label htmlFor="birthDate">Date Born: <span>{showError('birthDate')}</span></label>
                <input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    value={formik.values.birthDate}
                    onChange={formik.handleChange} />

                <label htmlFor="image">Upload Image: <span>{showError('image')}</span></label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={(e) => formik.setFieldValue(e.target.name, e.target.files[0])} />

                <button type="submit" className="px-4 py-2 bg-blue-900 text-white rounded-lg my-3 w-[50%] mx-auto">Register</button>
            </form>
        </div>
    )
}

export default FormComponent;