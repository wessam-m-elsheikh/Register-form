"use strict";
// to get form data in a well formated object
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = [];
  const formData = new FormData(form);
  for (const item of formData) {
    data.push(item);
  }
  const userData = Object.fromEntries(data);
  console.log(userData);
  form.reset();
});
