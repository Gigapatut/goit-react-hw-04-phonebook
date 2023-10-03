import React, { useState, useEffect } from 'react';
import css from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';

import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter'
import { nanoid } from 'nanoid';

export default function App() {

  const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

  const [contacts, setContacts] = useState(parsedContacts ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (name, number) => {
    let contact = { id: nanoid(), name: name, number: number };
    
    const contactsName = contacts.map(el => el.name);
    if (contactsName.includes(name)) {
      alert(`${name} is alredy in contacts`);
    } else {
      setContacts(contacts.concat(contact));
    }
  };
  const changeFilter = event => {
    setFilter(event.currentTarget.value.toLowerCase());
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

