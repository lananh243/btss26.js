let a =prompt("Nhập vào giá trị bất kì: ");
let itemList = [3, 6, 89, 56, 45, 19];

for(let index in itemList){
    if(a === index){
         console.log(`Tại vị trí ${index}, giá trị là: ${itemList[index]}`);
    }else{
        console.log("Phần tử không tồn tại");
    }

   
}
