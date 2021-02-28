import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => {
  if (contacts.length === 0) {
    return null;
  }

  return (
    <ul>
      {contacts.map(({ id, name, number, onRemove }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => onRemove(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }),
  ),
};
