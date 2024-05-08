// Task 17

// Initial list of guests
let guests:string[] = ["Sami","Yasir","Dawood","Faheem","Hamza"]; 

// Iforming that only two people can be invited
console.log("Due to limited space, only two people can be invited for dinner");

// Removing guestsuntile only two names remain
while(guests.length > 2){
    const removedguest = guests.pop();
    console.log(`Sorry ${removedguest}, you're no longer invited to dinner`)
};

// Printing invitations to the remaining two guests
guests.forEach((guests) => {
    console.log(`Dear ${guests}, You're still invited to dinner`)
});

// Removing the list two names from the list
guests.pop();
guests.pop();

// Printing the final list to confirm it's empty
console.log("Final guest list:", guests);