## How Generics Enable Reusable and Type Safe Code in TypeScript
Generics in TypeScript allow us to create reusable functions, classes, and components that can work with different types of data while still maintaining strict type safety. without Generics, developers often use any to make code flexible. However, using any removes TypeScript’s type checking, which can lead to unexpected runtime errors.


# Problem Without Generics
const identity = (value: any) : any => {
    return value;
}
let result = identity("Hello TypeScript");

Here, the function works for any type of value, but because we used "any", TypeScript no longer knows the actual type of "result". this removes type safety and defeats one of the main advantages of TypeScript.


# Solution Using Generics
const identity = <T>(value: T) : T => {
    return value;
}

Here, T is called a Generic Type Parameter.it acts as a placeholder for the actual type that will be provided later. now TypeScript automatically remembers the correct type

* Example:
let text = identity("Hello");
let number = identity(100);

Now TypeScript understand text is a string & number is a number . So the same function can work with multiple data types while still remaining fully type-safe.

# in a word
Generics in TypeScript help developers write reusable and flexible code while maintaining strict type safety. They allow functions, classes, and components to work with different data types without using any. As a result, code becomes safer, cleaner, and easier to maintain.