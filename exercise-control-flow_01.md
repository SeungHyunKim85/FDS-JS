```
// 1
const x = 15;

if (10 < x < 20) {
  console.log(x);
};
```
```
// 2
for (let i = 0; i < 10; i++) {

  if (i % 2 == 0)
    console.log(i);
};
```
```
// 4
for (let i = 10; i >= 0; i--) {
  
  if (i % 2 == 1)
    console.log(i);
}
```
```
// 3
let string1 = '';

for (let i = 0; i < 10; i++) {

  if (i % 2 == 0) {

    String(i);

    string1 += i;
  }
}
console.log(string1);
```
```
// 5
let count = 10;

while (count >= 0) {
  count--;
  {if (count % 2 == 1)
    console.log(count);
  }
}
```
```
// 6
let count1 = 0;

while (count1 < 10) {
  {if (count1 % 2 == 0)
    console.log(count1);
  }
  count1++;
}
```
```
// 7
let sum1 = 0;

for (let i = 0; i <= 10; i++) {
  sum1 += i;
}

console.log(sum1);
```
```
// 8
let sum2 = 0;

for (let i = 0; i < 20; i++) {
  if (i % 2 !== 0 && i % 3 !== 0) {
    sum2 += i;
  }
}
console.log(sum2);
```
```
// 9
let sum3 = 0;

for (let i = 0; i < 20; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    sum3 += i;
  }
}
console.log(sum3); 
```
```
// 10
for (let i = 1; i < 7; i++) {
  for (let j = 1; j < 7; j++) {
    if (i + j === 6) {
      console.log(i , j);
    }
  }
}
```
```
// 11
let result1 = '';

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++){
    result1 += '*';
  }
  result1 += '\n';
}
console.log(result1);
```
```
// 12
let result2 = '';

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < i; j++) {
    result2 += ' ';
  }
  for (let k = 0; k < 5 - i; k++) {
    result2 += '*';
  }
  result2 += '\n';
}
console.log(result2);
```
```
// 13
let result3 = '';

for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    result3 += '*';
  }
  result3 += '\n';
}
console.log(result3);
```
```
// 14
let result4 = '';

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5 - i; j++) {
    result4 += ' ';
  }
  for (let k = 0; k < i + 1; k++) {
    result4 += '*';
  }
  result4 += '\n';
}
console.log(result4);
```
```
// 15
let result5 = '';

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5 - i - 1; j++) {
    result5 += ' ';
  }
  for (let k = 0; k < i * 2 + 1; k++) {
    result5 += '*';
  }
  result5 += '\n';
}
console.log(result5);
```

