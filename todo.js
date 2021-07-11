const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
 
const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteTodo(event){
    const li=event.target.parentElement;

    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== Number(li.id));
    console.log(toDos);
    saveToDos();
}

function changeTodo(event){
    // const li=event.target.parentElement;
    // const textUpdate = prompt("수정 내용");
    // li.innerText = textUpdate;
    // console.log(document.querySelector("li"));

}

function paintToDo(newTodo){

    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
//updateDeleteSpan
    const updateDeletespan = document.createElement("span");
    
//delete button
    const button = document.createElement("button");
    button.innerHTML
    button.setAttribute("class", "fas fa-trash-alt");

    button.addEventListener("click",deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

//modify button
    const cngButton = document.createElement("button");
    cngButton.innerHTML 
    cngButton.setAttribute("class", "fas fa-edit update-todo");

    cngButton.addEventListener("click",changeTodo)
    // li.appendChild(span);
    // li.appendChild(cngButton);
    // toDoList.appendChild(li);
}

function ToDoSubmit(event) {

    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",ToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);



if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

function sexyFilter(){
     
}



function addTodoToDOM(todoObject) {
    //   <li class="todo-item" id="??">
    //   <span class="done-text">
    //     <input type="checkbox" class="check-done" />
    //     <p class="todo-text">ㄱㄱ</p>
    //   </span>
  
    //   <span class="update-delete">
    //     <i class="update-todo fas fa-edit"></i>
    //     <i class="delete-todo fas fa-trash-alt"></i>
    //   </span>
    // </li>
  
    // 최상위 li 태그
    var li = document.createElement("li");
    li.setAttribute("id", todoObject.todoId);
    li.setAttribute("class", "todo-item");
  
    // 체크박스, 텍스트 표시 컨테이너 span
    var doneTextSpan = document.createElement("span");
    doneTextSpan.setAttribute("class", "done-text");
  
    var checkDoneInput = document.createElement("input");
    checkDoneInput.setAttribute("type", "checkbox");
    checkDoneInput.setAttribute("class", "check-done");
  
    var todoTextP = document.createElement("p");
    todoTextP.setAttribute("class", "todo-text");
    var todoText = document.createTextNode(todoObject.todoText);
    todoTextP.appendChild(todoText);
  
    doneTextSpan.appendChild(checkDoneInput);
    doneTextSpan.appendChild(todoTextP);
  
    // 수정, 삭제 아이콘 컨테이너 span
    var updateDeleteSpan = document.createElement("span");
    updateDeleteSpan.setAttribute("class", "update-delete");
  
    var updateIcon = document.createElement("i");
    updateIcon.setAttribute("class", "fas");
    updateIcon.classList.add("fa-edit");
    updateIcon.classList.add("update-todo");
  
    var deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "fas");
    deleteIcon.classList.add("fa-trash-alt");
    deleteIcon.classList.add("delete-todo");
  
    updateDeleteSpan.appendChild(updateIcon);
    updateDeleteSpan.appendChild(deleteIcon);
  
    // li에 자식 노드로 추가
    li.appendChild(doneTextSpan);
    li.appendChild(updateDeleteSpan);
  
    // checkDone에 따른 처리
    if (todoObject.checkDone) {
      checkDoneInput.checked = true;
      todoTextP.classList.add("done");
    }
  
    document.getElementById("todo-list").appendChild(li);
  }
  