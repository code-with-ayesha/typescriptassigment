
let name1: string = 'aYesHa iJaz';
console.log(name1.toLowerCase());

console.log(name1.toUpperCase());

let titleCaseName: string = name1.toLowerCase().replace(/\b\w/g,
 (letter) => letter.toUpperCase());
//  regex pattern
console.log( titleCaseName);
