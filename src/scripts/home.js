import about_img from '../images/about_img.jpg';

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

export default home;