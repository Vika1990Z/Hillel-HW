import './styles.scss'

import React from 'react';

import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';


const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {/* <label htmlFor={props.id || props.name}>{label}</label> */}
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <>
        <div className="error">{meta.error}</div>
        </>
      ) : null}
    </>
  );
};

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {/* <label htmlFor={props.id || props.name}>{label}</label> */}
      <textarea rows={10} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {/* <label htmlFor={props.id || props.name}>{label}</label> */}
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyValidationSchema = Yup.object({
  title: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  body: Yup.string()
    .required('Required'),
    userId: Yup.string()
    .oneOf(
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      'Invalid User ID'
    )
    .required('Required'),
})


const FormicForm = ({setPosts, posts}) => {
  const initialValues = {title: '', body: '', userId: "" };

  const handleSubmition = (values, { resetForm }) => {
    console.log("start submitting")
    console.log('values', values)
    fetch ("https://jsonplaceholder.typicode.com/posts", {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then (res => res.json())
      .then (post => {
        console.log(post);
        setPosts([...posts, post])
        
    });
    resetForm();
  }

  return (
  <div className='form'>
    <h1>New Post</h1>
    <Formik
      initialValues={initialValues}
      validationSchema={MyValidationSchema}
      onSubmit={handleSubmition}
    >
      {(props) => {
        console.log(props)
        return (
        <Form>
           <MyTextInput
             label="Post Title"
             name="title"
             type="text"
             placeholder="Post Title..."
           />

          <MyTextArea
             label="Post Body"
             name="body"
             type="text"
             placeholder="Post body..."
           />
            <MySelect label="User Id" name="userId">
            <option value="">Select User Id</option>
            <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
             <option value="6">6</option>
             <option value="7">7</option>
             <option value="8">8</option>
             <option value="9">9</option>
             <option value="10">10</option>
          </MySelect>

          <button type="submit" disabled={!props.isValid || !props.dirty}>Add</button>
        </Form>
      )}}
    </Formik>
  </div>
)};

export default FormicForm;