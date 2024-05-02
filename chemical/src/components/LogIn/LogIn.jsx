import React from 'react'
import { Formik, Field, Form } from "formik";
import { Link } from 'react-router-dom';
import FormWrapper from '../FormWrapper/FormWrapper';

const LogIn = () => {
  return (
    <FormWrapper>
    <h1>Login</h1>
    <Formik
      initialValues={{
        email: "",
        password:""
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="Email"
          type="email"
        />

        <label htmlFor="password">Password</label>
        <Field type="password" id="password" name="password" placeholder="Password" />
        <button type="button">Forgot password?</button>
        <button type="submit">Submit</button>
      </Form>
    </Formik>

    <p>Don’t have account? <Link to="/register">Sign Up</Link> </p>
  </FormWrapper>
  )
}

export default LogIn