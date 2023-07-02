import React from 'react';
import Phonebook from './Phonebook/Phonebook'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'
import css from './App.module.css';
import { nanoid } from 'nanoid'
class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  isFound = name => {
    const { contacts } = this.state;
    const findName = name.trim().toLowerCase();

    return contacts.some(item => item.name.toLowerCase() === findName);
  };

  formSubmitHandler = data => {

        if (this.isFound(data.name)) {
          alert(`${data.name} is already in contacts`);
          return;
        }

    const newContact = {
      ...data,
      id: nanoid(),
    }

    
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));


  };

  onRemoveContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  };
    

  onFilterContact = event => {
    this.setState({ filter: event.target.value });
  };

  getOneContact = () => {
    const { contacts, filter } = this.state;
    const normalizeValue = filter.toLowerCase();

    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizeValue)
    );
  };

  render() {
      const {contacts, filter} =this.state;

    return (
      <div>
        <Phonebook addContact={this.formSubmitHandler} state={this.state} />
        <h2 className={css.title}>Contacts</h2>

        <Filter
          onFilterData={filter}
          onFilterContact={this.onFilterContact}
        />

        {contacts.length > 0 && (
          <ContactList
            removeContact={this.onRemoveContact}
            contacts={this.getOneContact()}
          />
        )}
      </div>
    );
  }
}

export default  App ;
