import { store } from "../../../data/Store.js";

const id = Number(new URLSearchParams(window.location.search).get("id"));

function saveModification() {
  const product = store.products.find((item) => item.id === id);

  const newId = document.getElementById("productId").value;
  const title = document.getElementById("title").value;
  const quantity = document.getElementById("quantity").value;
  const category = document.getElementById("category").value;
  const price = document.getElementById("price").value;
  const description = document.getElementById("description").value;
  const file = document.getElementById("img").files[0];

  if (!newId || !title || !quantity || !category || !price || !description) {
    alert("Fill all fields");
    return;
  }

  product.id = Number(newId);
  product.title = title;
  product.quantity = Number(quantity);
  product.category = category;
  product.price = Number(price);
  product.description = description;

  if (file) {
    product.image = URL.createObjectURL(file);
  }

  window.location.href = "/admin/Product";
  console.log( product.id ,
  product.title ,
  product.quantity,
  product.category,
  product.price,
  product.description)
}

document.querySelector(".save-btn").addEventListener("click", saveModification);
