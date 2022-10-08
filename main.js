
let url = 'https://jsonplaceholder.typicode.com/posts'
let body = document.body;
let emptyBlock = body.querySelector('.empty');
let btnAddPost = body.querySelector('.add');
let cardsHolder = body.querySelector('.cards');
let inputs = body.querySelectorAll('.input');
let submitForm = body.querySelector('.submit');
let form = body.querySelector('form');
let btnCloseForm = body.querySelector('.closebtn')
let previousBgNumber;

btnCloseForm.addEventListener('click', (e)=> {
  e.preventDefault();
  closeForm();
})

btnAddPost.addEventListener('click', function(){
  form.style.height = "100%";
  // prevent page refresh on enter
  inputs.forEach(input => {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') e.preventDefault();
    })
  })
})
  
submitForm.addEventListener('click', (event) => {
  event.preventDefault();
  inputValues = Array.from(inputs).map(input => input.value);

  if (inputValues.includes('')) {
    alert ("Not full information was added");
    inputs.forEach(input => {
      if (input.value === "") input.classList.add('notvalid');
      input.addEventListener('keyup', () => input.classList.remove('notvalid'))
    })
    return
  }

  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      title: inputs[0].value,
      body: inputs[1].value,
      userId: inputs[2].value,
      }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      },
    })
  .then((response) => response.json())
  .then((data) => {
    renderCard(data);
    closeForm();
    removeEmptyBlock();
  });
})


//HANDLERS:

// close form and clean inputs
let closeForm = () => {
  form.style.height = "0";

  inputs.forEach(input => {
    input.value= "";
    input.classList.remove('notvalid')
  })
}

// render one card
let renderCard = data => {
  console.log(data);
  let card = document.createElement('div');
  card.classList.add('card');

  if (cardsHolder.lastChild === null) {
    previousBgNumber = 0;
  } else {
    previousBgNumber = +cardsHolder.lastChild.firstChild.textContent;
  }
  let bgNumber = previousBgNumber+1;

  let cardBackground = document.createElement('background-text');
  cardBackground.textContent = bgNumber;

  let cardHeader = document.createElement('h3');
  cardHeader.textContent = data.title;

  let cardBody = document.createElement('p');
  cardBody.innerHTML = `<h4>Post for User ${data.userId}</h4>
  <p> ${data.body}</p>
  `

  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'delete';   
  deleteButton.classList.add('delete');

  card.append(cardBackground);
  card.append(deleteButton);
  card.append(cardHeader);
  card.append(cardBody);
  cardsHolder.append(card);

  if (cardsHolder.childElementCount === 1 ) card.classList.add('oneCard');
  else {cardsHolder.firstChild.classList.remove('oneCard')};

  addFunctionality(card, deleteButton);
}
  
// remove block "no added posts"
let removeEmptyBlock = () => {

    console.log('card on the page', cardsHolder.childElementCount);
    if (cardsHolder.childElementCount > 0) {
      emptyBlock.style.display = "none";
    }
}

// add functionality to card 
let addFunctionality = (card, deleteButton) => {
  card.addEventListener ('click', () => {
    card.classList.toggle('active');
  })

  deleteButton.addEventListener('click', () => {
    card.remove();
    if (cardsHolder.childElementCount === 0 ) emptyBlock.style.display = 'block';
    if (cardsHolder.childElementCount === 1 ) cardsHolder.firstChild.classList.add('oneCard');
  })

}

