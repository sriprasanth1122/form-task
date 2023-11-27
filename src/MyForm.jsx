import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

const MyForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            mobile: '',
            email: '',
        }, 
        validate: (values) => {
            const errors = {};

            // Perform your validation checks here
            if (!values.firstName) {
                errors.firstName = '*First Name is required';
            }

            if (!values.lastName) {
                errors.lastName = '*Last Name is required';
            }

            if (!values.mobile) {
                errors.mobile = '*Mobile Number is required';
            } 

            if (!values.email) {
                errors.email = '*Email is required';
            } else if (!/\S+@\S+\.\S+/.test(values.email)) {
                errors.email = '*Invalid email format';
            }

            return errors;
        },
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                // Make Axios request to your backend server
                const response = await axios.post('sriprasanth1122@gmail.com', values);

                // Handle the response as needed
                console.log('Form submitted successfully:', response.data);

                // Optionally, reset the form
                resetForm();
            } catch (error) {
                console.error('Error submitting form:', error);
            } finally {
                // Set submitting to false to enable the form again
                setSubmitting(false);
            }
        },
    });

    return (
        
        <div className='container'>
            <div className='center p-5 '>
                <form className='col p-5 rounded-4' style={{background: "#68BBE3"}}>
                    <div className="mb-3">
                        <label className="form-label"> First Name:</label>
                        <input type="text" className="form-control" name="firstName" value={formik.values.firstName} onChange={formik.handleChange} />
                        {formik.errors.firstName && <div className='text-danger p-1' style={{fontSize: "13px"}}>{formik.errors.firstName}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label"> Last Name:</label>
                        <input type="text" className="form-control" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} />
                        {formik.errors.lastName && <div className='text-danger p-1' style={{fontSize: "13px"}}>{formik.errors.lastName}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label"> Mobile Number:</label>
                        <input type="" className="form-control" name="mobile" value={formik.values.mobile} onChange={formik.handleChange} />
                        {formik.errors.mobile && <div className='text-danger p-1' style={{fontSize: "13px"}}>{formik.errors.mobile}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input type="email" className="form-control" name="email" value={formik.values.email} onChange={formik.handleChange} />
                        {formik.errors.email && <div className='text-danger p-1' style={{fontSize: "13px"}}>{formik.errors.email}</div>}
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>

                </form>
            </div>

        </div>

    );
}


export default MyForm;
// export default BasicExample;
