//타입스크립트에서는 public private protected static 키워드를 쓸 수 있다.
//class많이 만들어서 개발할때 유용슨 하다.
class User{
    // name;
    public name;
    private privateName;
    
    constructor(a:string){
        this.name = a
        this.privateName = a;
    }
    public setPrivateName(a){
        this.privateName = a;
    }
    private getPrivateName(){
        return this.privateName;
    }
    public getFullName(){
        return this.name + this.getPrivateName()
    }
}

let 유저1 = new User('park')
유저1.name = '안녕';
// 유저1.privateName = '??' //에러
//public은 항상 숨겨져있다. 
 


//public 키워드 쓰면 this.어쩌구 생략가능
class Student2{
    constructor(public name:string){
    }
}
let 학생2 = new Student2('kim');
console.log(학생2); // {name : 'kim'}
