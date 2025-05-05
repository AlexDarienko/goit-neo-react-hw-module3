import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const ContactForm = ({ onAdd }) => {
  const schema = Yup.object().shape({
    name: Yup.string().min(3).max(50).required('Required'),
    number: Yup.string().min(3).max(50).required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAdd(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label>
          Name
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage component="span" name="name" className={css.error} />
        </label>
        <label>
          Number
          <Field className={css.input} type="text" name="number" />
          <ErrorMessage component="span" name="number" className={css.error} />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
