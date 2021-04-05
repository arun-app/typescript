
console.log(2)
let a: any = "233cfcf"
a = 23;
let b = 23;
// b = "dd"
let c; //any default
c = true
let d: number = 23
type SomeNameInPascalCase = string;
let font: SomeNameInPascalCase = "abc"

type ValueToAssign = "1" | "abc" | true; //separated by pipe


//To shape Object
interface SomeObjectInterface {
    name: string;
    age: number;
    [key: string]: any; //name , age required other details can be added
    //key String
}
const objectName: SomeObjectInterface = {
    name:'abc',
    age:123 ,
    baba:false,
}
const objectName2: SomeObjectInterface = {
    name:'abc',
    age:123 ,
    black:false,
}

function pow(x:number,y:number):string{ // we can return void ==for functions that doesn't return a value

    return Math.pow(x,y).toString()
}
pow(1,2)


type MyList =[number?,string?,boolean?]
//tuple fixed length array ..each field has diff type
//? if its present take the type
//? also used to make function arguments optional
const arr:MyList=[]
arr.push(1)
arr.push("1")
arr.push(true)

//Generics

class Observable<T>{
    constructor(public value: T){}
}
// let x= Observable<number>;
// let y= Observable<SomeObjectInterface>;
let z= new Observable(23)
