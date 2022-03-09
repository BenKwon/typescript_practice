let 이름: 123; // 이름이라는 변수엔 123만 들어올 수 있음
이름 = "123"; //error
이름 = 456; //error

function 함수(a: "hello"): 1 | 0 {}
함수("hello");

//1.가위 바위 보중 1개 입력가능
//2. 가위 바위보 만들어올 수 있는 ARRAY를 리턴
function game(input: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
	return ["가위"];
}

game("가위");

//const 변수의 한계
const 변수 = {}; // object내용안의 값을 마음대로 바꿀 수 있다.
let 접니다: "bold" | "solo"; //자료를 여러개로도 고정할 수 있다.

//Literal type의 문제점
var 자료 = {
	name: "kim",
};
자료.name; // "kim"

function myfunc(a: "kim") {}
myfunc(자료.name); //자료.name은 kim인데 에러가난다
//myfunc의 a는 타입지정이 되어있다
//kim이라는 자료만 들어올 수 있습니다가 아니고 kim이라는 타입이 들어올 수 있는것.
//자료.name은 string이라는 타입이다.

//solution
var 자료2: { name: "kim" } = { name: "kim" };
myfunc(자료2.name);

//solution2 (as 문법으로 타입을 구라친다)
myfunc(자료.name as "kim");

//solution3 (as const 같은 이상한 keyword 붙이기)
//참고로 as const란 속성의 value를 type으로 지정해준다.
//또한 object 속성들에 모두 readonly를 붙여준다.
var 자료3 = {
	name: "kim",
} as const;
자료3.name = 3; //readonly가 되므로 에러
