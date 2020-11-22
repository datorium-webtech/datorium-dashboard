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
}
