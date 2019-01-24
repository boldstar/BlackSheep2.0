function navFunction() {
    var x = document.getElementById("navLinks");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }