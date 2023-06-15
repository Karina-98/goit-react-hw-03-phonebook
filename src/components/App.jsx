import React from 'react';


import { Titles } from './Title/Title';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  createUser = contact => {
    const newUser = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (newUser) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
    }));
  };


  getFiltredContacts = () => {
    const { contacts, filter } = this.state;

    const filtredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filtredContacts;
  };

  getFilterChange = (e) =>{
    this.setState({filter: e.target.value});
  }

  onDeleteContact = (id) =>{
    this.setState(prevState => ({contacts: prevState.contacts.filter(contact => contact.id !== id)}));
  };

  render() {
    const visibleContacts = this.getFiltredContacts();
    return (
      <Container>
        <Titles>Phonebook</Titles>
        <ContactForm createUser={this.createUser} />

        <Titles>Contacts</Titles>
        {this.state.contacts.length >0 ? (<Filter value={this.state.filter} onChange={this.getFilterChange} />): <p>Your phonebook is empty. Add first contact!</p>}
        <ContactList contacts={visibleContacts} deleteContact={this.onDeleteContact}/>
      </Container>
    );
  }
}
