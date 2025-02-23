console.log("String:", typeof "Hello, World!");
console.log("Number:", typeof 42);
console.log("BigInt:", typeof 9007199254740991n);
console.log("Boolean:", typeof true);
console.log("Undefined:", typeof undefined);
console.log("Null:", typeof null); // Особенность JS: typeof null возвращает "object"
console.log("Symbol:", typeof Symbol("id"));

// Объектные типы данных
console.log("Object:", typeof { name: "Alice", age: 25 });
console.log("Array:", typeof [1, 2, 3]);
console.log("Function:", typeof function() {});
console.log("Date:", typeof new Date());

