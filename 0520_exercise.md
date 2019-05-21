## 1번 문제
```
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function render() {
  let html = '';

  todos.forEach(function (todos) {
    html +=   
 `<li id="${todos.id}">
    <label><input type="checkbox ${todos.completed}">${todos.content}</label>
  </li>`;
  });

  return html;
}

console.log(render());

/*
<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
*/
```

## 2번 문제
```

```
