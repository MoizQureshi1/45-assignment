// Task 41

function show_magicians(magicians:string[]): void {

    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1))
    }
}  

const magician:string[] = ["ali", "sami", "bilal"];
show_magicians(magician)





// Task 42

function make_great(magicians:string[]):void{
    for (let i = 0; i < magicians.length; i++){
        magicians[i] = magicians[i] + ' the graet'
    }
}

const magicians2: string[] = ["ali", "sami", "bilal"]
make_great(magicians2)
show_magicians(magicians2)





// Task 43

function make_great2(magicians:string[]):string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++){
       greatMagicians.push(magicians[i] + ' the graet');
    }
    return greatMagicians;
}

const magicians3: string[] = ["ali", "sami", "bilal"];
const greatMagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);