import React from 'react';

import css from './Phonebook.module.css';


class Phonebook extends React.Component {
  state = {
    name: '',
    number: '',
  };



  handleInputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  
  handleSubmit = e => {
    e.preventDefault();
    

    this.props.addContact({...this.state});

    this.reset();
    
  };



  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <label>
            Name
            <input
              className={css.input}
              value={this.state.name}
              onChange={this.handleInputChange}
              type="text"
              name="name"
                          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label >
            Number
            <input
              className={css.input}
              value={this.state.number}
              onChange={this.handleInputChange}
              type="tel"
              name="number"
              
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}


export default Phonebook;