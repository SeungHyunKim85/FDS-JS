```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    li.todo {
      text-decoration-line : " ";
    }
  </style>
</head>
<body>
  <input type="text" class="input-todo" placeholder="Enter todo!">
  <button class="add">Add</button>
  <ul class="todos"></ul>
  <script>
    const $inputTodo = document.querySelector('.input-todo');
    const $add = document.querySelector('.add'); 
    const $todos = document.querySelector('.todos');

    function addTodo(newTodo) {
      $todos.innerHTML += `<li class="todo" style="text-decoration-line: line-through">${newTodo}<button class="remove">X</button></li><input type="checkbox" class="todoCheck"></input>`
    }

    function removeTodo(childNode) {
      $todos.removeChild(childNode);
    }

    $add.onclick = function () {
      const newTodo = $inputTodo.value;
      addTodo(newTodo);
      $inputTodo.value = '';
    };

    $todos.addEventListener('click', function (e) {
      const target = e.target.parentNode;
      if (target.classList.contains('todo')) removeTodo(target);
    })

    $todos.addEventListener('change', function (e) {
      console.log(e.target.previousSibling);
      const targetCheck = document.querySelector('li.todo');
      //targetCheck.style.text-decoration-line = 'line-through';
    })
  </script>
</body>
</html>
```
