// import { number } from 'prop-types';

const Contacts = ({ contacts, onRemove }) => {
  return (
    <div>
      <p> Contacts</p>
      <ul>
        {contacts.map(({ name, number, id }) => {
          return (
            <li key={id}>
              <span>
                {name}: {number}
              </span>
              <button onClick={() => onRemove(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Contacts;
