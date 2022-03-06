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