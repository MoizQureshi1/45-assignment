// Task 18
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Store the locations in an array
var placesToVisit = ["Tokyo", "Pakistan", "America", "China", "Japan"];
// Print the array in its original order 
console.log("Original Order:", placesToVisit);
// Print the array in alphabetical order without modifying the actual list 
console.log("Alphabetical Order:", __spreadArray([], placesToVisit, true).sort());
// Show that the array is still in its original order 
console.log("Original order after sorting:", placesToVisit);
// print the array in reverse alphabetical order without changing the order of the original list  
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
// Show that the array is still in its original order 
console.log("Original order after reverse sorting:", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("reverse order:", placesToVisit);
// Reverse the order of the list agan to get back to the original order
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("sorted in alphabetical order:", placesToVisit);
// Sort the array in reverse alphabetical order 
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("sortedin reverse alphabetical order:", placesToVisit);
