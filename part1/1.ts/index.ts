let 이름 :string = "kim";
let arr :string[] = ["d","a"];
let objectType :{name? : string} = { name : 'kim'};
let 이름2 :string | number = "123";

type mytype = string | number;
let 이름3 :mytype = "kim"


function 함수(x: number) : number{
    return x*2
}
//array type
type Member = [number, boolean];
let john:Member = [12, true];

//object type
type Book = {
    [key: string] : string
}
let mybook :Book = {name :'man and sea', age :'123'};

//class

class User {
    name : string;
    constructor(name : string){
        this.name = name;
    }
}