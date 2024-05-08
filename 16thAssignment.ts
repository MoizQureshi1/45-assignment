// Task 16

let guestArr:string [] = ["Sami","Yasir","Hassan","Noman"]
let canNotAttend:string = "Hassan"
let newGuest:string  = "Imran";

guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr)

guestArr.map((items) => 
console.log(`Dear ${items}, I found a bigger dinner table so i am invited more peoples.`));

// Part 2 Began
let guestBeg:string = "Bilal"
guestArr.unshift(guestBeg);
console.log(guestArr)

// Part 3 middle
let middleGuest:string = "Naveed"
let middleIndex = guestArr.length/3
guestArr.splice(middleIndex,0,middleGuest)
console.log(guestArr)

// Part 4 append
guestArr.push("zeeshan")
console.log(guestArr)

// Part 5 
guestArr.map((items) => 
console.log(`Dear ${items},You are invited in the more people list on dinner`));