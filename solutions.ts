// Problem 1 
const filterEvenNumbers = (value : number[]) => {
   let evenNumberArray : number[] = []
   value.filter((number) => {
     if(number % 2 === 0) {
      evenNumberArray.push(number)
     }
   })
   return evenNumberArray
}
const problemOneResult =  filterEvenNumbers([1, 2, 3, 4, 5, 6])





// Problem 2
const reverseString = (value : string) => {
   const reverse = value.split("").reverse().join("")
   return reverse
  
}
const ProblmeTwoResult = reverseString("typescript");






// Problem 3
const StringOrNumber = (value : number | string) => {
   if(typeof value === "number") {
      return "Number";
   } else if (typeof value === "string") {
      return "String";
   }
}
const problemThreeResult = StringOrNumber('hello')






// Problem 4
const getProperty = <X> (object: X , key : keyof X) => {
  return object[key]
}
const user = { id: 1, name: "John Doe", age: 21 };
const problemFourResult = getProperty(user, "name");






// Problem 5
interface Book {
   title : string,
   author : string,
   publishedYear : number,

}
const toggleReadStatus = <T extends Book > (book : T) => {
   return {
      ...book,
      isRead : true,
   }
}
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
const problemFiveResult = toggleReadStatus(myBook);






// Problem 6
class Person {
   name : string;
   age : number;
   constructor(name :string, age : number) {
      this.name = name;
      this.age = age;
   }
}

class Student extends Person {
    grade : string;
    constructor(name : string , age : number , grade : string) {
      super(name,age)
      this.grade = grade
    }
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}

const student = new Student("Alice", 20, "A");
const problemSixResult = student.getDetails();






// Problem 7
const getIntersection = (value1 : number[] , value2 : number[] ) => {
   let intersection : number[] = [];
   value1.filter((v) => {
     if(value2.includes(v)){
      intersection.push(v)
     }
   })
   return intersection;
}
const problemSevenResult = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])

