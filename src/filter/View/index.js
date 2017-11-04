import React from 'react';
import Link from './link';
import { FilterTypes } from '../../constants';

import './style.css';

function view() {
  return (
    <div className="filter">
      <div className="filter-box">
        <Link filter={FilterTypes.DONE}> {FilterTypes.DONE}</Link>
        <Link filter={FilterTypes.TODO}>{FilterTypes.TODO}</Link>
        <Link filter={FilterTypes.ALL}>{FilterTypes.ALL}</Link>
      </div>
    </div>
  );
}

export default view;
