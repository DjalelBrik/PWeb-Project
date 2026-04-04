import { store } from "../../../data/Store.js";

const table = document.getElementById("table");

export function DisplayTable(orders = store.Order) {
  table.innerHTML = "";

  orders.forEach((order) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${order.id}</td>
      <td>${order.customerName }</td>
      <td>${order.productName}</td>
      <td>${order.quantity}</td>
      <td>${order.totalPrice}</td>
      <td>${order.status}</td>
      <td>${order.date}</td>
      <td>
        <a href="/admin/ShowOrder?id=${order.id}">
          <button class="show-btn">
            <i data-lucide="eye"></i>
          </button>
        </a>
        <button class="delete-btn" onclick="deleteOrder(${order.id})">
          <i data-lucide="trash2"></i>
        </button>
      </td>
    `;

    table.appendChild(row);
  });

  lucide.createIcons();
}

function deleteOrder(id) { 
  store.Order = store.Order.filter((p) => p.id !== id);
  DisplayTable();
}
window.deleteOrder = deleteOrder;
DisplayTable();
