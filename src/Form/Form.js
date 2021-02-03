import { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',

    filter: '',
    licence: false,
  };
  todos = {
    id: '',
    text: '',
    completed: false,
  };
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  onChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  onChekedLicence = e => {
    this.setState({ licence: e.currentTarget.checked });
  };
  onSubmit = e => {
    e.preventDefault();
    this.setState.name = e.currentTarget.value;
    this.setState.contacts = e.currentTarget.value;

    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', contacts: '', licence: false });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>Phonebook</div>
        <div>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.onChange}
              id={this.nameInputId}
            />
          </label>
          <label htmlFor={this.numberInputId}>
            Number
            <input
              type="tel"
              name="contacts"
              placeholder="Enter phone"
              onChange={this.onChange}
              value={this.state.contacts}
              id={this.numberInputId}
            />
          </label>
          <label htmlFor="">
            <input
              type="checkbox"
              name="licence"
              checked={this.state.licence}
              onChange={this.onChekedLicence}
            />
            agree
          </label>
          <button type="submit" disabled={!this.state.licence}>
            Add contact
          </button>

          {/* <div>
            <label htmlFor="">
              <input type="text" name="filter" value={this.state.filter} />
            </label>
          </div> */}
        </div>
      </form>
    );
  }
}
export default Form;
