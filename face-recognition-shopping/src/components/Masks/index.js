import React, { useCallback, useState } from 'react';
import { func } from 'prop-types';

import { MASKS } from './constants';
import styles from './styles.module.css';

function Masks({ onSelected }) {
  const [maskSelected, setMaskSelected] = useState();

  const handleClick = useCallback(
    (mask) => {
      setMaskSelected(mask.name);
      onSelected(mask);
    },
    [onSelected]
  );

  return (
    <ul className={styles.container}>
      {MASKS.map((mask) => (
        <li
          key={mask.name}
          className={`${styles.item} ${maskSelected === mask.name ? styles.selected : ''}`}
          onClick={() => handleClick(mask)}
        >
          <img className={styles.photo} src={mask.photo} alt={mask.name} />
          <h4 className={styles.title}>{mask.name}</h4>
        </li>
      ))}
    </ul>
  );
}

Masks.propTypes = {
  onSelected: func.isRequired
};

export default Masks;
