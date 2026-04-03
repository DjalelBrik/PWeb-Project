import { store } from "../../../data/Store.js";

const table = document.getElementById("table");

export function DisplayTable(users = store.User) {
  table.innerHTML = "";

  users.forEach((user) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.phone}</td>
      <td>${user.role}</td>
      <td>${user.status}</td>
      <td>
        <button class="delete-btn" onclick="deleteUser(${user.id})">
          <i data-lucide="trash2"></i>
        </button>
      </td>
    `;

    table.appendChild(row);
  });

  lucide.createIcons();
}

function deleteUser(id) { 
  store.User = store.User.filter((p) => p.id !== id);
  DisplayTable();
}
window.deleteUser = deleteUser;
DisplayTable();
