window.addEventListener("popstate", activeComponent);
window.addEventListener("load", activeComponent);

function activeComponent() {
  const url = new URL(window.location.href);
  const activeLink = url.hash.replace("#", "");

  if (activeLink == "") return;

  const allElements = document.getElementsByClassName("navItems");

  if (url.hash == "") {
    Array.prototype.forEach.call(allElements, function (el) {
      if (el.id != "allitems")
        el.className =
          "navItems bg-blue-700 hover:bg-white hover:text-blue-700 px-1 focus:outline-none";
    });

    const activeElement = document.getElementById(activeLink);

    if (activeElement != null) {
      activeElement.className =
        "navItems text-blue-700 bg-white w-max px-1 focus:outline-none";
    }
  } else {
    Array.prototype.forEach.call(allElements, function (el) {
      el.className =
        "navItems bg-blue-700 hover:bg-white hover:text-blue-700 px-1 focus:outline-none";
    });

    const activeElement = document.getElementById(activeLink);

    if (activeElement != null) {
      activeElement.className =
        "navItems text-blue-700 bg-white px-1 focus:outline-none";
    }
  }
}
