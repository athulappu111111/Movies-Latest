import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Formik, Field } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Yup from "yup";
import swal from "sweetalert";
export default class Createcustomer extends Component {
  render() {
    const errorSchema = Yup.object().shape({
      fname: Yup.string()
        .required("Required")
        .min(2, "Too Short")
        .max(10, "Too Long"),
      lname: Yup.string()
        .min(1, "Too Short!")
        .max(10, "Too Long!")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(2, "Too Short!")
        .max(15, "Too Long!")
        .required("Required"),
      phoneno: Yup.string()
        .matches(
          /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
          "Not a Phone number"
        )
        .required("Required"),
    });
    return (
      <div className="forms">
        <div className="form-group">
          <Formik
            initialValues={{
              fname: "",
              lname: "",
              email: "",
              password: "",
              phoneno: "",
            }}
            validationSchema={errorSchema}
            onSubmit={(values, { resetForm }) => {
              resetForm({ values: "" });
              swal("Customer Created", "", "success");
              const CustomerObject = {
                fname: values.fname,
                lname: values.lname,
                email: values.email,
                password: values.password,
                phoneno: values.phoneno,
              };
              axios
                .post(
                  "http://localhost:4000/Customers/create-customer",
                  CustomerObject
                )
                .then((res) => console.log(res.data));
            }}
          >
            {({
              errors,
              touched,
              handleChange,
              isValid,
              values,
              handleSubmit,
            }) => (
              <Form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fname">First Name:</label>
                  <Field
                    name="fname"
                    className="form-control"
                    type="text"
                    onChange={handleChange("fname")}
                    value={values.fname}
                  />
                  {touched.fname && errors.fname && (
                    <small className="text-danger">{errors.fname}</small>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="lname">Last Name:</label>
                  <Field
                    name="lname"
                    className="form-control"
                    type="text"
                    onChange={handleChange("lname")}
                    value={values.lname}
                  />
                  {errors.lname && touched.lname ? (
                    <small className="text-danger">{errors.lname}</small>
                  ) : null}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address:</label>
                  <Field
                    name="email"
                    className="form-control"
                    type="email"
                    onChange={handleChange("email")}
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                    <small className="text-danger">{errors.email}</small>
                  ) : null}
                </div>

                <div className="form-group">
                  <label htmlFor="phoneno">Phone Number:</label>
                  <Field
                    name="phoneno"
                    className="form-control"
                    type="text"
                    onChange={handleChange("phoneno")}
                    value={values.phoneno}
                  />
                  {errors.phoneno && touched.phoneno ? (
                    <small className="text-danger">{errors.phoneno}</small>
                  ) : null}
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <Field
                    name="password"
                    className="form-control"
                    type="password"
                    onChange={handleChange("password")}
                    value={values.password}
                  />
                  {errors.password && touched.password ? (
                    <small className="text-danger">{errors.password}</small>
                  ) : null}
                </div>
                <div className="form-group">
                  <Button
                    disabled={!isValid}
                    variant="primary"
                    size="lg"
                    block="block"
                    type="submit"
                  >
                    Create Customer
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}
