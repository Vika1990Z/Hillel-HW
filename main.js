const cards = document.querySelectorAll('div.card');

cards.forEach(card => {
    card.addEventListener('click', event => {
    console.log(event);
    if (event.target.innerText === "+") {
        event.target.nextElementSibling.value++;
    }
    if (event.target.innerText === "-") {
        event.target.previousElementSibling.value--;
    }
  
})
})