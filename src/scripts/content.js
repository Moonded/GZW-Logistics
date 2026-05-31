const filterBar = document.getElementById("filter");
const container = document.getElementById("items");

filterBar.addEventListener("input", filterData);
filterBar.addEventListener("input", setURLParam);

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

function setOnLoad() {
  const url = window.location.search;
  const urlParams = new URLSearchParams(url);
  if (filterBar.value == "") {
    const search = urlParams.get("search");
    if (search == null) return;
    const decode = decodeURI(search);
    filterBar.value = decode;
    const newURL = new URL(window.location);
    if (filterBar.value == "") {
      newURL.searchParams.delete("search");
    }
    window.history.pushState({}, "", newURL);
  }
  filterData();
}

function setURLParam() {
  const url = window.location.search;
  const urlParams = new URLSearchParams(url);
  urlParams.set("search", encodeURI(filterBar.value));
  const newURL = new URL(window.location);
  newURL.searchParams.set("search", encodeURI(filterBar.value));
  if (filterBar.value == "") {
    newURL.searchParams.delete("search");
  }
  window.history.pushState({}, "", newURL);
}

filterData();
window.onload = setOnLoad();
