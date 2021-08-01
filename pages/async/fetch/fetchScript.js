let todosContainer = document.getElementById("todos");
async function loadData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (response.ok) {
        let jsonObject = await response.json();
        for (todoItem of jsonObject) {
            todosContainer.innerHTML += `<li><a href="todoItemShow.html?id=${todoItem.id}">${todoItem.title}</a></li>`
        }
    }
}

loadData();