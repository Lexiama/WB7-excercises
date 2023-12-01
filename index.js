"use strict";

window.onload = () => {
  const BtnSubmit = document.getElementById("BtnSubmit");
  const idInput = document.getElementById("idInput");
  let container = document.querySelector(".container");

  BtnSubmit.addEventListener("click", () => {
    const idVal = idInput.value;
    const baseUrl = `https://jsonplaceholder.typicode.com/todos/${idVal || 1}`;

    console.log(baseUrl);
    fetch(baseUrl)
      .then((res) => res.json())
      .then((todo) => {
        //console.log(todo);

        container.innerHTML = `
            <h2>Title: ${todo.title || "default title"}</h2>
            <p>Completed: ${todo.completed || false}</p>
            <p>Id: ${todo.id || "none"}</p>
        `;
      });
  });
};
