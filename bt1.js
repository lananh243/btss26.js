let numberList = [1, 2, 8, "a", 56, "b", "c"];
let integer = false;
for(let item of numberList){
    if(Number.isInteger(item)){
        console.log(item);
        integer = true;
    }
}
if(!integer){
    console.log("Trong mảng không tồn tại số nguyên");
}
