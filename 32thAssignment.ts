// Task 32

let current_users:string [] = ["admin", "Eric", "Noman", "Ali", "sami"];
let new_users:string [] = ["admin", "sami", "Hassan", "Waleed", "Ahsan"];

let current_users_lower:string [] = current_users.map(user => user.toLowerCase());

for (let new_user of new_users) {
    if(current_users_lower.includes(new_user.toLowerCase())){
        console.log(`Sorry ${new_user}, taht name is taken`)
    } else {
        console.log(`Yes ${new_user}, is still in avaliable list`)
    };
};