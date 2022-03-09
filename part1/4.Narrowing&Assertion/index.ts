//타입 확정하기 Narrowing & Assertion

//type 이 하나로 확정되지 않았을 경우 type narrowing 써야한다.
function 내함수(x:number|string){
    if( typeof x === 'string'){
        return x + '1';
    }else{
        return x + 1;
    }
}
//union type등때문에 불확실하면 narrowing해주자.

function 내함수2(x:number|string){
    let array:number[] = [];
    if(typeof x ==='number'){
        array.push(x);
    }

}
/**
 * if문을 섰으면 끝까지 써야 안전한다. else, else if 안쓰면 에러로 잡힐 수 도 있다.
 */

// typeof 가 아니더라도 in 이나 instanceof를 써도된다.



//assertion 문법이 있다. 타입을 잠깐 강제로 덮어쓰는거다. assertion문법은 여러개의 유니온 타입을 하나로 확정 짓 고 쓰는거지 타입을 변경할 때 쓰는것이 아니다.
//용도 1. Narrowing, 2.무슨 타입이 들어올지 100% 확실할 때 쓰셈
function 내함수3(x:number|string){
    let array:number[] = [];
    array[0] = x as number;
}
내함수3("123");