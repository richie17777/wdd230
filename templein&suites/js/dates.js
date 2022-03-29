
// const lastmod = document.querySelector('#lastmod');
// lastmod.textContent = `Last updated: ${document.lastModified}`;

// Displayin the number of visitsto the page
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("visits-ls"));
if (numVisits !== 0) {
  visitsDisplay.textContent = numVisits;
} else {
  visitsDisplay.textContent = `This is your first visit!`;
}
numVisits++;
localStorage.setItem("visits-ls", numVisits);

todayDisplay.textContent = Date.now();