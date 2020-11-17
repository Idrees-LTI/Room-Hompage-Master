
//Js for collapsing and expanding of the menu icon based on the screen size
const menu = document.querySelector(".hamburger");
const body = document.querySelector("body");
const navbar = document.querySelector("ul");
const close = document.querySelector(".close");
const logo = document.querySelector(".logo");


menu.addEventListener('click', () => {
    navbar.style.display = "none";
    close.style.display = "none";

    if ( navbar.style.display === "none") {
        navbar.style.display = "block",
        close.style.display = "block",
        menu.style.display = "none";
        
    } else {
        navbar.style.display = "none",
        close.style.display = "none",
        menu.style.display = "block"
    };
    
});


//Js for the page slider
close.addEventListener('click', () => {
    navbar.style.display = "none";
    close.style.display = "none";

   if (navbar.style.display === "block",
       close.style.display = "block") {
    navbar.style.display = "none",
    close.style.display = "none",
    menu.style.display = "block",
    menu.style.marginTop = "35px",
    logo.style.paddingTop = "20px"
   }
   else {
    navbar.style.display = "block"
   };
   
});
