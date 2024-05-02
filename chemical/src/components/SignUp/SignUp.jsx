import React from "react";
import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";
import FormWrapper from "../FormWrapper/FormWrapper";

const SignUp = () => {
  return (
    <FormWrapper>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password:""
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="First Name" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Last Name" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="Email"
            type="email"
          />

          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" placeholder="Password" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <p>Do you have an account? <Link to="/login">Login</Link> </p>
    </FormWrapper>
  );
};

export default SignUp;
