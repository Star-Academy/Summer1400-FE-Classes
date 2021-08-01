let titleContainer = document.getElementById("title");
let idContainer = document.getElementById("id");
let userIdContainer = document.getElementById("userId");
let completedContainer = document.getElementById("completed");

async function loadData() {
    const urlParameters = new URLSearchParams(window.location.search);
    const todoId = urlParameters.get('id');

    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    if (response.ok) {
        const jsonObject = await response.json();
        titleContainer.innerText += jsonObject.title;
        idContainer.innerText += jsonObject.id;
        userIdContainer.innerText += jsonObject.userId;
        completedContainer.innerText += jsonObject.completed
    }
}

loadData();