"use strict";

// let searchFrom = document.querySelector("aside");
var isMenuOpen = true;
var isMenuOpenFont = true;

function toggleMenu() {
  var menuItems = document.querySelectorAll(".menuItemTitle");
  console.log(menuItems);
  var aside = document.querySelector("aside");

  if (isMenuOpen) {
    menuItems.forEach(function (menuItem) {
      menuItem.style.display = "none";
      menuItem.style.alignItems = "center"; // menuItem.style.justifyContent = "center"; 
      // menuItem.style.display = "flex"; 
    });
    aside.style.width = "100px";
  } else if (!isMenuOpen) {
    menuItems.forEach(function (menuItem) {
      menuItem.style.display = "inline";
    });
    aside.style.width = "290px";
  }

  isMenuOpen = !isMenuOpen;
} // function tiggleFont() {
//   let font = document.querySelector(".heading");
//   console.log(font);
// }