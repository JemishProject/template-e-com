import React from "react";
import { Link } from "react-router-dom";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export const SignUp = () => {
  const validationSchema = Yup.object({
    fullname: Yup.string()
      .min(2, "UserName is too short!")
      .max(20, "UserName is too long!")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
  });

  const initialValues = {
    fullname: "",
    email: "",
    password: "",
  };
  return (
    <div className="container p-40">
      <br />
      <br />
      <h1>Signup</h1>
      <hr />
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        <Form autoComplete="off" className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <Field
            type="text"
            className="form-control shadow-none"
            name="fullname"
            id="fullname"
          />
          <ErrorMessage name="fullname" component="div" className="error" />
          <br />
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            className="form-control shadow-none"
            name="email"
            id="email"
          />
          <ErrorMessage name="email" component="div" className="error" />
          <br />
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            className="form-control shadow-none"
            autoComplete="off"
            name="password"
            id="password"
          />
          <ErrorMessage name="password" component="div" className="error" />
          <br />
          <div className="btn-box">
            <span>
              Already Have an account Login{" "}
              <Link to="/login" className="link">
                Here
              </Link>
            </span>
            <button type="submit" className="btn btn-success btn-md">
              SIGNUP
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
