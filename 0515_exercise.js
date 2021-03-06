// 1
// if 
function evenOrOdd(num) {

  if (num % 2 === 0) {
    return 'Even';
  }
  else { 
    return 'Odd';
  }
}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even

// 3항 연산자
function evenOrOdd3(num) {
  return (num % 2 === 0 ? 'Even' : 'Odd');
}

console.log(evenOrOdd3(2));
console.log(evenOrOdd3(3));
console.log(evenOrOdd3(1000));


// 2
// 강사님 풀이
function getCount8() {
  let str = '';
  let sum = 0;

  for (let i = 1; i < 10001; i++) {
    str += i;
  }

  // console.log(str);

  for (let j = 1; j < str.length; j++) {
    if (str[j] === '8') ++sum;
  }

  return sum;
}

console.log(getCount8());

// 3

function alphaString46(s) {
  if (s !== undefined && s.length > 3 && s.length < 7 && Number(s)) {
    return 'true';
  } return 'false';
}

console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723')); // false
console.log(alphaString46('a234')); // false
console.log(alphaString46('')); // false


