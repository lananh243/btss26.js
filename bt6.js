let number = [1, -1, 2, -2, 3, 4, -4];
let post = [];
let nega = [];
for (let i = 0; i < number.length; i++) {
  if (number[i] < 0) {
    nega.unshift(number[i]);
  }else if(i > 0){
    post.push(number[i]);
  }
  
}
const arrange = nega.concat(post);
console.log("Mảng sau khi sắp xếp là: ", arrange);
