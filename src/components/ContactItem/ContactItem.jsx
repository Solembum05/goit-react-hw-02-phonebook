import PropTypes from 'prop-types';
import React from 'react';
import css from './ContactItem.module.css';

const ContactItem = ({ removeContact, id, name, number }) => (
  <div className={css.contactSection}>
    <p className={css.info}>
      {name}: {number}
    </p>
    <button
      className={css.deleteButton}
      type="button"
      onClick={() => removeContact(id)}
    >
      Delete
    </button>
  </div>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
