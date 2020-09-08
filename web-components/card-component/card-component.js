'use strict';
class CardComponent extends HTMLElement {
  shadow;

  static attrImgLink = 'image-link';
  static attrTitle = 'title';
  static attrSubtitle = 'subtitle';
  static attrDescription = 'description';

  constructor() {
    super();

    this.setupShadow();
  }

  connectedCallback() {
    this.setupClickListener();
  }

  disconnectedCallback() {
    const button = this.shadow.getElementById('remove-button');
    button.removeEventListener('click', (e) => this.cardClicked());
  }

  setupClickListener() {
    const button = this.shadow.getElementById('remove-button');
    button.addEventListener('click', (e) => this.cardClicked());
  }

  cardClicked() {
    const event = new Event('DeleteCard');
    this.dispatchEvent(event);
  }

  static get observedAttributes() {
    return [
      CardComponent.attrImgLink,
      CardComponent.attrTitle,
      CardComponent.attrSubtitle,
      CardComponent.attrDescription
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === CardComponent.attrImgLink) {
        this.shadow.getElementById(name).src = newValue;
      } else {
        this.shadow.getElementById(name).textContent = newValue;
      }
    }
  }

  setupShadow() {
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.innerHTML = `
      <link rel="stylesheet" href="normalize.css" />
      <link rel="stylesheet" href="card-component/card-component.css" />

      <div class="card">
        <div class="header">
          <img
            src="${this.getAttribute(CardComponent.attrImgLink)}"
            class="img"
            id="${CardComponent.attrImgLink}"
            alt="Batman character"
          />
          <h4 class="title" id="${CardComponent.attrTitle}"></h4>
        </div>
        <div class="content">
          <h6 class="subtitle" id="${CardComponent.attrSubtitle}"></h6>
          <p class="description" id="${CardComponent.attrDescription}"></p>
        </div>
        <div class="footer">
          <button type="button" class="button" id="remove-button">Remove</button>
        </div>
      </div>
    `;
  }
}

customElements.define('card-component', CardComponent);
