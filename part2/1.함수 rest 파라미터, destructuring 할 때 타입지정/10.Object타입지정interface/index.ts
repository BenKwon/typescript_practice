//rest parameter 타입지정
function 함수(...a:number[]){

}

let arr = [1,2,3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2]; //[1,2,3,4,5] spread operator라고 쓰면 배열에 있는거 빼준다.

let [four,five] = arr2;
console.log(four); //4;
console.log(five); //5;




//함수 파라미터에 destructuring 가능
//object안에 있떤 자료를 파라미터로 집어 넣고 싶을때
function 함수2(a,b){
	console.log(a,b);
}
let object = {
	one : 1,
	two : 2
}
함수2(object.one, object.two);
//근데이게 너무 귀찮고 번거롭다.

function 함수3({one ,two}){
	console.log(one,two);
}

함수3(object)

//파라미터 destructuring시엔 타입지정 어떻게 하지??
function 함수4({one ,two}:{one:number, two:number}){
	console.log(one,two);
}

