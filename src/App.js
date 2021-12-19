import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactsList from './components/ContactList/ContactsList';
import useLocalStorage from './components/hooks/uselocalstorage';
import './App.css';

function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Vova Putin', number: '459-12-56' },
    { id: 'id-2', name: 'Vitya Poroshenko', number: '443-89-12' },
    { id: 'id-3', name: 'Vova Lenin', number: '645-17-79' },
    { id: 'id-4', name: 'Joseph Stalin', number: '227-91-26' },
  ]);

  const formSubmitData = ({ name, number }) => {
    const newItem = { id: nanoid(), name: name, number: number };
    let isUnique = contacts.some(el => el.name === name);
    if (!isUnique) {
      setContacts(prevContacts => {
        return [...prevContacts, newItem];
      });
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const renderContacts = () => {
    const toLowerCaseFilter = filter.toLowerCase();
    return contacts.filter(el =>
      el.name.toLowerCase().includes(toLowerCaseFilter),
    );
  };

  const deleteContact = id => {
    setContacts(prevContacts => {
      return prevContacts.filter(el => el.id !== id);
    });
  };

  return (
    <main className="main">
      <h1 className="title">Phonebook</h1>
      <ContactForm onSubmit={formSubmitData} />
      <h2 className="title">Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactsList
        renderContacts={renderContacts()}
        deleteContact={deleteContact}
      />
    </main>
  );
}

export default App;
