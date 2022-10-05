import './styles/reset.css';
import './styles/base.css';
import './styles/index.css';
import about_img from './images/about_img.jpg';

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
};

const home = () => {
  const elems = [];

  // create home elements
  const about = document.createElement('section');
  const about_cont = document.createElement('div');
  const about_h2 = document.createElement('h2');
  const about_p = document.createElement('p');
  const about_fig = document.createElement('figure');
  const about_fig_img = document.createElement('img');
  const about_fig_cap = document.createElement('figcaption');

  // add classes and id
  about.setAttribute('id', 'about');
  about_cont.className = 'container container--about';  

  // add contents to elements
  about_h2.textContent = 'About';
  about_p.textContent = 'Elise Cravings is a restaurant that will satisfy your cravings. We have a wide variety of food choices for people with different tastes. Aside from the delicious food, Elise Cravings have a nice ambience that will make you enjoy every bite!';
  about_fig_img.src = about_img;
  about_fig_cap.textContent = 'Elise Cravings on a typical busy day.';

  // append elements
  about_fig.append(about_fig_img);
  about_fig.append(about_fig_cap);
  about_cont.append(about_h2);
  about_cont.append(about_p);
  about_cont.append(about_fig);
  about.append(about_cont);

  // push elements to array
  elems.push(about);

  // add staff section

  return elems;
}

const main = () => {
  const main = document.createElement('main');
  main.append(...home());

  return main;
};

content.append(header());
content.append(main());