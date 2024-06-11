let lastViewedPage = localStorage.getItem("lastPage");
history.pushState(null, "", `${lastViewedPage}`);

//redirecting to dashboard
function redirectToDashboard(){
  if(window.location.pathname === "/"){
    history.pushState(null, "", "dashboard/amount");
  }
}
redirectToDashboard()


let links = document.querySelectorAll(".navbar ul li a");
links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    urlManager(this.innerText);
  });
});

function urlManager(clickedLink) {
  switch (clickedLink) {
    case "Amount":
      history.pushState(null, "", "/dashboard/amount");
      document.title = "📘 Khatabook - Amount";
      break;
    case "Goals":
      history.pushState(null, "", "/dashboard/goals");
      document.title = "📘 Khatabook - Goals";
      break;
    case "Budget":
      history.pushState(null, "", "/dashboard/budget");
      document.title = "📘 Khatabook - Budget";
      break;
    case "Subscriptions":
      history.pushState(null, "", "/dashboard/subscriptions");
      document.title = "📘 Khatabook - Subscriptions";
      break;
    case "Income":
      history.pushState(null, "", "/dashboard/income");
      document.title = "📘 Khatabook - Income";
      break;
    case "Expenses":
      history.pushState(null, "", "/dashboard/expenses");
      document.title = "📘 Khatabook - Expenses";
      break;
    case "Investment":
      history.pushState(null, "", "/dashboard/investment");
      document.title = "📘 Khatabook - Investment";
      break;
    default:
      console.error(`Unknown link: ${clickedLink}`);
      break;
  }
}
