// import { number } from 'prop-types';
import { Component } from 'react';

class ContactList extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  render() {
    return (
      <div>
        <p> Contacts</p>
        <ul>
          {this.state.contacts.map(({ id, name, number, onRemove }) => {
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
  }
}
export default ContactList;
