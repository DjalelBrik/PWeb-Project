import { store } from "../../../data/Store.js";

const id = Number(new URLSearchParams(window.location.search).get("id"));
const product = store.products.find((item) => item.id === id);

const idp = document.getElementById("productId");
const title = document.getElementById("title");
const quantity = document.getElementById("quantity");
const category = document.getElementById("category");
const price = document.getElementById("price");
const description= document.getElementById("description");


function fillForm() {
  idp.value = product.id;
  title.value = product.title;
  quantity.value = product.quantity;
  category.value = product.category;
  price.value = product.price;
  description.value = product.description;
}
fillForm();
