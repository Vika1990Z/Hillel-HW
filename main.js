
sessionStorage.setItem("left", "0");

document.querySelector('.square').addEventListener('click', () => {
  let timerId = setInterval(moveObject, 10);

  setTimeout(() => { 
    clearInterval(timerId); 
    console.log('stop'); 
  }, 5000);
})



function moveObject() {
  if (document.querySelector('.square').style.left === '90%') return;

  let left = sessionStorage.getItem('left');
  left ++;
  sessionStorage.setItem("left", left);

  document.querySelector('.square').style.left = sessionStorage.getItem('left')+"%";
  console.log(document.querySelector('.square').style.left);
}



