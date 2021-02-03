import shortid from 'shortid';

const { Component } = require('react');

class ContactsItem extends Component {
  state = {
    name: ' ',
    number: ' ',
    id: shortid(),
  };
  // onRemove = e => {
  //   this.setState.name = e.currentTarget.value;
  //   this.setState.number = e.currentTarget.value;
  // };
  render() {
    return (
      <li key={this.id}>
        <span>
          {this.name}: {this.number}
        </span>
      </li>
    );
  }
}
export default ContactsItem;
