import React from "react";
import { ImOffice } from "react-icons/im";
import { HiLocationMarker } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  userName: Yup.string()
    .min(2, "UserName is too short!")
    .max(20, "UserName is too long!")
    .required("UserName is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  address: Yup.string().required("Address is required"),
});

const initialValues = {
  userName: "",
  email: "",
  subject: "",
  address: "",
};

export const Contact = () => {
  return (
    <div className="w-full h-full">
      <div className="contact flex flex-col w-full h-[50vh] text-white justify-center items-center text-center bg-cover">
        <h2 className="font-bold mb-2 mt-16 text-4xl">#let's talk</h2>
        <p>
          <span className="uppercase">Leave a message,</span>We love to hear
          from you!
        </p>
      </div>
      <div className="grid justify-center items-center lg:grid-cols-2 sm:grid-cols-1 p-20">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form>
            <h1 className="mb-10">Let's Talk</h1>
            <div className="form-group mb-3">
              <label htmlFor="userName">UserName:</label>
              <Field
                type="text"
                id="userName"
                name="userName"
                className="form-control shadow-none"
              />
              <ErrorMessage name="userName" component="div" className="error" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email Id:</label>
              <Field
                type="text"
                id="email"
                name="email"
                className="form-control shadow-none"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="subject">Subject:</label>
              <Field
                type="text"
                id="subject"
                name="subject"
                className="form-control shadow-none"
              />
              <ErrorMessage name="subject" component="div" className="error" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="address">Address:</label>
              <Field
                type="text"
                id="address"
                name="address"
                className="form-control shadow-none"
              />
              <ErrorMessage name="address" component="div" className="error" />
            </div>
            <button
              type="submit"
              className="btn btn-success"
              style={{ boxShadow: "none", marginTop: "10px" }}
            >
              Submit
            </button>
          </Form>
        </Formik>
        <div className="grid justify-center items-center text-center lg:grid-rows-3 mt-10 ">
          <div className="flex flex-col justify-center items-center">
            <div>
              <ImOffice className="text-3xl" />
            </div>
            <div>
              <h2>Company Information:</h2>
              <span>Cara Shopping Mart</span>
              <p>GST No: 24AAALS0678Q1ZE</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <HiLocationMarker className="text-3xl" />
            </div>
            <div>
              <h2>Address:</h2>
              <span>
                A-403, Astha Residency, Abrama Road, Mota varachha, Surat
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <IoCall className="text-3xl" />
            </div>
            <div>
              <h2>Contact:</h2>
              <span>Call us to speak to a member of our team.</span>
              <p>+91 9328444699</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
