window.addEventListener("load", setStyle);

const buttons = document.querySelectorAll("[data-items-navbar]");

buttons.forEach((button) => {
  button.addEventListener("click", () => setNav(button.dataset.linkNav));
});

function setStyle() {
  const data = localStorage.getItem("activeItem");

  buttons.forEach((button) => {
    const dataset = button.dataset.linkNav;

    if (dataset == data) {
      button.className =
        "navItems text-blue-700 bg-white px-1 focus:outline-none cursor-pointer select-none";
    } else {
      button.className =
        "navItems bg-blue-700 hover:bg-white hover:text-blue-700 px-1 focus:outline-none cursor-pointer select-none";
    }
  });
}

function setNav(item) {
  localStorage.setItem("activeItem", item);
  setStyle();
}

function setNavLocaStorage() {
  if (
    localStorage.getItem("activeItem") == null ||
    localStorage.getItem("activeItem") == ""
  ) {
    localStorage.setItem("activeItem", "allitem");
  }
}

window.onload = setNavLocaStorage();
