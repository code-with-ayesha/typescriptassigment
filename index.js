"use strict";
let name1 = 'aYesHa iJaz';
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());
let titleCaseName = name1.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase());
//  regex pattern
console.log(titleCaseName);
