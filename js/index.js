var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");


function opentab(tabname) {
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
  }
  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].classList.remove("active-tab");
    if (tabcontents[i].id === tabname) {
      tabcontents[i].classList.add("active-tab");
    }
  }
  event.currentTarget.classList.add("active-link");
}

document.querySelectorAll(".submenu > a").forEach((menu) => {
  menu.addEventListener("click", function (e) {
    e.preventDefault();
    const submenuItems = this.nextElementSibling;
    submenuItems.classList.toggle("open");
    this.querySelector(".fas.fa-chevron-down").classList.toggle("rotate");
  });
});

