import { Client } from "../../data/Store.js";

function DisplayCart() {
  const itemsContainer = document.querySelector(".items");
  const headerCount = document.querySelector(".header p span");
  const subtotalLabel = document.querySelector(".Leftside .row:first-of-type span:first-child");
  const subtotalValue = document.querySelector(".Leftside .row:first-of-type span:last-child");
  const totalValue = document.querySelector(".total span:last-child");

  if (!itemsContainer) {
    return;
  }

  itemsContainer.innerHTML = "";
  let totalItems = 0;
  let totalPrice = 0;

  Client.Cart.forEach((cart) => {
    totalItems += cart.quantity;
    totalPrice += cart.price * cart.quantity;

    itemsContainer.innerHTML += `
      <div class="item">
        <img src="${cart.image}" alt="${cart.title}">
        <div class="description">
          <div>
            <h3>${cart.title}</h3>
            <p>${cart.description}</p>
          </div>
          <i class="trash" data-id="${cart.id}" data-lucide="trash-2"></i>
          <div class="quantity">
            <button class="btn-minus" data-id="${cart.id}">-</button>
            <span>${cart.quantity}</span>
            <button class="btn-plus" data-id="${cart.id}">+</button>
          </div>
        </div>
        <div class="price">
          <span>$${(cart.price * cart.quantity).toFixed(2)}</span>
        </div>
      </div>
    `;
  });

    headerCount.textContent = `${totalItems} items`;
    subtotalLabel.textContent = `Subtotal (${totalItems} items)`;
    subtotalValue.textContent = `$${totalPrice.toFixed(2)}`;
    totalValue.textContent = `$${totalPrice.toFixed(2)}`;
      window.lucide.createIcons();

  document.querySelectorAll(".trash").forEach((button) => {
    button.addEventListener("click", () => DeleteCart(Number(button.dataset.id)));
  });

  document.querySelectorAll(".btn-plus").forEach((button) => {
    button.addEventListener("click", () => ModifyQuantity(Number(button.dataset.id), 1));
  });

  document.querySelectorAll(".btn-minus").forEach((button) => {
    button.addEventListener("click", () => ModifyQuantity(Number(button.dataset.id), -1));
  });
}

function ModifyQuantity(id, change) {
  Client.Cart = Client.Cart.map((cart) => {
    if (cart.id === id) {
      return {
        ...cart,
        quantity: cart.quantity + change,
      };
    }

    return cart;
  }).filter((cart) => cart.quantity > 0);

  DisplayCart();
}

function DeleteCart(id) {
  Client.Cart = Client.Cart.filter((cart) => cart.id !== id);
  DisplayCart();
}

DisplayCart();
