// import { number } from 'prop-types';

const Contacts = ({ renderContacts, onDeleteContact }) => {
  return (
    <div>
      <p> Contacts</p>
      <ul>
        {renderContacts.map(({ name, number, id }) => {
          return (
            <li key={id}>
              <span>
                {name} : {number}
              </span>
              <button onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Contacts;
