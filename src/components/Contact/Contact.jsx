import css from './Contact.module.css';

const Contact = ({ data, onDelete }) => {
  return (
    <div className={css.card}>
      <p>
        <span>👤</span> {data.name}
      </p>
      <p>
        <span>📞</span> {data.number}
      </p>
      <button onClick={() => onDelete(data.id)}>Delete</button>
    </div>
  );
};

export default Contact;
