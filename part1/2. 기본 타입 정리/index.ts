let 이름:string = "kim";
let 나이:number = 50;
let 결혼했니 :boolean= true;
let 텅빔:null = null;
let 정의안함:undefined = undefined;

//array나 object 자료형
let 회원들:string[] = ['kim','park'];
//array에 여러 자료형을 쓰고 싶으면 유니온 타입을 쓰면된다.

let 회원들2 :{member1 : string, member2 : string}= { member1 : 'ben', member2 : 'park'};

//오늘의 protip
//초보자들은  온갖곳에 다 타입지정해놓는다..
let 회원들다지정 = 'park' //이렇게해도 타입이 스트링으로 지정된다. 타입스크립트가 쉳르를 알아서 씌우전다.
let autotypenumber = 3;


//연습문제 3
let project:{ member:string[] , days:number, started:boolean} = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
  }