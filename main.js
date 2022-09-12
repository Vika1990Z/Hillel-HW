
let form = document.querySelector('form');
let welcome = document.querySelector('section');
let logout = document.querySelector('.logout');
let signin = form.querySelector('.submit');

let username = localStorage.getItem('username');
let password = localStorage.getItem('password');

if (username ==='admin' && password === 'admin') {
  welcome.style.height = "100%";
}

signin.addEventListener('click', (e) => {
  e.preventDefault();
  let inputs = form.querySelectorAll('input');
  let username = form.querySelector('#username');
  let password = form.querySelector('#password');

  if (!validateFields(inputs)) {
    alert ('Not full information was added');
    return;
  }

  if (username.value!=='admin' && password.value !== 'admin') {
    alert ('User is not valid');
    inputs.forEach(input => input.value = '');
    return;
  }

  localStorage.setItem('username', username.value);
  localStorage.setItem('password', password.value);
  welcome.style.height = "100%";

})

logout.addEventListener('click', () => {
  welcome.style.height = "0%";
  localStorage.removeItem('username');
  localStorage.removeItem('password');
  

})


function validateFields(fields) {
  let isValid = true;

  fields.forEach(field => {
    if (field.value === '') {
      field.classList.add('notvalid');
      isValid = false;
    } else {
      field.classList.remove('notvalid');
    }
  })

  return isValid
}


