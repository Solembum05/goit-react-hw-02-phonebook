import React from 'react';
import css from './Filter.module.css'


const Filter = ({ onFilterData, onFilterContact }) => {
  return (
    <div>
      <h3 className={css.title}>Find contact by name</h3>
      <input className={css.input} type="text" value={onFilterData} onChange={onFilterContact} />
    </div>
  );
};


export default Filter
