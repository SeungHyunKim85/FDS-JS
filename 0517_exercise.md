
## 4번
```
function numPY(s) {
  const str = s ? s.toUpperCase() : '';

  let cntP = 0;
  let cntY = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'P') cntP++
    if (str[i] === 'P') cntY++
  }

  return cntP === cntY;
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy'));     // false
console.log(numPY('ab'));      // true
console.log(numPY(''));        // true
console.log(numPY());          // true
```

## 5번
```
function toWeirdCase(s) {
  const str = s.split(' ');
  let str1 = '';
  let str2 = '';
  let str3 = '';

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[j] % 2 === 0) {
        str1 = str[j].toLowerCase();
      }
      else if (str[j] % 2 !== 0) {
        str2 = str[j].toUpperCase();
      }
    }
  }
  return str3 = str2.concat(str1);
}

function toWeirdCase(s) {
  const wordArr = s.split(' ');
  function toUpperLower(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
      // 0 이면 짝수, 아니면 홀수
      res += i % 2 ? str[i].toLowerCase() : str[i].toUpperCase();
    }
    return res;
  }

  for (let i = 0; i < wordArr.length; i++) {
    wordArr[i] = toUpperLower(wordArr[i]);
    // console.log(toUpperLower(wordArr[i]));
  }
  // console.log(wordArr);
  return wordArr.join(' ');
}

console.log(toWeirdCase('hello world'));    // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'
```

## 6번
```
function hideNumbers(str) {
  return '*'.repeat(str.length - 4) + str.slice(-4);
}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888'));   // *****8888
```

## 7번
```
function strToInt(str) {
  return parseInt(str);
  // +str; str *1; Number(str)
  // +' '; toString()
}

console.log(strToInt('1234'));  // 1234
console.log(strToInt('-1234')); // -1234
```

## 8번
```
function waterMelon(n) {
  let str = '';
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      str += '수';
    }
    else {
      str += '박';
    }
  }
  return str;
}

console.log('n이 3인 경우: '+ waterMelon(3));
console.log('n이 4인 경우: '+ waterMelon(4));
console.log('n이 5인 경우: '+ waterMelon(5));
console.log('n이 6인 경우: '+ waterMelon(6));
console.log('n이 7인 경우: '+ waterMelon(7));
```

## 9번
```

```

## 10번
```
function getMaxValueFromArray(array) {
  // return Math.max.apply(null, array);
  return Math.max(...array);
}

console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3]));

function getMinValueFromArray(array) {
  // return Math.min.apply(null, array);
  return Math.min(...array);
}
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3]));
```
