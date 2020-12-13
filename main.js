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
    createCourse("Pro WebTech", 160, 120, 100),
    createCourse("ABC", 214, 120, 100),
    createCourse("Some Course", 523, 432, 100)
];
console.log(courseList);

// (!!!) TASK Create a function createCourseDiv with parameters: "course", "no"
// inside the function:
// 1. Create a variable "section" that will find the section that contains all courses / course list.
// 2. Create a variable "container" that will create a div and make the section as its parent.
// 3. Give the container a class "course".

/**
 * Creates an HTML div element with all information about a course.
 * @param {{}} course JSON object with all the information about a course.
 * @param {number} no Ordinal numeration.
 */
function createCourseDiv(course, no) {
    let section = document.querySelector(".course-list");
    let container = createDiv(section);
    container.classList.add("course");

    // TASK: Recreate the first row with javascript
    // We want to use the number and course name from variables
    let row1 = createDiv(container);
    let row1_1 = createDiv(row1);
    row1_1.innerHTML = "#" + no;
    let row1_2 = createDiv(row1);
    row1_2.innerHTML = course["name"];
    let row1_3 = createDiv(row1)

    // TASK: Create the row for Price.
    // TASK: Fill the second row with text
    let row2 = createDiv(container);
    let row2_1 = createDiv(row2);
    row2_1.innerHTML = "Price";
    let row2_2 = createDiv(row2);
    row2_2.innerHTML = "&euro; " + course["price"];

    // TASK: Create last 2 rows for expense and enrollments
    // Fill the rows with all information
    let row3 = createDiv(container);
    let row3_1 = createDiv(row3);
    row3_1.innerHTML = "Expense";
    let row3_2 = createDiv(row3);
    row3_2.innerHTML = "&euro; " + course["expense"];

    let row4 = createDiv(container);
    let row4_1 = createDiv(row4);
    row4_1.innerHTML = "Enrollment";
    let row4_2 = createDiv(row4);
    row4_2.innerHTML = course["enrollment"];
}

createCourseDiv(courseList[0], "1");
createCourseDiv(courseList[1], "2");
createCourseDiv(courseList[2], "3");
