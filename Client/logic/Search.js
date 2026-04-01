import { Client } from "../../data/Store.js";

function Search() {
  const input = document.getElementById("search").value.toLowerCase();
  const value = Client.Cart.filter((cart) =>
    cart.title.toLowerCase().includes(input) ||
    cart.description.toLowerCase().includes(input) ||
    cart.category.toLowerCase().includes(input)
  );

  console.log(value);
}

document.getElementById("search")?.addEventListener("input", Search);
