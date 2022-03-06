//Union type
let 회원 : (number | string | boolean) = 123;
회원 = "문자열도 가능"
회원 = false


let 회원들 :(number|string)[]= [1,'2',3];
let 오브젝트:{ a: (string|number) } = { a: 123};

// 이게 좀 귀찮다면 any도 있다. 근데 any는 타입스크립트의 의미가 없어진다. 즉 타입실드 해제문법이다.

let 이름 :any; //아무거나 들어가도 된다.(모든 자료형 허용)
이름=true;
이름=undefined;
이름="benkwon"


//unknown 타입 = 모든 자료형 허용해줌, 용도는 any랑 똑같다. 하지만 any보다 조금 안전하다
let 이름2 :unknown;
//unkown이 any보다 안전한 이유
let 변수1 : string = 이름2; //이를 방지한
이름2 -1; //이름이라는 변수 unknown타입이라 뺄셈을 못하게 되어있다. 간단한 수학연산도 타입맞아야한다.



let 나이 :string |number; // 타입 맞는데 +1 안되는 것
나이 + 1; //허락을 안해준다. 타입스크립트는.. 엄격해!
/**
 *  string 타입 + 1 (허용)
 *  number 타입 + 1 (허용)
 *  number|stromg 타입 + 1 (에러)
 */

let test : unknown =1;
test - 1; //나이가 숫자타입이 아니라서 에러를 뿜고 있다.


//연습문제
/**
 * 
 * 학교라는 변수에 타입지정하기
 * let 학교 = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]
 */
let 학교:{
    score:(number|boolean)[],
    teacher:string, 
    friend:string|(string|string)[]
} 
= {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]