const users = [
  {
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
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]


document.addEventListener('DOMContentLoaded', function(e){

  renderUsers(users);
  renderForm();

  const body = document.body;
  let main = document.querySelector('main');
  let btnAddUser = document.querySelector('.add');
  let cards = document.querySelectorAll('div.card');
  let inputs = document.querySelectorAll('.input');
  let submitForm = document.querySelector('.submit');
  let form = document.querySelector('form');

  cards.forEach(card => cardFunctionality(card, body));

  btnAddUser.addEventListener('click', function(){
    form.style.height = "100%";

    let btnCloseForm = document.querySelector('.closebtn');
    btnCloseForm.addEventListener('click', (e)=> {
      e.preventDefault();
      form.style.height = "0";
    })

    // prevent page refresh on enter
    inputs.forEach(input => {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') e.preventDefault();
      })
    })
    
    submitForm.addEventListener('click', (event) => {
      event.preventDefault();
      inputValues = Array.from(inputs).map(input => input.value);

      
      if (!inputValues.includes('')) {
      
        let newUser = {
          name: inputs[0].value,
          id: inputs[1].value,
          username: inputs[2].value,
          email: inputs[3].value,
          phone: inputs[4].value,
          website: inputs[5].value,
          company: inputs[6].value,
          address: inputs[7].value,
        }

        let bgNumber = +main.lastChild.firstChild.textContent+1;
        renderOneUser(newUser, bgNumber);
        newCard = main.lastChild;
        cardFunctionality(newCard, body);
        form.style.height = "0";

      } else alert ("Not full information was added");
      
    }) 
    // очистка инпутов после создания новой карточки
    inputs.forEach(input => input.value= "");
  })

})



// handlers
function removeDoubleSpace (str) {
  let res = '';
  for (let i = 0; i < str.length; i++){
      let symbol = str[i];
      let nextSymbol = str[i+1];
  
      if (symbol !== " " || symbol === " " && nextSymbol !== " ") {
          res += symbol;
      }
      
  }
  return res;
}

let addressString = user => {
  if (user.address.street != undefined) {
    let addr = removeDoubleSpace(`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`);
    return addr;
  } else {
    let addr = removeDoubleSpace(`${user.address}`);
    return addr;
  }
  
}

let companyString = user => {
  if (user.company.name != undefined) return user.company.name;
  else return user.company;
}

let renderOneUser = (user, bgNumber) => {

  let addr = addressString(user);
  let company = addressString(user);

  let card = document.createElement('div');
  card.classList.add('card');

  let cardBackground = document.createElement('background-text');
  cardBackground.textContent = bgNumber;

  let cardHeader = document.createElement('h3');
  cardHeader.textContent = user.name;

  let cardBody = document.createElement('p');
  cardBody.innerHTML = `
  <p><span>ID: </span> ${user.id}</p> 
  <p><span>Username: </span> ${user.username}</p> 
  <p><span>Email: </span> ${user.email}</p> 
  <p><span>Phone: </span> ${user.phone}</p> 
  <p><span>Website: </span> ${user.website}</p> 
  <p><span>Company: </span> ${company}</p> 
  <p><span>Address: </span> ${addr}</p> 
  `

  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'delete';   
  deleteButton.classList.add('delete');
  deleteButton.style.display = 'none';
  
  card.append(cardBackground);
  card.append(deleteButton);
  card.append(cardHeader);
  card.append(cardBody);

  let main = document.querySelector('main.grid');
  main.append(card)

  document.body.append(main);



}

let renderUsers = userList => {
  let bgNumber = 1;
  userList.forEach(user => {
      renderOneUser(user, bgNumber);
      bgNumber++;
  })
}

let renderForm = () => {

  let form = document.createElement('form');
  form.classList.add('grid');
  document.body.append(form);

  form.innerHTML = `
    <button class="closebtn">&times;</button>
    <h2>Add New User</h2>
    <div class="input-conteiner">
            <label class="label" for="name">Enter full name</label>
            <input class="input" type="text" name="name" id="name" placeholder="name">
            </div>
    <div class="input-conteiner">
            <label class="label" for="id">Enter user ID</label>
            <input class="input" type="text" name="id" id="id" placeholder="id">
            </div>        
    <div class="input-conteiner">
            <label class="label" for="username">Enter username </label>
            <input class="input" type="text" name="username" id="username" placeholder="username">
            </div>        
    <div class="input-conteiner">
            <label class="label" for="email">Enter email address </label>
            <input class="input" type="text" name="email" id="email" placeholder="email">
            </div> 
    <div class="input-conteiner">
            <label class="label" for="phone">Enter phone number </label>
            <input class="input" type="text" name="phone" id="phone" placeholder="phone">
            </div>    
    <div class="input-conteiner">
            <label class="label" for="website">Enter website </label>
            <input class="input" type="text" name="website" id="website" placeholder="website">
            </div>   
    <div class="input-conteiner">
            <label class="label" for="company">Enter company name </label>
            <input class="input" type="text" name="company" id="company" placeholder="company">
            </div>    
    <div class="input-conteiner">
            <label class="label" for="address">Enter address</label>
            <input class="input" type="text" name="address" id="address" placeholder="address">
            </div>  
            
    <input class="submit" type="submit" value="Submit">               
    `

}

let cardFunctionality = (card, body) => {
  card.addEventListener('click', function(event){
    // make card active after click
      if(card.classList.toggle('active')){
        card.querySelector('button.delete').style.display = 'inline';
      } else {
        card.querySelector('button.delete').style.display = 'none';
      }
    
    // delete card if we click on the button
    if (event.target.className == 'delete') {
      card.remove();
    }
    })
      
    // make delete button visible when we hover on it
    card.addEventListener('mouseover', function(event){
      card.querySelector('button.delete').style.display = 'inline';
    })  
  
    card.addEventListener('mouseout', function(event){
      if (event && !card.classList.contains('active'))  {
        card.querySelector('button.delete').style.display = 'none';
      }
  })   

  // make cards unactive by cliking somewhere on thr body
  body.addEventListener ('click', function(event){
      if (event.target.nodeName == 'MAIN' || event.target.nodeName == 'BODY' || event.target.nodeName == 'HTML') {
        card.classList.remove('active');
        card.querySelector('button.delete').style.display = 'none';
      }
  })   
}

