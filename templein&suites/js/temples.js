const requestURL = 'https://richie17777.github.io/wdd230/templein&suites/data/temple.json';
const myTemples = document.querySelector('.myTemples');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temples = jsonObject['temples'];

    temples.forEach(displayTemples);
  });

function displayTemples(temple) {
    // Create elements to add to the document
    let templeList = document.createElement('section');
    let h4 = document.createElement('h4');
    let address = document.createElement('p');
    let contact = document.createElement('p');
    let email = document.createElement('p');
    let service = document.createElement('p');
    let history = document.createElement('p');
    let ordinance = document.createElement('ul');
    let sessions = document.createElement('ul');
    let closure = document.createElement('ul');


    h4.innerHTML = `${temple.temple_name}`;
    address.innerHTML = `<strong>Address:</strong><br>${temple.address}`;
    contact.innerHTML = `<strong>Phone:</strong><br>${temple.telephone}`;
    email.innerHTML = `<strong>Email:</strong><br>${temple.email}`;
    service.innerHTML = `<strong>Services:</strong><br>${temple.services}`;
    history.innerHTML = `<strong>History:</strong><br>${temple.history}`;
    ordinance.innerHTML = `<strong>Schedules:</strong><br>
    <li>${temple.ordinance_schedule[0]}</li>
    <li>${temple.ordinance_schedule[1]}</li>
    <li>${temple.ordinance_schedule[2]}</li>
    <li>${temple.ordinance_schedule[3]}</li>`;


    sessions.innerHTML = `<strong>Temple Sessions:</strong><br>
    <li>${temple.session_schedule[0]}</li>
    <li>${temple.session_schedule[1]}</li>
    <li>${temple.session_schedule[2]}</li>
    <li>${temple.session_schedule[3]}</li>`;

    closure.innerHTML = `<strong>Temple Closure:</strong><br> 
    <li>${temple.temple_closure[0]}</li>
    <li>${temple.temple_closure[1]}</li>
    <li>${temple.temple_closure[2]}</li>
    <li>${temple.temple_closure[3]}</li>`

    templeList.appendChild(h4);
    templeList.appendChild(address);
    templeList.appendChild(contact);
    templeList.appendChild(email);
    templeList.appendChild(service);
    templeList.appendChild(history);
    templeList.appendChild(ordinance);
    templeList.appendChild(sessions);
    templeList.appendChild(closure);
    
    // Add/append the existing HTML div with the cards class with the section(card)
    myTemples.appendChild(templeList);
}
