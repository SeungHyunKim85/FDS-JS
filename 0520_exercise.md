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
  </li>
  `;
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
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getValues(key) {
  todos.map(function(key) {
    let rObj = {};
    rObj[key] => todos.key;
    return rObj;
  });
// map 사용, 재할당해줘야
};

console.log(getValues('id')); // [3, 2, 1]
console.log(getValues('content')); // [ 'HTML', 'CSS', 'Javascript' ]
console.log(getValues('completed')); // [ false, true, false ]
```


## 3번 문제
```

```



## 4번 문제
```

```



## 5번 문제
```

```



## 6번 문제
```

```



## 7번 문제
```

```



## 8번 문제
```

```


