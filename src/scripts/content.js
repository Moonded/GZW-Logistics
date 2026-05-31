const filterBar = document.getElementById("filter");
const container = document.getElementById("items");

filterBar.addEventListener("input", filterData);

function filterData() {
  for (const child of container.children) {
    const name = child.getAttribute("data-name");

    if (filterBar.value.toLowerCase().replaceAll(" ", "") == "") {
      child.style.display = "block";
    }

    if (name.includes(filterBar.value.toLowerCase().replaceAll(" ", ""))) {
      child.style.display = "block";
    } else {
      child.style.display = "none";
    }
  }
}

filterData();
