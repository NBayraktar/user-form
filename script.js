function UserInfo(fname, lname, tel, email) {
  this.firstName = fname;
  this.lastName = lname;
  this.telephone = tel;
  this.email = email;
}

let form = document.getElementById('form');
let about = document.getElementById('about-me');

form.addEventListener('submit', sendForm);
form.addEventListener('reset', eraseData);



function sendForm() {
  let person = new UserInfo(fname.value, lname.value, tel.value, email.value);
  let textAbout = ` Thank you for signing up ${person.firstName} ${person.lastName }<br> Telephone number: ${person.telephone}<br> E-mail: ${person.email}`;
  if (person.firstName === '' && person.lastName === '' && person.telephone === '' && person.email === '') {
    about.innerHTML = '';
  } else {
    about.innerHTML = textAbout;
  }
}

function eraseData() {
  let permition = prompt('Do you want to proceed?!!!')
  if (permition === 'yes' || permition === '') {
    about.innerHTML = '';
  }
}