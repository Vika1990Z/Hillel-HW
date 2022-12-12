import React from 'react';
import { useNavigate } from "react-router-dom";

import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

import {connect} from "react-redux";
import { setSearchedMovies } from '../../store/searched/actions'
import { generateSearchMovieURL } from '../shared/utils';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <>
        <div className="error">{meta.error}</div>
        </>
      ) : null}
    </>
  );
};

const MyValidationSchema = Yup.object({
  search: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
})


const FormicForm = ({setSearchedMovies}) => {
  const initialValues = {search: "" };
  const navigate = useNavigate();

  const handleSubmition = (values, { resetForm }) => {
      fetch(generateSearchMovieURL(values.search))
      .then (res => res.json())
      .then (data => {
        setSearchedMovies(data.results)})
        navigate(`/search/${values.search}`);
        resetForm();
  }

  return (
  <div>
    <Formik
      initialValues={initialValues}
      validationSchema={MyValidationSchema}
      onSubmit={handleSubmition}
    >
      {(props) => {
        return (
        <Form>
           <MyTextInput
             label="serach what to watch"
             name="search"
             type="text"
             placeholder="serach what to watch..."
           />

          <button type="submit" disabled={!props.isValid || !props.dirty}>Search</button>
        </Form>
      )}}
    </Formik>
  </div>
)};


const mapDispatchToProps = {
  setSearchedMovies,
}

export default connect(null, mapDispatchToProps)(FormicForm);