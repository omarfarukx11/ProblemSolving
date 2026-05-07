## "Any" vs "Unknown" in TypeScript
In TypeScript, "any" allows a variable to hold any type of value, but it also disables type checking. Because of this, TypeScript cannot catch mistakes, which may cause runtime errors. On the other hand, "unknown" is safer because TypeScript forces us to check the type before using the value. This process is called type narrowing, and it helps maintain type safety in our code.


## Why "any" is dangerous
In TypeScript, both any and unknown can store any kind of value, but they behave very differently.
any is called a "type safety hole" because it completely disables TypeScript's type checking. When we use any, we are basically telling TypeScript
"Stop checking my code".
When a variable is typed as any, TypeScript disables type checking for it. This removes the compiler’s protection and can lead to runtime errors 

* Example:
let value: any = 10;
value.toUpperCase();        <<------------- No TypeScript error, but crashes at runtime

Here, value is actually a number, but we are trying to use a string method (toUpperCase()).
TypeScript does not warn us because the variable is typed as any.this will crash at runtime with an error like :

TypeError: value.toUpperCase is not a function

That is why any is dangerous. It removes the main benefit of TypeScript: finding errors before the code runs.


## Why "unknown" is the safer choice
unknown is the safer alternative. like any, unknown can also hold any type of value. but TypeScript does not allow us to use that value directly until we first check its type.

* Example:
let data: unknown = "Hello TypeScript!";
console.log(data.toUpperCase());        <<------- It's show Error

TypeScript gives an error because it does not yet know whether data is really a string. before using the value, we must check its type. This process is called Type Narrowing. Type narrowing means checking a variable’s type at runtime using tools like:
1. typeof
2. instanceof
3. custom checks

* Example:
let data: unknown = "Hello TypeScript!";
if (typeof data === "string") {
    console.log(data.toUpperCase());
}

Inside the if block, TypeScript now understands that data is a string, so it safely allows string methods.

## in a words
any = Skip all type checking. unknown = You can store anything, but you must check the type before using it. because of this, unknown is much safer when working with unpredictable data such as API responses, user input, external libraries.
