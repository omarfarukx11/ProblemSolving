// Problem 1 
const filterEvenNumbers = (arr : number[]) => {
   return arr.filter((number) => number % 2 === 0)
}
const problemOneResult =  filterEvenNumbers([1, 2, 3, 4, 5, 6])





// Problem 2
const reverseString = (value : string) => {
   const reverse = value.split("").reverse().join("")
   return reverse
  
}
const ProblmeTwoResult = reverseString("typescript");





// Problem 3
type StringOrNumber = string | number
const checkType = (value : StringOrNumber ) => {
   if(typeof value === "number") {
      return "Number";
   } else if (typeof value === "string") {
      return "String";
   }
}
const problemThreeResult = checkType('hello')






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
const getIntersection = (arr1 : number[] , arr2 : number[] ) => {
   return arr1.filter((value) => arr2.includes(value))

}
const problemSevenResult = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])