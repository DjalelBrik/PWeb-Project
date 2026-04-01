import { Client } from "../../data/Store.js";

function AddtoCart() {
  const product = {
    image: document.querySelector(".product-image img")?.src || "",
    title: document.querySelector(".product-title")?.textContent.trim() || "",
    description: document.querySelector(".stock")?.textContent.trim() || "",
    price: document.querySelector(".new-price")?.textContent.trim() || "",
    quantity: 1,
  };

  Client.Cart.push(product);
  console.log(Client.Cart);
}

document.getElementById("add").addEventListener("click", AddtoCart);
