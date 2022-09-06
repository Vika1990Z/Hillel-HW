const body = document.body;
const grid = document.querySelector('.grid');

body.addEventListener ('click', function(event){
    if(event.target.classList.contains('card')) {
        let item = event.target;
        item.classList.toggle('clicked');
        item.remove();
        grid.innerHTML+=item.outerHTML;
    }
    if(event.target.nodeName == "BUTTON") {
        location.reload();
        } 
})




