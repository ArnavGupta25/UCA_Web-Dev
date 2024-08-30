/* Web Storage */

// Two Types of Web Storage
// 1. Local Storage
// 2. Session Storage

// Local Storage will be stored in the browser even if the browser is closed
// But Every Domain will have its own Local Storage
// Local Storage is binded with a domain and will be deleted if the domain is deleted

//1. Local storage
//  setItem
//  getItem
//  removeItem

// localStorage.setItem("name", "ABC"); //values always in string

// localStorage.getItem("name");

// localStorage.removeItem("name");

// local storage keeps stored data to the current domain, till it is not removed
// or the browser cache has not been cleared
localStorage.setItem("name", "Harshit");

// getItem()
let storageName = localStorage.getItem("name");
console.log(storageName);

// removeItem()
localStorage.removeItem("name");

// key()
localStorage.setItem("name", "ABC");
localStorage.setItem("age", "25");
localStorage.setItem("city", "XYZ");

let key = localStorage.key(0);
console.log(key);

// length
let length = localStorage.length;
console.log(length);

// clear()
localStorage.clear();

// Storing Objects in Local Storage
let obj = { "name": "ABC", "age": 25, "city": "XYZ" };

// We Cannot Store the Object directly in Local Storage
// We have to convert it into string
// JSON.stringify() is used to convert the object into string
localStorage.setItem("obj", JSON.stringify(obj));

// To Traverse in Local Storage
Object.keys(localStorage);