import { Component } from 'react';
import Form from './Form/Form';
import Contact from './Contacts/Contacts';
// import ContactsItem from './ContactsItem/ContactsItem';
import shortid from 'shortid';

class App extends Component {
  state = {
    name: '',
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(prev => {
      return [...prev.contacts, contact];
    });
  };
  onRemove = id => {
    this.setState(contacts => contacts.id !== id);
  };
  render() {
    const { contacts } = this.state;
    return (
      <>
        <Form onSubmit={this.addContact}></Form>
        <div>
          <Contact
            renderContacts={contacts}
            onDeleteContact={this.onRemove}
          ></Contact>
        </div>
      </>
    );
  }
}

export default App;

// import shortid from 'shortid';

// class App extends Component {
//   state = {
//     ...INITIAL_STATE,
//   };
//   loginInputId = shortid.generate();

//   handleChange = ({ target }) => {
//     const { name, value, type, checked } = target;
//     this.setState({ [name]: type === 'checkbox' ? checked : value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     // this.props.onSubmit(this.state.login);
//     // this.reset();
//   };

//   reset = () => {
//     INITIAL_STATE();
//   };

//   render() {
//     const { login, email, password, agreed, gender, age } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input
//             type="text"
//             placeholder="Enter login"
//             name="login"
//             value={login}
//             onChange={this.handleChange}
//             // id={this.loginInputId}
//           />
//         </label>
//         <label>
//           Email
//           <input
//             type="email"
//             placeholder="Enter email"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//             // id={this.loginInputId}
//           />
//         </label>
//         <label>
//           Password
//           <input
//             type="password"
//             placeholder="Enter password"
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//             // id={this.loginInputId}
//           />
//         </label>

//         <button type="submit">Sign up as</button>
//         <label>
//           Agree to terms
//           <input
//             name="checkbox"
//             type="checkbox"
//             checked={agreed}
//             onChange={this.handleChange}
//           />
//         </label>

//         <button type="submit" disabled={!agreed}>
//           Sign up as
//         </button>
//         <h2>Choose your gender</h2>
//         <label>
//           Male
//           <input
//             type="radio"
//             checked={gender === Gender.MALE}
//             name="gender"
//             value={Gender.MALE}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Female
//           <input
//             type="radio"
//             checked={gender === Gender.FEMALE}
//             name="gender"
//             value={Gender.FEMALE}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label htmlFor={this.loginInputId}>
//           <h2>Choose your age</h2>
//           <select name="age" value={age} onChange={this.handleChange}>
//             <option value="" disabled>
//               ...
//             </option>
//             <option value="18-25">18-25</option>
//             <option value="26-35">26-35</option>
//             <option value="36+">36+</option>
//           </select>
//         </label>

//         <button type="submit" disabled={!agreed} id={this.loginInputId}>
//           Sign up as {login}
//         </button>
//       </form>
//     );
//   }
// }
