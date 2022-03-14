//never type 조건 1. return 값이 없어야함, 2. endpoint가 없어야함
function 함수(): never {
    while (true) {

    }
}

function 함수2(): never {
    throw new Error();//실행 도중 중단이 되어서 endpoint에 도달하지 않음 
}

//그래서 never 어따쓰냐? - 사실 대부분 쓸때없음 void type으로 대체하면 되니까..
//never는 코드 이상하게 짜면 간혹 출몰함
function 함수3(param: string) {
    if (typeof param == 'string') {
        console.log(param);
    } else { //param은 string만 들어 올 수 있어서  else는 사실 들어올일이없다.
        console.log(param);// 여기서 그래서 type이 never 이런 현상은 never! 즉 있을 수 없다.
    }
}

let 함수4 = function(){ //never type
    throw new Error()
}
