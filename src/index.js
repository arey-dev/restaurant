import './styles/reset.css';
import './styles/base.css';
import './styles/index.css';

const header = () => {
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

  // header contents
  header_h1.textContent = "Elise Cravings";
  nav_btn1.textContent = 'Home';
  nav_btn2.textContent = 'Menu';
  nav_btn3.textContent = 'Contact';

  // append elements
  header_nav.append(nav_btn1);
  header_nav.append(nav_btn2);
  header_nav.append(nav_btn3);
  header_cont.append(header_h1);
  header_cont.append(header_nav);
  header.append(header_cont);

  return header;
}

content.append(header());