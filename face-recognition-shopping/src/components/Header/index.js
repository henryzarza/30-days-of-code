import React from 'react';

import styles from './styles.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Machine Learning, Facial Recognition, and Masks</h1>
      <p className={styles.paragraph}>
        This demo uses
        <a
          className={styles.link}
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/justadudewhohacks/face-api.js'
        >
          face-api.js
        </a>
        to find faces, then with some math it determines face size and angle to put masks in your
        face image or the image that you upload.
      </p>
    </header>
  );
}

export default Header;
