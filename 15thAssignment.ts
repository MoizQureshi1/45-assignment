// Task 15

let guestArr:string [] = ["Sami","Moiz","Hassan","Noman"];
let canNotAttend:string = "Moiz"

console.log(canNotAttend + " " +"can not attend the dinner.");

let newGuest:string = "Yasir";
guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);

guestArr.map((items) => 
console.log(`Dear ${items}, You are invited to the dinner.`));