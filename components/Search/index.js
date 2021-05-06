import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../../styles/search.module.css';

export default function Search() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="sticky top-0 z-20 bg-black py-1 mb-3">
      <div className="bg-darkGray flex rounded-full px-4 py-2 items-center border border-darkGray border-opacity-40 focus-within:border-blue text-lightGray focus-within:text-blue">
        <label htmlFor="search" className="sr-only">
          Search Twitter
        </label>
        <FontAwesomeIcon icon="search" className="text-lg mr-4" />
        <input
          type="text"
          name="search"
          id="search"
          className={`block w-full outline-none placeholder-lightGray bg-transparent text-white ${styles.search}`}
          placeholder="Search Twitter"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </div>
    </div>
  );
}
