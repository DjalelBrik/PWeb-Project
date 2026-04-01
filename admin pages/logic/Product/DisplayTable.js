import { store } from "../../../data/Store.js";

const table = document.getElementById("productTable");

function DisplayTable() {
  table.innerHTML = "";

  store.products.forEach((product) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${product.id}</td>
      <td>
        ${product.image ? `<img src="${product.image}" width="60"/>` : "No Image"}
      </td>
      <td>${product.title}</td>
      <td>${product.quantity}</td>
      <td>${product.category}</td>
      <td>${product.price} $</td>
      <td>${product.description}</td>
      <td>
        <a href="ProductShow.html?id=${product.id}">
          <button class="show-btn">
            <i data-lucide="eye"></i>
          </button>
        </a>

        <a href="ModifyProduct.html?id=${product.id}">
          <button class="modify-btn">
            <i data-lucide="pencil"></i>
          </button>
        </a>

        <button class="delete-btn" onclick="deleteProduct(${product.id})">
          <i data-lucide="trash2"></i>
        </button>
      </td>
    `;

    table.appendChild(row);
  });

  lucide.createIcons();
}

function deleteProduct(id) { 
  store.products = store.products.filter((p) => p.id !== id);
  DisplayTable();
}
window.deleteProduct = deleteProduct;
DisplayTable();