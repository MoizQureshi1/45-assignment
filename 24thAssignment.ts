// Task 24

let name_1:string = "moiz";
let name_2:string = "moiz qureshi";
let name_3:string = "muhammad moiz qureshi";

if (name_1 == name_3){
    console.log("name are equal");
}else{
    console.log("name are not equal")
};

if (name_1 != name_2){ 
    console.log("name are equal")
};


if (name_1 != name_3){ 
    console.log("name are equal")
};


let age_1:number = 18
let age_2:number = 22

if (age_1 == 18){
    console.log("eligible for vote")
};

if (age_1 != 22){
    console.log("eligible for vote in older category")
};


if (age_1 <= age_2){ // less
    console.log("younger")
};

if (age_2 >= age_1){ // greater
    console.log("older")
};


if (age_1 == 18 && age_2 == 22){
    console.log("person is eligible for vote");
}

if (age_1 == 18 || age_2 != 22){
    console.log("person is eligible not for vote")
};


let country:string [] = ["pakistan", "india", "japan", "china"];
if (country.includes("pakistan")){
    console.log("pakistan is in list")
};

if (!country.includes("america")){
    console.log("america is not include in an array")
};