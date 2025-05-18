//変数numを定義します
let num = 15

//変数3と5の倍数かどうかを調べます
if(num % 3  === 0 && num % 5 === 0){
  console.log("3と5の倍数です");
}

//変数numが３の倍数かどうかを調べます
if(num% 3 === 0){
  console.log("3の倍数です");
}


//変数numが5の倍数かどうかを調べます
if(num% 5 === 0){
  console.log("5の倍数です");
}


//それ以外の場合
else{
  console.log(num); 
}

