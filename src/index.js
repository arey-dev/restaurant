import './styles/reset.css';
import './styles/base.css';
import './styles/index.css';
import './styles/home.css';
import './styles/menu.css';
import './styles/contact.css';
import home from './scripts/home.js';
import menu from './scripts/menu.js';
import contacts from './scripts/contact.js';

const Header = () => {
  // create header elements
  const header = document.createElement('header');
  const header_cont = document.createElement('div');
  const header_h1 = document.createElement('h1');
  const header_nav = document.createElement('nav');
  const nav_btn1 = document.createElement('button');
  const nav_btn2 = document.createElement('button');
  const nav_btn3 = document.createElement('button');

  // add class to header elements
  header_cont.classList.add('container');
  header_cont.classList.add('grid');
  header_nav.classList.add('nav');
  nav_btn1.classList.add('button');
  nav_btn2.classList.add('button');
  nav_btn3.classList.add('button');

  // add attributes
  nav_btn1.setAttribute('data-section', 'home');
  nav_btn2.setAttribute('data-section', 'menu');
  nav_btn3.setAttribute('data-section', 'contacts');
  
  // header contents
  header_h1.textContent = "Elise Cravings";
  nav_btn1.textContent = 'Home';
  nav_btn2.textContent = 'Menu';
  nav_btn3.textContent = 'Contacts';

  // append elements
  header_nav.append(nav_btn1);
  header_nav.append(nav_btn2);
  header_nav.append(nav_btn3);
  header_cont.append(header_h1);
  header_cont.append(header_nav);
  header.append(header_cont);

  const getHeaderElem = () => header;
  const getNav = () => header_nav;

  return {
    getHeaderElem,
    getNav,
  }
};

// cache dom 
const header = Header();
const headerNav = header.getNav();
const homeSection = home();
const menuSection = menu();
const contactSection = contacts();

// create main elem
const main = () => {
  const main = document.createElement('main');
  main.append(homeSection);
  main.append(menuSection);
  main.append(contactSection);

  return main;
};

// append to content
content.append(header.getHeaderElem());
content.append(main());

// helper function for event handler
// hides the section from the ui
const hideSection = () => {
  homeSection.style.display = 'none';
  menuSection.style.display = 'none';
  contactSection.style.display = 'none';
};

// adds a listener to each button
// Shows the selected section on the ui
headerNav.onclick = (event) => {
  const button = event.target;
  const buttonAttr = button.getAttribute('data-section');

  if(button.tagName !== 'BUTTON') return;

  if(buttonAttr === 'home') {
    hideSection();
    homeSection.style.display = 'block';
  }

  if(buttonAttr === 'menu') {
    hideSection();
    menuSection.style.display = 'block';
  }

  if(buttonAttr === 'contacts') {
    hideSection();
    contactSection.style.display = 'block';
  }
};
