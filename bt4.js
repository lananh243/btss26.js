let a =parseInt(prompt("Nhập a"));
let b =parseInt(prompt("Nhập b"));
let number = [];
if( a< 0 || b< 0){
    console.log("Không hợp lệ");
}else{
    for(let i=1; i<=a; i++){
        if(i % b === 0){
            number.unshift(i)
        }
    }

    for(let j=1; j<=b; j++){
        if(j % a === 0){
            number.unshift(j);
        }
    }
    console.log(number);
}