// Task 32
var current_users = ["admin", "Eric", "Noman", "Ali", "sami"];
var new_users = ["admin", "sami", "Hassan", "Waleed", "Ahsan"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log("Sorry ".concat(new_user, ", taht name is taken"));
    }
    else {
        console.log("Yes ".concat(new_user, ", is still in avaliable list"));
    }
    ;
}
;
