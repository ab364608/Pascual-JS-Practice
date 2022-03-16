// PRACTICE 1 //

// Create a function that changes the value of the string, myName, 
// from "Ben" to "Pascual" when the button "Change Name" is clicked 

let myName = "Ben";
let nameField = document.getElementById("renderName");
let button = document.getElementById("nameButton");

nameField.innerHTML = myName;


function changeName() {
    // Insert code below //
  
    // Stop code //
}

    // Insert code below //

    // Stop code //





// PRACTICE 2 //

// Create a function that changes the value of the name when the button is click
// If the name says "Ben" clicking the button changes the name to "Pascual"
// If the name says "Pascual" clicking the button changes the name to "Ben"

// You will use an IF statement


let nameField2 = document.getElementById("renderName-2");
let button2 = document.getElementById("nameButton-2");
let myName2 = "Ben";

nameField2.innerHTML = myName2;

let toggle = false;

function toggleName() {
    // Insert code below //

    // Stop code //
    return nameField2.innerHTML = myName2;
}

    // Insert code below //

    // Stop code //




// PRACTICE 3 //

// Create a function that toggles between the four different scents stored in the scentArray
// Once you reach the end of the array, loop back to the first value so it is an endless loop

// You will use an IF statement


let scent = document.getElementById("scent");
let scentButton = document.getElementById("scentButton");

var scentArray = ["Cedarwood", "Lemongrass", "Peppermint", "Lavender"];
let scentType = "";
let count = 0;


function changeScent() {
    // Insert code below //

    // Stop code //
}

// Insert code below //

// Stop code //