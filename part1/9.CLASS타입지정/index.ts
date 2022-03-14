//타입스크립트 클래스는 필드값을 미리 선언해놔야 한다. 그래야 생성자 함수에서 this.~~ =~~ 가 가능하다
class Person{
	name: string;
	constructor(name:string){
		this.name= name
	}
}

let person1 = new Person('kim');
let person2 = new Person('ben');

// Person.prototype.test = function(){

// } // 만약 이렇게 하고 싶다면 아래처럼 하자


class Person2{
	name: string;
	constructor(name:string){
		this.name= name
	}

	test(a:string){
		console.log('안녕' +a);
	}
}
