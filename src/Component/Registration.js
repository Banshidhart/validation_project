import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "FullName is Too Short!")
    .max(50, "FullName is Too Long!")
    .required("FullName is Required"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .min(8, "Password length is min 8!")
    .max(24, "Password length is max 24!")
    .required("Password is Required"),
  city: Yup.string().required("City is Required"),
  remark: Yup.string()
    .min(20, "Remark length is min 20!")
    .required("Remark is Required"),
});
export default function Registration() {
  return (
    <>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          city: "",
          remark: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Full Name</label>
                <Field
                  type="text"
                  name="fullName"
                  className="form-control"
                  placeholder="Enter full name"
                />
                {errors.fullName && touched.fullName ? (
                  <div className="alert alert-danger">{errors.fullName}</div>
                ) : null}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="abc@gmail.com"
                />
                {errors.email && touched.email ? (
                  <div className="alert alert-danger">{errors.email}</div>
                ) : null}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                />
                {errors.password && touched.password ? (
                  <div className="alert alert-danger">{errors.password}</div>
                ) : null}
              </div>
            </div>
            <div className="row mb-3">
              <label className="form-label">Gender</label>
              <div className="form-check col-md-2 offset-md-1">
                <Field
                  type="radio"
                  name="Gender"
                  className="form-check-input"
                  value="Male"
                />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check col-md-2">
                <Field
                  type="radio"
                  name="Gender"
                  className="form-check-input"
                  value="Female"
                />
                <label className="form-check-label">Female</label>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">City</label>
                <Field as="select" className="form-select" name="city">
                  <option value="">Choose...</option>
                  <option value="1">Mumbai</option>
                  <option value="2">Thane</option>
                  <option value="3">Pune</option>
                  <option value="4">Chennai</option>
                  <option value="5">Noida</option>
                </Field>
                {errors.city && touched.city ? (
                  <div className="alert alert-danger">{errors.city}</div>
                ) : null}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Remark</label>
                <Field
                  as="textarea"
                  cols={10}
                  rows={5}
                  name="remark"
                  className="form-control"
                />
                {errors.remark && touched.remark ? (
                  <div className="alert alert-danger">{errors.remark}</div>
                ) : null}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <div className="form-check">
                  <Field
                    className="form-check-input"
                    name="Accept"
                    type="checkbox"
                  />
                  <label className="form-check-label">Accpet</label>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <button type="submit" className="btn btn-success">
                  Sign up
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
