"use strict";

window.onload = () => {
  const BtnSubmit = document.getElementById("BtnSubmit");
  const idInput = document.getElementById("idInput");

  BtnSubmit.addEventListener("click", () => {
    const baseUrl = `https://jsonplaceholder.typicode.com/todos/${idInput.value}`;
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  });
};
