'use strict';
class NavbarComponent extends HTMLElement {
  shadow;

  constructor() {
    super();
    this.setupShadow();
  }

  setupShadow() {
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.innerHTML = `
      <link rel="stylesheet" href="normalize.css" />
      <link rel="stylesheet" href="navbar-component/styles.css" />

      <navbar class="navbar">
        <h1 class="title">Batman characters</h1>
        <p class="content">
          Batman is a fictional superhero appearing in American comic books published by DC Comics.
          The character was created by artist Bob Kane and writer Bill Finger, and first appeared in
          Detective Comics #27 in 1939. Originally named the "Bat-Man," the character is also
          referred to by such epithets as the Caped Crusader, the Dark Knight, and the World's
          Greatest Detective.
        </p>
      </navbar>
    `;
  }
}

customElements.define('navbar-component', NavbarComponent);
