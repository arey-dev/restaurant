import './styles/reset.css';
import './styles/base.css';
import './styles/index.css';

const header = () => {
  // create header elements
  const header = document.createElement('header');
  const header_cont = document.createElement('div');
  const header_h1 = document.createElement('h1');
  const header_btn_cont = document.createElement('div');
  const header_btn1 = document.createElement('button');
  const header_btn2 = document.createElement('button');
  const header_btn3 = document.createElement('button');

  // add class to header elements
  header_cont.classList.add('container');
  header_cont.classList.add('grid');
  header_btn_cont.classList.add('btn-container');
  header_btn1.classList.add('button');
  header_btn2.classList.add('button');
  header_btn3.classList.add('button');

  // header contents
  header_h1.textContent = "Elise Cravings";
  header_btn1.textContent = 'Home';
  header_btn2.textContent = 'Menu';
  header_btn3.textContent = 'Contact';

  // append elements
  header_btn_cont.append(header_btn1);
  header_btn_cont.append(header_btn2);
  header_btn_cont.append(header_btn3);
  header_cont.append(header_h1);
  header_cont.append(header_btn_cont);
  header.append(header_cont);

  return header;
}

content.append(header());