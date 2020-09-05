import React from 'react';

import styles from './styles.module.css';

function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.circle} />
      <div className={styles.circle} />
      <div className={styles.circle} />
    </div>
  );
}

export default Loader;
