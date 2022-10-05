
const contacts = () => {
  const contacts = document.createElement('section');
  contacts.setAttribute('id', 'contacts')

  // container
  const contacts_cont = document.createElement('div');
  contacts_cont.className = 'container container--contacts';

  const contacts_h2 = document.createElement('h2');
  contacts_h2.textContent = 'Contacts';

  const contacts_address = document.createElement('address');
  contacts_address.innerHTML = '<span>Call Us</span><a href="#">(311) 555-2368</a><span>Message Us</span><a href="#">jim@rock.com</a><span>Visit Us</span><a href="#">192 S 500 E <br/> Fork, Utah <br/> US</a>';

  contacts_cont.append(contacts_h2);
  contacts_cont.append(contacts_address);
  contacts.append(contacts_cont);
  
  return contacts;
};

export default contacts;