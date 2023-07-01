import React from "react";
import ContactItem from './ContactItem';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <ContactItem
            removeContact={removeContact}
            name={name}
            number={number}
            id={id} />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  ).isRequired,
};

export default ContactList;


