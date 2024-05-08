// Task 15
var guestArr = ["Sami", "Moiz", "Hassan", "Noman"];
var canNotAttend = "Moiz";
console.log(canNotAttend + " " + "can not attend the dinner.");
var newGuest = "Yasir";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", You are invited to the dinner."));
});
