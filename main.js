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

// TASK: Create a function that takes 1 parameter "parent"
// Implementation:
// 1. Create a new "div"
// 2. Add / append the new div to the parent
// Return the newly created div
function createDiv(parent) {
    let newDiv = document.createElement("div");
    parent.append(newDiv);
    return newDiv;
}

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

// TASK: Populate list with 3 courses
// {name: "Basic WebTech", price: 180, expense: 120, enrollments: 400}
// {name: "Advanced WebTech", price: 240, expense: 160, enrollments: 300}
// {name: "Pro WebTech", price: 160, expense: 120, enrollments: 100}
// Create a new empty array and call it "courseList" and create a function and call it "createCourse"
let courseList = [
    createCourse("Basic WebTech", 180, 120, 400),
    createCourse("Advanced WebTech", 240, 160, 300),
    createCourse("Pro WebTech", 160, 120, 100)
];

console.log(courseList);
