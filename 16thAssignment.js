// Task 16
var guestArr = ["Sami", "Yasir", "Hassan", "Noman"];
var canNotAttend = "Hassan";
var newGuest = "Imran";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", I found a bigger dinner table so i am invited more peoples."));
});
// Part 2 Began
var guestBeg = "Bilal";
guestArr.unshift(guestBeg);
console.log(guestArr);
// Part 3 middle
var middleGuest = "Naveed";
var middleIndex = guestArr.length / 3;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);
// Part 4 append
guestArr.push("zeeshan");
console.log(guestArr);
// Part 5 
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ",You are invited in the more people list on dinner"));
});
