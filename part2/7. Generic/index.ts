//array입력하면 첫 자료 return 함수
function firstElem(x:unknown[]){
    return x[0]
}

let ab=  firstElem([4,3]); // a = 4
//a의 타입은 지금 unknown으로 뜬다.
console.log(ab + 1);//a 타입이 애매해서 error -> 해결 narrwoing 혹은 as


function firstElem2<Type,Type2>(x:Type[]):Type{ 
    return x[0]
}

let b = firstElem2<number,string>([4,2]);
console.log(b + 1);
let c = firstElem2<string,string>(['4','2']);
console.log(c + 1);
let d = firstElem2([4,'3']); //타입을 안넣어줘도 알아서 해주기도함
//Generic함수 장점 : 확장성이 조금 있어보임


//숫자 넣으면 -1 해주는 함수
function oneMinus<MyType>(x: MyType){
    return x -1 ;
}
let e  = oneMinus<number>(100); //만약 이구문이 없고 함수자체  선언만 보면 x는 뭐가 들어올지 함수는 몰라 에러를 일단 띄운다.
//따라서 narrowing해줘야 한다. 근데 귀찮잖아.. 이때 파라미터 제한 가능

function oneMinus2<MyType extends number>(x: MyType){ //extends우측에 오는 타입으로 제한, 인터페이스에서 extend는 복사개념인데 여기는 체킹의개념
    return x -1 ;
}
 
interface LengthCheck{
    length: number
}
function oneMinus3<MyType extends LengthCheck>(x: MyType){ //extends우측에 오는 타입으로 제한, 인터페이스에서 extend는 복사개념인데 여기는 체킹의개념
    return x.length ;
}
 
