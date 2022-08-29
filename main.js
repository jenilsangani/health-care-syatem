// let searchFrom = document.querySelector("aside");
let isMenuOpen = true;
let isMenuOpenFont = true;


function toggleMenu() {
  let menuItems = document.querySelectorAll(".menuItemTitle");
  console.log(menuItems);
  let aside = document.querySelector("aside");
  if (isMenuOpen) {
    menuItems.forEach((menuItem) => {
      menuItem.style.display = "none";
      menuItem.style.alignItems = "center"; 
      // menuItem.style.justifyContent = "center"; 
      // menuItem.style.display = "flex"; 
      
    });
    aside.style.width = "100px";
  } else if (!isMenuOpen) {
    menuItems.forEach((menuItem) => {
      menuItem.style.display = "inline";
    });
    aside.style.width = "290px";
  }
  isMenuOpen = !isMenuOpen;
}


// function tiggleFont() {
//   let font = document.querySelector(".heading");
//   console.log(font);
// }
