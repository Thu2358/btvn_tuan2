// bài 1. Tạo cho thầy một biến có chứa thông tin của một chiếc xe( như màu sắc,năm sản xuất,số ghế,…)
let car={
    color: "red",
    since: 2000,
    chair: 4,
}
// bai 3 Tạo cho thầy các biến có những kiểu dữ liệu sau
// String
// number
// boolean
let name ="Thu";
let number= 2;
let isMale = true;

// bài 2 Tạo cho thầy một biến có chứa danh sách các sở thích của mình
let favourite=[ " play game"," listen to music"," read the book"]
// In cho thầy tên của các sở thích của mình bằng vòng lặp for
for( let i = 0; i < favourite.length; i++);

// bài 4 Tạo cho thầy một hàm tính tổng, trừ, nhân, chia
function cong(a,b){
    return a + b;
}
let resultcong = cong(1,2);

 function tru(a,b){
    return a-b;
 }
 let resulttru =  tru(4,2);

 function nhan(a,b){
    return a*b;
 }
 let resultnhan = nhan(3,2);
 
 function chia(a,b){
    return a/b;
 }
let resultchia = chia(4,2);

// Tạo cho thầy một câu lệnh in ra chào buổi sáng < 10h, chào buổi chiều < 18h, và chào buổi tối
let hours= 19;
if( hours < 10){
    console.log(" chao buoi sang ");
}
else if( hours < 18){
    console.log( " chao buoi chieu");
}
else{
    console.log(" chao buoi toi");
}


