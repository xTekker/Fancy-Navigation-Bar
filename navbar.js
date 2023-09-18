var currentPageUrl = window.location.href;
var navLinks = document.querySelectorAll('#topnav a');

for (var i = 0; i < navLinks.length; i++) {
  var link = navLinks[i];

  if (link.href === currentPageUrl) {
    link.classList.add('active');
    break;
  }
}
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const topnav = document.getElementById("topnav");
    const container = document.getElementById("container");
    const elementsToHide = document.querySelectorAll(".element-to-hide"); // Add element-to-hide to all HTML elements you want to hide
    const siteHeader = document.getElementById("siteheader"); // Exclude the 'siteheader' element

    let isOpen = false;

    menuButton.addEventListener("click", function () {
        if (!isOpen) {
            topnav.style.display = "block";
            container.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Darken the container
            isOpen = true;

            // Hide all specified elements except 'siteheader'
            elementsToHide.forEach(function (element) {
                if (element !== siteHeader) {
                    element.style.display = "none";
                }
            });
        } else {
            topnav.style.display = "none";
            container.style.backgroundColor = "transparent"; // Remove the darkening
            isOpen = false;

            // Show all specified elements
            elementsToHide.forEach(function (element) {
                element.style.display = "block";
            });
        }
    });
});






