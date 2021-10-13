import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";

export default class Createmovie extends Component {
  render() {
    const errorSchema = Yup.object().shape({
      name: Yup.string()
        .required("Required")
        .min(2, "too Short")
        .max(30, "Too Long"),
      url: Yup.string().required("Required"),
      gener: Yup.string().required("Required"),
      dailyrental: Yup.number()
        .integer("Please enter a valid amount without decimal values")
        .typeError("Please enter a valid amount")
        .positive("Please enter a valid amount")
        .required("Please enter an amount"),
      noofcopies: Yup.number()
        .integer("Please enter a valid amount without decimal values")
        .typeError("Please enter a valid amount")
        .positive("Please enter a valid amount")
        .required("Please enter an amount"),
    });

    return (
      <div className="forms">
        <div classname="form-wrapper">
          <Formik
            initialValues={{
              name: "",
              url: "",
              gener: "",
              dailyrental: "",
              noofcopies: "",
            }}
            validationSchema={errorSchema}
            onSubmit={(values, { resetForm }) => {
              resetForm({ values: "" });
              swal("Movie Created", "", "success");
              const movieObject = {
                name: values.name,
                url: values.url,
                gener: values.gener,
                dailyrental: values.dailyrental,
                noofcopies: values.noofcopies,
              };
              axios
                .post("http://localhost:4000/movies/create-movie", movieObject)
                .then((res) => console.log(res.data));
            }}
          >
            {({
              errors,
              touched,
              handleChange,
              isValid,
              handleSubmit,
              values,
            }) => (
              <Form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fname">Movie Name:</label>
                  <Field
                    name="name"
                    className="form-control"
                    type="text"
                    onChange={handleChange("name")}
                    value={values.name}
                  />
                  {touched.name && errors.name && (
                    <small className="text-danger">{errors.name}</small>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="url">Image Url:</label>
                  <Field
                    name="url"
                    className="form-control"
                    type="text"
                    onChange={handleChange("url")}
                    value={values.url}
                  />
                  {errors.url && touched.url ? (
                    <small className="text-danger">{errors.url}</small>
                  ) : null}
                </div>

                <div className="form-group">
                  <label htmlFor="gener">Gener:</label>
                  <Field
                    name="gener"
                    className="form-control"
                    type="gener"
                    onChange={handleChange("gener")}
                    value={values.gener}
                  />
                  {errors.gener && touched.gener ? (
                    <small className="text-danger">{errors.gener}</small>
                  ) : null}
                </div>

                <div className="form-group">
                  <label htmlFor="dailyrental">Daily Rental Amount:</label>
                  <Field
                    name="dailyrental"
                    className="form-control"
                    type="text"
                    onChange={handleChange("dailyrental")}
                    value={values.dailyrental}
                  />
                  {errors.dailyrental && touched.dailyrental ? (
                    <small className="text-danger">{errors.dailyrental}</small>
                  ) : null}
                </div>

                <div className="form-group">
                  <label htmlFor="noofcopies">Number of Copies:</label>
                  <Field
                    name="noofcopies"
                    className="form-control"
                    type="noofcopies"
                    onChange={handleChange("noofcopies")}
                    value={values.noofcopies}
                  />
                  {errors.noofcopies && touched.noofcopies ? (
                    <small className="text-danger">{errors.noofcopies}</small>
                  ) : null}
                </div>

                <div className="form-group">
                  <Button
                    variant="primary"
                    size="lg"
                    block="block"
                    type="submit"
                    disabled={!isValid}
                  >
                    Create Movie
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
