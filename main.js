/**
 * Code that will make the menu open or close.
 */
function toggleMenu() {
    // Find "aside" element (by CSS selector) and stores it in a 'variable'
    let menu = document.querySelector("aside");
    // create a variable "menuButton" and store the menu button in it.
    let menuButton = document.querySelector(".menu-button");

    // take 'variable' previously created, access the list of classes it has, toggle "hide" class
    menu.classList.toggle("hide");

    // change the inside text/html of "menuButton"
    if (menu.classList.contains("hide")) {
        menuButton.innerHTML = "menu";
    } else {
        menuButton.innerHTML = "close";
    }
}



/*
 * [VARIABLES]
 * Variables are used to store data, information or objects.
 * This data can be retrieved ("remembered by the code") by using the name of variable.
 */
let salesFigure = 120000;
// Create 3 other variables for each figure and give it a different value.
let expensesFigure = 70000;
let enrollmentsFigure = 2500;
let growthFigure = 12.5;
// Save the TEXT for currency symbol. (In programming, text is called a STRING)
let currency = "&euro;";

// Create 4 variables that find and save all figure elements.
let salesFigureElement = document.querySelector(".figure.sales");
let expensesFigureElement = document.querySelector(".figure.expenses");
let enrollmentsFigureElement = document.querySelector(".figure.enrollments");
let growthFigureElement = document.querySelector(".figure.growth");



/*
 * [FUNCTIONS] (sometimes called "methods")
 * Functions are a "set of commands" that can be executed whenever their name is called.
 * Code inside the function is not executed UNTIL u call it.
 */

// Create a function that will change the content of the figure elements.
function refreshFigures() {
    salesFigureElement.innerHTML = currency + " " + salesFigure.toLocaleString();
    expensesFigureElement.innerHTML = currency + " " + expensesFigure.toLocaleString();
    enrollmentsFigureElement.innerHTML = enrollmentsFigure.toLocaleString();
    growthFigureElement.innerHTML = "+" + growthFigure.toLocaleString() + "%";
}

// Call the function that was created above.
refreshFigures();
// Change the value for the figure variables
salesFigure = 135000;
enrollmentFigure = 2800;
// Call function again, so that the text is set to the new values.
refreshFigures();

/**
 * [ARRAY] (sometimes called a list)
 * Array is a list of values (inside [], seperated by a comma). Position of an item is called an "index".
 * Index starts at 0. (So the first item in an array has index of 0, second has 1, etc).
 */
let exampleArray = [7, 9, 20, "exampleString"];
console.log("The first item in exampleArray is " + exampleArray[0]); // 7
console.log("Last item is " + exampleArray[3]); // Write a console.log that will show me the last item.
// How to add new values to a list?
exampleArray.push(9999); // Now the list looks like this: [7, 9, 20, "exampleString", 9999]

/**
 * [JSON] (JavaScript Object Notation)
 * Syntax / format for storing data.
 * Simple meaning: It's similar to a list but rather than "index", values have a "key".
 */
let exampleJson = {
    "firstName": "John",
    "lastName": "Doe"
};

console.log("The first name of the person is " + exampleJson["firstName"]);
// Result of this should be "The first name of the person is John"
exampleJson["age"] = 20; // Add a new value to the json
console.log("The age of the person is" + exampleJson["age"]); // Write the new value to console


// Create a new empty array and call it "courseList" and create a function and call it "createCourse"
let courseList = [];

// 4 parameters: name price expense and enrollment
function createCourse(name, price, expense, enrollment) {
    // Create a json "course" with keys "name", "price", "expense", "enrollment".
    // Assign the values from parameters.
    let course = {
        "name": name,
        "price": price,
        "expense": expense,
        "enrollment": enrollment
    };
    return course; // this function will return the json when its called
}
