'use strict';
const CHARACTERS = [
  {
    id: 'card-0',
    link: 'assets/catwoman.jpg',
    title: 'Catwoman',
    subtitle: 'Selina Kyle',
    description:
      'Is a fictional character created by Bill Finger and Bob Kane who appears in American comic books published by DC Comics, commonly in association with Batman.'
  },
  {
    id: 'card-1',
    link: 'assets/harley-quinn.jpg',
    title: 'Harley Quinn',
    subtitle: 'Dr. Harleen Frances Quinzel',
    description:
      'Is a fictional character appearing in media published by DC Entertainment. Created by Paul Dini and Bruce Timm to serve as a new supervillain and a romantic interest for the Joker.'
  },
  {
    id: 'card-2',
    link: 'assets/joker.jpg',
    title: 'Joker',
    subtitle: 'Unknown',
    description:
      'Is a supervillain created by Bill Finger, Bob Kane, and Jerry Robinson who first appeared in the debut issue of the comic book Batman (April 25, 1940), published by DC Comics.'
  },
  {
    id: 'card-3',
    link: 'assets/mr-freeze.png',
    title: 'Mr. Freeze',
    subtitle: 'Dr. Victor Fries',
    description:
      'Is a fictional supervillain appearing in American comic book published by DC Comics. Created by writer Dave Wood and artist Sheldon Moldoff, he first appeared in Batman #121.'
  },
  {
    id: 'card-4',
    link: 'assets/penguin.png',
    title: 'Penguin',
    subtitle: 'Oswald Chesterfield Cobblepot',
    description:
      'Is a fictional supervillain appearing in comic books published by DC Comics, commonly as an adversary of the superhero Batman.'
  },
  {
    id: 'card-5',
    link: 'assets/phantasm.jpg',
    title: 'Phantasm',
    subtitle: 'Andrea Beaumont',
    description:
      'Andrea Beaumont, also known as the Phantasm, is a fictional supervillain and antiheroine in the DC animated universe (DCAU) created by Alan Burnett and Paul Dini.'
  },
  {
    id: 'card-6',
    link: 'assets/poison-ivy.jpg',
    title: 'Poison Ivy',
    subtitle: 'Dr. Pamela Lillian Isley',
    description:
      'Is a fictional supervillain appearing in comic books published by DC Comics, commonly in Batman stories. Poison Ivy was created by Robert Kanigher and Sheldon Moldoff, and made her debut in Batman #181 (June 1966).'
  },
  {
    id: 'card-7',
    link: 'assets/ras-al-ghul.png',
    title: "Ra's Al Ghul",
    subtitle: 'The Head of the Demon',
    description:
      'Is a fictional supervillain appearing in American comic books published by DC Comics, commonly as an adversary of the crime-fighting vigilante Batman.'
  },
  {
    id: 'card-8',
    link: 'assets/riddler.png',
    title: 'Riddler',
    subtitle: 'Edward Nigma',
    description:
      'Is a fictional supervillain appearing in comic books published by DC Comics, created by Bill Finger and Dick Sprang.'
  },
  {
    id: 'card-9',
    link: 'assets/twoface.jpg',
    title: 'Two Face',
    subtitle: 'Harvey Dent',
    description:
      'Is a fictional supervillain appearing in comic books published by DC Comics, commonly as an adversary of the superhero Batman.'
  }
];

class CardsListComponent extends HTMLElement {
  lastCardIndex = 6;

  constructor() {
    super();

    this.setupShadow();
  }

  connectedCallback() {
    this.setupCards();
    this.setupClickListener();
  }

  setupShadow() {
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.innerHTML = `
      <link rel="stylesheet" href="normalize.css" />
      <link rel="stylesheet" href="cards-list-component/cards-list-component.css" />

      <main class="main-content"></main>
      <button type="button" class="button" id="add-card-button">Add Card</button>
    `;
  }

  setupCards() {
    const container = this.shadow.querySelector('.main-content');
    CHARACTERS.slice(0, this.lastCardIndex).map((character) =>
      this.generateCard(character, container)
    );
  }

  generateCard(character, container) {
    const newElement = document.createElement('card-component');
    newElement.setAttribute('image-link', character.link);
    newElement.setAttribute('title', character.title);
    newElement.setAttribute('subtitle', character.subtitle);
    newElement.setAttribute('description', character.description);
    newElement.id = character.id;
    newElement.addEventListener('DeleteCard', () => this.removeCard(character.id));

    container.appendChild(newElement);
  }

  setupClickListener() {
    const button = this.shadow.getElementById('add-card-button');
    button.addEventListener('click', (e) => this.addCard());
  }

  addCard() {
    this.lastCardIndex++;
    if (this.lastCardIndex <= CHARACTERS.length) {
      this.generateCard(
        CHARACTERS[this.lastCardIndex - 1],
        this.shadow.querySelector('.main-content')
      );
    }
  }

  removeCard(id) {
    this.shadow.getElementById(id).remove();
  }
}

customElements.define('cards-list', CardsListComponent);
