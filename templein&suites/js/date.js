
const lastmod = document.querySelector('#lastmod');
lastmod.textContent = `Last updated: ${document.lastModified}`;

const datefield = document.querySelector(".date");
const now = new Date();

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);
datefield.innerHTML = `<em>${fulldate}</em>`;