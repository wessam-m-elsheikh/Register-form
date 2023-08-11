"use strict";

const form = document.querySelector("#survey-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = [];
  const formData = new FormData(form);
  for (const item of formData) {
    data.push(item);
    // data.push({item[0]: item[1]});
  }
  const userData = Object.fromEntries(data);
  console.log(userData);
});
