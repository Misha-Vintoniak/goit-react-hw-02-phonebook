import { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  onChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
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
              value={name}
              onChange={this.onChange}
              id={this.nameInputId}
            />
          </label>
          <label htmlFor={this.numberInputId}>
            Number
            <input
              type="tel"
              name="number"
              placeholder="Enter phone"
              onChange={this.onChange}
              value={number}
              id={this.numberInputId}
            />
          </label>
          <button type="submit" disabled={name === '' && number === ''}>
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
