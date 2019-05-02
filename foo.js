// ES6
const prefix = 'prop';
let i = 0;

// 객체 리터럴 내부에서 프로퍼티 키 동적 생성
var obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i
};

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}