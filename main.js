const userData = {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
};

const { 
  id, 
  name, 
  username, 
  email, 
  address: {street, suite, city, zipcode, geo: {lat, lng}},
  phone,
  website,
  company: {name: companyName, catchPhrase, bs}
} = userData;

const main = document.querySelector('.cards');

const renderUser = () => {
  let card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
  <background-text>${ id }</background-text>
  <h3>${ name }</h3>
  <p><span>Username: </span> ${ username }</p> 
  <p><span>Email: </span> ${ email }</p> 
  <p><span>Phone: </span> ${ phone }</p> 
  <p><span>Website: </span> ${ website }</p> 
  <p><span>Company: </span> ${ companyName }</p> 
  <p><span>Catch Phrase: </span> ${ catchPhrase }</p> 
  <p><span>Address: </span> ${ street }, ${ suite }, ${ city }, ${ zipcode }</p> 
  <p><span>Geo: </span> (${ lat }, ${ lng })</p> 
  `
  main.append(card);
}

renderUser(userData);

