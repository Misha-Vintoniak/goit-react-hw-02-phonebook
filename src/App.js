import { Component } from 'react';
import Form from './Form/Form';
import Contact from './Contacts/Contacts';
import ContactsItem from './ContactsItem/ContactsItem';

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
class App extends Component {
  state = {
    name: '',
    contacts: [],
    filter: '',
  };
  formSubmitHandler = data => {
    console.log(data);
  };
  render() {
    return (
      <>
        <Form onSubmit={this.formSubmitHandler}></Form>
        <div>
          <Contact></Contact>
        </div>
        <div>
          <ContactsItem></ContactsItem>
        </div>
      </>
    );
  }
}

export default App;
