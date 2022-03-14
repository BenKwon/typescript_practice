//class 복사하고 싶네
class User{
    x = 10;
}

class NewUser extends User{
    constructor(){
        super() 
    }
}

//protected 는 private랑 비슷해서 클래스 내에서만 사용 가능하다
class User2{
    protected x = 10;
}
class NewUser2 extends User2{ //여기서 User2의 private x는 사용 못한다. 하지만 protected는 사용가능하다.
   doThis(){
       this.x = 20;
   }
}


class User3{
    static x = 10; //static 키워드는 필드값은 부모만 가져다 쓸 수 있게 만든다. (+ 자식(객체)에게 안물려줌, extends하면 잘 따라온다)
    y = 20;
}

let 자식 = new User;
console.log(자식) // {y:20} -> x는 없다
console.log(User3.x);

//public static은 뭐지???
class User4{
 public static x = 10;
}


///그래서 대체 언제 이거 활용하는건데
class User5{
    static skill = 'js';
    intro = User5.skill + '전문가입니다'

}
let chulsu = new User5();
console.log(chulsu); // {intro = '전문가입니다'}

//스킬명을 변경하고 싶을 때

let chulsu1 = new User5(); //{intro = 'js전문가입니다'}
User5.skill ='ts';
let chulsu2 = new User5(); //{intro = 't s전문가입니다'}

