import React from 'react';
import { STEPS } from '@/pages/SignUp/helpers';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const EmailPasswordForm = ({ setStep }) => {
  const handleSubmit = () => {
    setStep(STEPS.PROFILE);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '', passwordConfirm: '' }}
      validate={(values) => {
        const errors = {};

        //email validation
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }

        //password validation
        if (!values.password) {
          errors.password = 'Required';
        }

        //passwordConfirm validation
        if (!values.passwordConfirm) {
          errors.passwordConfirm = 'Required';
        }

        if ( values.password !== values.passwordConfirm ){
          errors.passwordConfirm = 'Please Check your Password.';
        }

        return errors;
      }}
      onSubmit={()=>handleSubmit()}>
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" className="form-control" placeholder="이메일" />
          <ErrorMessage className="formik_error" name="email" component="div" />
          <Field type="password" name="password" className="form-control" placeholder="비밀번호" minLength="5" />
          <ErrorMessage name="password" className="formik_error" component="div" />
          <Field type="password" name="passwordConfirm" className="form-control" placeholder="비밀번호 확인" />
          <ErrorMessage name="passwordConfirm" className="formik_error" component="div" />
          <button type="submit" className="btn btn-lg btn-primary btn-block" disabled={isSubmitting}>
            다음
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default EmailPasswordForm;
