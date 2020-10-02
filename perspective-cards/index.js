const COUNTRIES = [
  {
    name: 'Argentina',
    flag: '🇦🇷',
    bgColor: '#6CAAD6',
    image:
      'https://images.unsplash.com/photo-1577801599718-f4e3ad3fc794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
  },
  {
    name: 'Mexico',
    flag: '🇲🇽',
    bgColor: '#b60020',
    image:
      'https://images.unsplash.com/photo-1512813389649-acb9131ced20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
  },
  {
    name: 'Canada',
    flag: '🇨🇦',
    bgColor: '#ea0000',
    image:
      'https://images.unsplash.com/photo-1551009175-15bdf9dcb580?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80'
  },
  {
    name: 'Indonesia',
    flag: '🇮🇩',
    bgColor: '#de0000',
    image:
      'https://images.unsplash.com/photo-1555852441-ca0d327da1e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80'
  },
  {
    name: 'Jordan',
    flag: '🇯🇴',
    bgColor: '#006c2f',
    image:
      'https://images.unsplash.com/photo-1548786811-dd6e453ccca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80'
  },
  {
    name: 'Turkey',
    flag: '🇹🇷',
    bgColor: '#e2072e',
    image:
      'https://images.unsplash.com/photo-1535916707207-35f97e715e1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80'
  },
  {
    name: 'Russia',
    flag: '🇷🇺',
    bgColor: '#0052b3',
    image:
      'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
  },
  {
    name: 'Norway',
    flag: '🇳🇴',
    bgColor: '#a10d2d',
    image:
      'https://images.unsplash.com/photo-1520769669658-f07657f5a307?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
  },
  {
    name: 'Portugal',
    flag: '🇵🇹',
    bgColor: '#006100',
    image:
      'https://images.unsplash.com/photo-1501927023255-9063be98970c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80'
  },
  {
    name: 'Japan',
    flag: '🇯🇵',
    bgColor: '#d70048',
    image:
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
  },
  {
    name: 'Italy',
    flag: '🇮🇹',
    bgColor: '#00873c',
    image:
      'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
  },
  {
    name: 'Philippines',
    flag: '🇵🇭',
    bgColor: '#0c58ba',
    image:
      'https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
  }
];
const cardContainer = document.querySelector('.card-container');

function drawCards() {
  COUNTRIES.forEach((country) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.setProperty('--bg-color', country.bgColor);
    card.innerHTML = `
      <img
        class="card__img"
        src="${country.image}"
        alt="${country.name}"
      />
      <h3 class="card__title">${country.flag} ${country.name}</h3>
      <p class="card__paragraph">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur nobis eos distinctio
        explicabo commodi aut ullam architecto laudantium sed perspiciatis minima aliquid dolore
        sit veritatis, sapiente perferendis veniam repudiandae minus?
      </p>
    `;
    cardContainer.appendChild(card);
  });
}

drawCards();
