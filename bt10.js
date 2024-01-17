let a = [1,2,3,4,5];
let b = [-2,-5,2,7,4];
let c = [2,4,8,9,5];

const duplicatedValues = a.filter(item => b.includes(item) && c.includes(item));
console.log("Các phần tử giống nhau là: ", duplicatedValues);

