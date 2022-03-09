type 함수타입 = (a:string) => number; //함수타입쓸때 화살표함수만 쓰자
function 함수(a: string): number {return 0}
//위 같이 말고 함수 전체를 alias넣고 저장해서 쓸 수 있다.

let 함수copy:함수타입 = function(a){
	return 0;
}//함수 type alias부탁하려면 함수표현식을 써야한다.

function(){} // <= 이건 함수선언식이라고 부른다.

let 회원정보 = {
	name:'kim',
	plusOne(a){ //파라미터 return 모두 number
		return a + 1;
	}
}

회원정보.plusOne(1);
type 함수타입2= (a:number)=>number;
let 회원정보2{name:string, plusOne:함수타입2} = {
	name:'kim',
	plusOne(a){ //파라미터 return 모두 number
		return a + 1;
	},
}
//이렇게도 할 수 있다.
type Member = {
	name : string,
	age : number,
	plusOne : ( x :number ) => number,
	changeName : () => void
}

//practice2
type 함수타입3 =(a:string)=>string;
let cutZero:함수타입3=(a)=>{
	if(a[0]==='0'){
		return a.substring(1,a.length);
	}else return a;
}

type 함수타입4 = (a:String) => number;
let removeDash:함수타입4 = (a)=>{
	let arr = a.split('-');
	let result = "";
	arr.forEach(element => {
		result += element;
	});
	return parseFloat(result);
}

//practice3
function 만들함수(a:string, func1:함수타입3,func2:함수타입4){
	let result = func1(a);
	let result2= func2(result);
	console.log(result2);
}
