// type Square = { color: string, width : number}
interface Square { 
	color: string, 
	width : number
}
let 네모:Square = {color: 'red', width :100}


//type 키워드와의 차이점을 하기전에 해야할 것 

interface Student{
	name: string,
}
interface Teacher{
	name:string,
	age:number
}
let 학생 :Student= { name: 'kim'}
let 선생 :Teacher = {name :'kim', age: 20}
//interface는 extends가 가능하다..

interface Teacher extends Student{
	age:number
}

let 선생2 :Teacher = {name :'kim', age: 20}

//그럼 type에서 & 를 썼었다.. extends랑 비슷한데..둘의 의미는 다르다
// &은 왼쪽도 만족하고 오른쪽도 만족해주세요 라면 extends는 복사하는 개념
type Animal = { name: string }
type Cat = { age : number} & Animal
let hahaha :Cat = {age :13, name:"samsame"};


//interface도 & 기호로 교차를 할 수있따

//중요한 type 과 interface의 차이점
//interface는 중복선언이 가능하나 type은 중복선언 x

interface Student{
	name: string
}
interface Student{
	score: number
}
//위 와같이 이름이 같아도 에러가 안남 자동 extends가 되어 Student 객체들은 name 과 score둘다 가져야하게 된다.

//외부 라이브러리 같은 경우 interface를 많이 쓴다.
//다른 사람이 많이 이용할 것 같으면 interface를 쓰는게 좋지 않을까
//일반 변수나 함수는 타입으로 선언하고 모든 오브젝트는 interface로 하는 등 규칙을 정해서 하자.

//extends할때 중복발생하면? -> 에러 복사해서 오는거기때문에 에러가 난다.
//하지만 &를 쓸때는 에러가 안난다. 하지만 사용하게 되면 에러가 난다..왜냐면 둘다 만족해야하는데 string number둘다 만족할 수 없기 때문
type Ben = { type :string}
type kwon = { type:number} & Ben
let benkwon :kwon = {type:3}