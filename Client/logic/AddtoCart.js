import { Client } from "../../data/Store.js";

function AddtoCart(event) {
  const button = event.currentTarget;
  const box = button.closest(".box");

  if (!box) {
    return;
  }

  const product = {
    image: box.querySelector("img")?.src || "",
    title: box.querySelector("h3")?.textContent.trim() || "",
    description: box.querySelector("p")?.textContent.trim() || "",
    price: box.querySelector("span")?.textContent.trim() || "",
    quantity: 1,
  };

  Client.Cart.push(product);
  console.log(Client.Cart);
}

document.getElementById("add").addEventListener("click", AddtoCart);