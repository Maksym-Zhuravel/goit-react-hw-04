import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function SearchBar({ onSearch }) {
  const imageSchema = Yup.object().shape({
    search: Yup.string().required("Please enter search term!"),
  });

  return (
    <>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values, actions) => {
          onSearch(values.search);
          actions.resetForm();
        }}
        validationSchema={imageSchema}
      >
        <Form>
          <Field type="text" name="search"></Field>
          <ErrorMessage name="search"></ErrorMessage>
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </>
  );
}
