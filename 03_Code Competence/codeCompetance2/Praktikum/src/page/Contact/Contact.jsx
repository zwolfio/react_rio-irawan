import React from "react";
import {useFormik} from "formik"
import * as Yup from "yup";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";

const Contact = () => {
    
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            message: "",
        },
        validationSchema: Yup.object().shape({
            firstname: Yup.string()
                .required('The username field must be filled in'),
            lastname: Yup.string()
                .required('The password field must be filled in'),
            email: Yup.string().email("isi email dengan benar")
                .required('The password field must be filled in'),
            message: Yup.string()
                .required('The password field must be filled in'),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values,null,4))

        }})

    return (
        <>
            <Navbar />
            <div className="container-fluid py-5 mb-3 text-center contactus">
                <h1>Contact us</h1>
                <p className="fs-10">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, rem
                    officia. <br />
                    Modi ducimus possimus nam libero , debitis vitae facere, obcaecati
                    blanditiis iusto animi.
                </p>
                <div className="container form-contactus">
                    <form>
                        <div className="row">
                            <div className="col-md-6 pb-3">
                                <label htmlFor="firstname" className="form-label">
                                    Firstname :
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstname"
                                    placeholder="Enter first name"
                                    name="firstname"
                                    onChange={formik.handleChange}
                                    value={formik.values.firstname}
                                />
                            </div>
                            <div className="col-md-6 pb-3">
                                <label htmlFor="username" className="form-label">
                                    Lastname :
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastname"
                                    placeholder="Enter last name"
                                    name="lastname"
                                    onChange={formik.handleChange}
                                    value={formik.values.lastname}
                                />
                            </div>
                            <div className="pb-3">
                                <label htmlFor="email" className="form-label">
                                    Email :
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter email"
                                    name="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                            </div>
                            <div className="pb-4">
                                <label htmlFor="comment">Message :</label>
                                <textarea
                                    className="form-control"
                                    rows={5}
                                    id="message"
                                    name="message"
                                    onChange={formik.handleChange}
                                    value={formik.values.message}
                                />
                            </div>
                            <button type="Submit" className="btn btn-primary mb-3" onClick={formik.handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )

}

export default Contact