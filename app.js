function onReady() {
  let todos = [];
  let todoId = 1;
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();

     // get the text
    let title = newToDoText.value;
    console.log("title: ", title);

    let todoobj = {
      name: title,
      id: todoId
    }
    todoId++;
    todos.push(todoobj);

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";
    //delete Button
    let deleteBTN = document.createElement("button");
    deleteBTN.textContent = "Delete";

    deleteBTN.addEventListener('click', function(event) {
      let buttonLiText = this.parentElement.childNodes[0].textContent;
      //this.parentElement represents the button's parent <li>
      toDoList.removeChild(this.parentElement);

      todos.forEach(function(item) {
        //console.log(item,index);
        if(currentToDo === buttonLiText){
        //remove from array
        todos.splice(index, 1)
      }
      console.log(todos);

      });
       // set the title
      newLi.textContent = title;

      // attach the checkbox to the li
      newLi.appendChild(checkbox);

      newli.appendchild(deleteBTN);

      // attach the li to the ul
      toDoList.appendChild(newLi);

      //empty the input
      newToDoText.value = '';
    });
  });
};

  window.onload = function() {
      onReady();
  };
