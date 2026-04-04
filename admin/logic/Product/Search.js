import { store } from "../../../data/Store.js";
import { DisplayTable } from "./DisplayTable.js";

const searchInput = document.getElementById("search");

function Search() {
  const input = searchInput.value.toLowerCase();
  const value = store.products.filter(
    (product) =>
      product.title.toLowerCase().includes(input) ||
      product.category.toLowerCase().includes(input) ||
      product.description.toLowerCase().includes(input)
  );

  DisplayTable(value);
}

searchInput.addEventListener("input", Search);