import menu_noodles from '../images/menu_noodles.png';
import menu_tacos from '../images/menu_tacos.png';
import menu_pasta from '../images/menu_pasta.png';
import menu_ribs from '../images/menu_ribs.png';

const menu = () => {
  // create elements
  const menu = document.createElement('section');

  const menu_cont = document.createElement('div');
  menu_cont.className = 'container container--menu';

  const menu_h2 = document.createElement('h2');
  menu_h2.textContent = 'Menu';

  const menu_grid = document.createElement('div');
  menu_grid.className = 'grid';

  // create menus
  const grid_row1 = document.createElement('section');
  grid_row1.className = 'menu-row';

  const row1_h3 = document.createElement('h3');
  row1_h3.textContent = 'Pasta'

  const row1_img = document.createElement('img');
  row1_img.src = menu_pasta;

  const row1_price = document.createElement('p');
  row1_price.className = 'price';
  row1_price.textContent = '$8.00';

  grid_row1.append(row1_h3);
  grid_row1.append(row1_img);
  grid_row1.append(row1_price);

  const grid_row2 = document.createElement('section');
  grid_row2.className = 'menu-row';

  const row2_h3 = document.createElement('h3');
  row2_h3.textContent = 'Tacos'

  const row2_img = document.createElement('img');
  row2_img.src = menu_tacos;

  const row2_price = document.createElement('p');
  row2_price.className = 'price';
  row2_price.textContent = '$5.20';

  grid_row2.append(row2_h3);
  grid_row2.append(row2_img);
  grid_row2.append(row2_price);

  const grid_row3 = document.createElement('section');
  grid_row3.className = 'menu-row';

  const row3_h3 = document.createElement('h3');
  row3_h3.textContent = 'Spare Ribs'

  const row3_img = document.createElement('img');
  row3_img.src = menu_ribs;

  const row3_price = document.createElement('p');
  row3_price.className = 'price';
  row3_price.textContent = '$15.00';

  grid_row3.append(row3_h3);
  grid_row3.append(row3_img);
  grid_row3.append(row3_price);

  const grid_row4 = document.createElement('section');
  grid_row4.className = 'menu-row';

  const row4_h3 = document.createElement('h3');
  row4_h3.textContent = 'Chinese Noddles'

  const row4_img = document.createElement('img');
  row4_img.src = menu_noodles;

  const row4_price = document.createElement('p');
  row4_price.className = 'price';
  row4_price.textContent = '$4.00';

  grid_row4.append(row4_h3);
  grid_row4.append(row4_img);
  grid_row4.append(row4_price);

  // append to menu-rows in menu-grid
  menu_grid.append(grid_row1);
  menu_grid.append(grid_row2);
  menu_grid.append(grid_row3);
  menu_grid.append(grid_row4);

  // append all menu elements
  menu.append(menu_cont);
  menu.append(menu_h2);
  menu.append(menu_grid)

  return menu;
};

export default menu;
