import { store } from "../../../data/Store.js";

const id = Number(new URLSearchParams(window.location.search).get("id"));
const order = store.Order.find((item) => item.id === id);

const orderTitle = document.getElementById("orderTitle");
const orderDate = document.getElementById("orderDate");
const orderStatus = document.getElementById("orderStatus");
const orderTotal = document.getElementById("orderTotal");
const customerName = document.getElementById("customerName");
const customerEmail = document.getElementById("customerEmail");
const customerPhone = document.getElementById("customerPhone");
const customerAddress = document.getElementById("customerAddress");
const productsContainer = document.getElementById("productsContainer");

if (!order) {
  alert("Order not found");
  window.location.href = "/admin/Order";
}

function getStatusClass(status) {
  return status.toLowerCase();
}

function renderProduct(orderItem) {
  productsContainer.innerHTML = `
    <div class="product">
      <img src="https://via.placeholder.com/88" alt="${orderItem.productName}">
      <div>
        <h3>${orderItem.productName}</h3>
        <p>Qty: ${orderItem.quantity}</p>
        <p>Price: $${orderItem.totalPrice}</p>
      </div>
    </div>
  `;
}

function fillOrderDetails() {
  orderTitle.textContent = `Order #${order.id}`;
  orderDate.textContent = order.date;
  orderStatus.textContent = order.status;
  orderStatus.classList.add(getStatusClass(order.status));
  orderTotal.textContent = order.totalPrice;
  customerName.textContent = order.customerName || "N/A";
  customerEmail.textContent = order.customerEmail || "N/A";
  customerPhone.textContent = order.customerPhone || "N/A";
  customerAddress.textContent = order.customerAddress || "N/A";
  renderProduct(order);
}

fillOrderDetails();
