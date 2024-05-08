// Task 18

// Store the locations in an array
let placesToVisit:string[] = ["Tokyo","Pakistan","America","China","Japan"];

// Print the array in its original order 
console.log("Original Order:", placesToVisit);

// Print the array in alphabetical order without modifying the actual list 
console.log("Alphabetical Order:", [...placesToVisit].sort());

// Show that the array is still in its original order 
console.log("Original order after sorting:", placesToVisit);

// print the array in reverse alphabetical order without changing the order of the original list  
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

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
placesToVisit.sort((a,b) => b.localeCompare(a));
console.log("sortedin reverse alphabetical order:", placesToVisit);