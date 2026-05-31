// const dataUrl = "http://10.0.0.99:4321/items.json";

// async function dataFetch() {
//   return await fetch(dataUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       return data;
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// }

// const data = await dataFetch();
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

// function setData(e) {
//   data.map((item) => {
//     const newItem = document.createElement("a");
//     newItem.href =
//       "items/" +
//       item.Category.toLowerCase().replaceAll(" ", "") +
//       "/" +
//       item.Name.toLowerCase().replaceAll(" ", "");

//     newItem.setAttribute(
//       "data-name",
//       item.Name.toLowerCase().replaceAll(" ", ""),
//     );
//     newItem.className = "w-max h-full";
//     newItem.innerHTML = `

//       <div
//           id=${item.Name.toLowerCase().replaceAll(" ", "")}
//           class="h-full border border-neutral-800 hover:bg-neutral-900 hover:realtive hover:top-1 hover:-translate-1 hover:transition-[0.5s] grid grid-rows-[auto,10px]"
//       >
//           <img src=${item.Image} alt=${item.Name} class="w-37.5 h-max" />
//           <p class="flex h-full items-end justify-center">
//               ${item.Name}
//           </p>
//       </div>

//       `;

//     container.appendChild(newItem);
//   });
// }

// setData();
filterData();
