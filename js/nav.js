document.addEventListener("DOMContentLoaded", function () {
  // active sidebar
  var elems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elems);
  loadNav();

  function loadNav() {
    var xhttp = new XMLHttpRequest();
    console.log(xhttp);
    xhttp.onreadystatechange = function () {
      if (this.readyState) {
        if (this.status != 200) {
          return;
        }

        document.querySelectorAll(".topnav, .sidenav").forEach(function (elm) {
          elm.innerHTML = xhttp.responseText;
        });

        //load click nav page
      }
    };
    xhttp.open("GET", "nav.html", true);
    xhttp.send();
  }

  // load page content
  var page = window.location.hash.substr(1);
  if (page == "") {
    page = "home";
  }
  loadPage(page);

  function loadPage(page) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        var content = document.querySelector("#body-content");
        if (this.status == 200) {
          content.innerHTML = xhttp.responseText;
        } else if (this.status == 404) {
          content.innerHTML =
            "<p class='center-align'><b>404</b> Halaman tidak ditemukan</p>";
        } else {
          content.innerHTML =
            "<p class='center-align'><b>Halaman tidak dapat di Akses!!</b></p>";
        }
      }
    };
    xhttp.open("GET", `pages/${page}.html`, true);
    xhttp.send();
  }
});
