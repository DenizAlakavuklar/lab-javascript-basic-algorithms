// Iteration 1: Names and Input
console.log("I'm ready!");

const hacker1 = "Deniz"
console.log(`The driver's name is ${hacker1}.`)

const hacker2 = "Max"
console.log(`The navigator's name is ${hacker2}.`)

const hacker3 = "Matan"
console.log(`The navigator's name is ${hacker3}.`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else { console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`) }

// Iteration 3: Loops

function addSpace(hacker1) { return hacker1.split('').join(' ') }
console.log(`"${addSpace(hacker1).toUpperCase()}"`)

//better solution for 3.1 (written by Matan)

let newName = "";

for (let i = 0; i < hacker1.length; i++) {
    const addition = hacker1[i].toUpperCase() + ' ';
    newName = newName + `${addition}`;
};

console.log(`"${newName.trim()}"`);

// below is 3.2

let wordReversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    const char = hacker2[i];
    wordReversed += char;
}

console.log(`"${wordReversed}"`);

// below is 3.3

if (hacker1[0] < hacker2[0]) {
    console.log(`The driver's name goes first.`)
}
else if (hacker2[0] < hacker1[0]) {
    console.log(`Yo, the navigator goes first definitely.`)
}

else {
    console.log(`What?! You both have the same name?`)
}

