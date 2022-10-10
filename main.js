function httpGet (object) {
  return new Promise ((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(object.method, object.url);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(xhr.status);
      }
    }
    xhr.onerror = () => {
      reject(xhr.status);
    }

    xhr.send(object.body);

  })
  
}

httpGet({
  url: "https://jsonplaceholder.typicode.com/posts",
  method: 'GET',
})
.then(data => {
    let posts = JSON.parse(data);
    console.log('method: GET');
    console.log('posts:', posts);
    posts.forEach(post => {
      renderCard(post);
    });
})
.catch(error => {
    console.log("error:", error);
});


let renderCard = data => {
  let body = document.body;
  let cardsHolder = body.querySelector('.cards');

  let card = document.createElement('div');
  card.classList.add('card');

  let cardBackground = document.createElement('background-text');
  cardBackground.textContent = data.id;

  let cardHeader = document.createElement('h3');
  cardHeader.textContent = data.title;

  let cardBody = document.createElement('p');
  cardBody.innerHTML = `<h4>Post for User ${data.userId}</h4>
  <p> ${data.body}</p>
  `
  
  card.append(cardBackground);
  card.append(cardHeader);
  card.append(cardBody);
  cardsHolder.append(card);
  
}

// httpGet({
//   url: "https://jsonplaceholder.typicode.com/posts",
//   method: 'POST',
//   body: JSON.stringify({
//     title: "Hello",
//     body: "hello from Vika",
//     userId: 1,
//   })
// })
// .then(data => {
//     console.log('method: POST');
//     let posts = JSON.parse(data);
//     console.log('post:', posts);
//     if (!Array.isArray(posts)) {
//       renderCard(posts);
//     }

// })
// .catch(error => {
//     console.log("error:", error);
// });

    


// httpGet({
//   url: "https://jsonplaceholder.typicode.com/posts/100",
//   method: 'DELETE',
// })

// .then(() => {
//     console.log('method: DELETE');
// })
// .catch(error => {
//     console.log("error:", error);
// });    
    
