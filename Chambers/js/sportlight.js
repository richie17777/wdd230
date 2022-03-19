const requestURL = 'https://richie17777.github.io/wdd230/Chambers/data/data.json';
const gold = document.querySelector('.gold');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    const goldLevel = companies.filter(x => (x.level === 'gold'))

    goldLevel.forEach(displayCompanies);

  });

function displayCompanies(company) {
    // Create elements to add to the document
    let member = document.createElement('section');
    let portrait = document.createElement('img');
    let h4 = document.createElement('h4');
    let address = document.createElement('p');
    let contact = document.createElement('p');
    let weburl = document.createElement('a');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h4.innerHTML = `${company.name}`;
    address.innerHTML = `${company.address}`;
    contact.innerHTML = `${company.contact}`;
    weburl.innerHTML = `${company.weburl}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', company.logourl);
    portrait.setAttribute('alt', `Logo of: ${company.name}`);
    weburl.setAttribute('href', company.weburl)
    
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(member) with the html elements
    member.appendChild(portrait);
    member.appendChild(h4);
    member.appendChild(address);
    member.appendChild(contact);
    member.appendChild(weburl);
    
    // Add/append the existing HTML div with the cards class with the section(card)
    gold.appendChild(member);
}