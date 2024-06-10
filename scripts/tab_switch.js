let tabs = document.querySelectorAll(".navbar ul li a");

function resetTabing() {
  tabs.forEach((tab) => tab.classList.remove("selected"));
}

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    resetTabing();
    this.classList.add("selected");
  });
});
