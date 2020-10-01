const cardList = document.querySelector('.card-list');

function setHeroes() {
  fetch('https://private-5a5cf-dccomics.apiary-mock.com/characters')
    .then((res) => res.json())
    .then((data) => {
      if (data && data.length) {
        data.forEach((element) => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `
            <img
              class="card__img"
              src="${element.photo}"
              alt="${element.name}"
            />
            <h5 class="name">${element.name}</h5>
            <div class="card__info">
              <h6 class="real-name">${element.realName}</h6>
              <p class="description">${element.description}</p>
            </div>
          `;
          cardList.appendChild(card);
        });
      }
    });
}

setHeroes();
