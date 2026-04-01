import { Client } from "../../data/Store.js";

function Filter() {
  const input = document.getElementById("filter").value.toLowerCase();
  const value = Client.Cart.filter((cart) =>
    cart.category.toLowerCase().includes(input)
  );

  console.log(value);
}

document.getElementById("filter")?.addEventListener("change", Filter);
