let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  let input = form.querySelector('input');
  let regex = /^\+38\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/;

 validateField(input, regex);

})


function validateField(field, regex) {
  isvalid = true;

  if (!regex.test(field.value)) {
      field.classList.add('notvalid');
      isValid = false;
      alert ('FAILED: Not valid number');
    } else {
      field.classList.remove('notvalid');
      alert ('SUBMITED: Valid number');
    }

  return isValid
}


