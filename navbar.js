/*navbar dropdown*/
function myFunction() {

  if (window.matchMedia("(max-width: 767px)").matches) {

    // Viewport is less or equal to 767 pixels wide
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

}
/*document.documentElement.style.setProperty('--nav-height', document.getElementById("topnav").outerHeight);*/
/*doesnt work*/