
let todoInput = document.getElementById("todoInput");
let addBtn = document.getElementById("addBtn");
let todoList = document.getElementById("todoList");

addBtn.addEventListener("click", function () {

    let task = todoInput.value;

    if (task === "") {
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    delBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(delBtn);

    todoList.appendChild(li);

    todoInput.value = "";

});

