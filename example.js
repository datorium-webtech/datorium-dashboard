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
