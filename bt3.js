let a = parseInt(prompt("Nhập vào một số nguyên bất kì"));
let count = 0;
let number = [1, 1, 2, 2, 3, 3, 2];
for (let i = 0; i < number.length; i++) {
  if (number[i] == a) {
    count++;
  }
}
console.log("Số lần xuất hiện của số " + a + " là: " + count);