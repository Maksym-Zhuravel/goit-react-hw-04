import { Formik, Form, Field } from "formik";

export default function SearchBar() {
  const handleSubmit = (evt, actions) => {
    console.log(evt);
    actions.resetForm();
  };

  return (
    <>
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="search"></Field>
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </>
  );
}
