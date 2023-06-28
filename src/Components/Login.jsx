import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
  });

  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <div className="container p-40">
      <br />
      <br />
      <h1>Login</h1>
      <hr />
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        <Form className="form-group">
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            name="email"
            id="email"
            className="form-control shadow-none"
          />
          <ErrorMessage name="email" component="div" className="error" />
          <br />
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            id="password"
            type="password"
            className="form-control shadow-none"
            autoComplete="off"
          />
          <ErrorMessage name="password" component="div" className="error" />
          <br />
          <div className="btn-box">
            <span>
              Don't have an account Signup{" "}
              <Link to="/signup" className="link">
                Here
              </Link>
            </span>
            <button type="submit" className="btn btn-success btn-md">
              LOGIN
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
