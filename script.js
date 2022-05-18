// functioning burger menu and mobile navigation
const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileMenu = document.querySelector('.mobile-nav-list');
const mobileLinks = document.querySelectorAll('.mobile-links');
const body = document.querySelector('body');
// const burgerField = document.querySelector('.burger-nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  body.classList.toggle('fixed');
  mobileNav.classList.toggle('active');
});

mobileLinks.forEach((link) => link.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  body.classList.toggle('fixed');
}));

// array to hold speakers data
const speakersData = [
  // speaker1
  {
    speakerImg: 'images/speakers/bamidele-cousineau.jpeg',
    speakerName: 'Bamidele Cousinea',
    speakerTitle: 'Head chef of Of Gene Acıktım',
    speakerInfo: 'Bamidele started learning in their grandparents kitchen and became the head chef of Of Gene Acıktım at the age of 20.',
  },
  // speaker2
  {
    speakerImg: 'images/speakers/danny-tilki.jpeg',
    speakerName: 'Danny Tilki',
    speakerTitle: 'Head chef of Of Yiyin Gari',
    speakerInfo: 'Danny started learning in their grandparents kitchen and became the head chef of Of Gene Acıktım at the age of 20.',
  },
  // speaker3
  {
    speakerImg: 'images/speakers/duru-teke.jpeg',
    speakerName: 'Duru Teke',
    speakerTitle: 'Head chef of Of Gene Acıktım',
    speakerInfo: 'Duru started learning in their grandparents kitchen and became the head chef of Of Gene Acıktım at the age of 20.',
  },
  // speaker4
  {
    speakerImg: 'images/speakers/hla-forney.jpeg',
    speakerName: 'Hla Forney',
    speakerTitle: 'Head chef of Of Gene Acıktım',
    speakerInfo: 'Hla started learning in their grandparents kitchen and became the head chef of Of Gene Acıktım at the age of 20.',
  },
  // speaker5
  {
    speakerImg: 'images/speakers/jyothi-eerkens.jpeg',
    speakerName: 'Jhothi Eerkens',
    speakerTitle: 'Head chef of Of Gene Acıktım',
    speakerInfo: 'Jhothi started learning in their grandparents kitchen and became the head chef of Of Gene Acıktım at the age of 20.',
  },
  // speaker6
  {
    speakerImg: 'images/speakers/paget-basso.jpeg',
    speakerName: 'Paget Basso',
    speakerTitle: 'Head chef of Of Gene Acıktım',
    speakerInfo: 'Paget started learning in their grandparents kitchen and became the head chef of Of Gene Acıktım at the age of 20.',
  },
];

const speakers = document.querySelector('.speakers-container');

Array.from(speakers.children).forEach((child, index) => {
  child.innerHTML = `
    <div class="speaker">
      <div class="photo-container">
        <img class="photo" src="${speakersData[index].speakerImg}">
      </div>
      <div class="speaker-info">
        <p class="name">${speakersData[index].speakerName}</p>
        <p class="title">${speakersData[index].speakerTitle}</p>
        <hr>
        <p class="speaker-about">${speakersData[index].speakerInfo}</p>
      </div>
    </div>
    `;
});