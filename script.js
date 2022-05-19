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
    speakerTitle: 'Head chef of Acıktım',
    speakerInfo: 'Bamidele loves experimenting.',
  },
  // speaker2
  {
    speakerImg: 'images/speakers/danny-tilki.jpeg',
    speakerName: 'Danny Tilki',
    speakerTitle: 'Head chef of Yiyin Gari',
    speakerInfo: 'Danny started learning as a child.',
  },
  // speaker3
  {
    speakerImg: 'images/speakers/duru-teke.jpeg',
    speakerName: 'Duru Teke',
    speakerTitle: 'Head chef of Of Mutfak',
    speakerInfo: 'Duru teaches kids to cook.',
  },
  // speaker4
  {
    speakerImg: 'images/speakers/hla-forney.jpeg',
    speakerName: 'Hla Forney',
    speakerTitle: 'Sous chef of Ev',
    speakerInfo: 'Hla recreates street food.',
  },
  // speaker5
  {
    speakerImg: 'images/speakers/jyothi-eerkens.jpeg',
    speakerName: 'Jhothi Eerkens',
    speakerTitle: 'Head chef of Bıçak',
    speakerInfo: 'Jhothi is really into knives.',
  },
  // speaker6
  {
    speakerImg: 'images/speakers/paget-basso.jpeg',
    speakerName: 'Paget Basso',
    speakerTitle: 'Head chef of Oda',
    speakerInfo: 'Paget is a soup wizard.',
  },
];

const speakers = document.querySelector('.speakers-container');

Array.from(speakers.children).forEach((child, index) => {
  child.innerHTML = `
      <div class="photo-container">
        <img class="photo" src="${speakersData[index].speakerImg}">
      </div>
      <div class="speaker-info">
        <p class="name">${speakersData[index].speakerName}</p>
        <p class="title">${speakersData[index].speakerTitle}</p>
        <hr>
        <p class="speaker-about">${speakersData[index].speakerInfo}</p>
      </div>
    `;
});