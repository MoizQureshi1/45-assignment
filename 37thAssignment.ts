// Task 37

function makeShirt(size:string = 'large', text: string = 'i love typescript'): void {
    console.log(`you have oeder ${size}, shirt that says ${text}`)
}

makeShirt();
makeShirt('medium ')

// different message
makeShirt('small', 'I need a big shirt to wear')