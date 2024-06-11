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

function tabSwitchWithURL() {
  resetTabing();
  let lastSelectedTab =
    lastViewedPage.slice(11).slice(0, 1).toUpperCase() +
    lastViewedPage.slice(11).slice(1);
  console.log(lastSelectedTab);
  for (tab of tabs) {
    if (tab.innerText === lastSelectedTab) {
      tab.classList.add("selected");
    }
  }
}

tabSwitchWithURL();
