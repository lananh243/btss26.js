let num = [0, 2, 2, 4, 8, 8, 5, 5];
const duplicatedValues = num.filter((item, index) => num.includes(item, index + 1));
console.log("Các phần tử giống nhau là: ", duplicatedValues); 
