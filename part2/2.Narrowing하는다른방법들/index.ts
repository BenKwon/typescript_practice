//가끔 typeof로 Narrowing이 안될 때가 있다..

function 함수1(a: string | undefined) {
	if (a && typeof a === 'string') {

	}
}


//type of는 number stirng boolean object이런식으로만 판정 가능(Primitive type)
//이럴 땐 in 키워드를 이용할 수 있다.

type Fish = { swim : string};
type Bird = {fly: string};
function 함수2 (animal:Fish|Bird){
	if( 'swim' in animal){

	}
	if( 'fly' in animal){

	}
}

//instanceof 로 object narrowing가능하다.
let 날짜 = new Date();
if(날짜 instanceof Date){
}


//여기선 in 을 쓸 수 없다 그리고 타입은 부모가 없어서 instance of도 못씀
//아래처럼 비슷한 object 타입의 경우 literal type을 강제로 만들어두면 나중에 도움된다. 아래에선 wheel
type Car2 = {
	wheel : '4개',
	color : string
}
type Bike = {
	wheel : '2개',
	color : string
}
function 함수3(x:Car2 |Bike){
	if(x.wheel =='4개'){

	}
	if(x.wheel =='2개'){
		
	}
}
