import {store} from "../../../data/Store.js"
import { DisplayTable } from "./DisplayUser.js";
function Search(){
    const input=document.getElementById("Search").value.toLowerCase();
    const value=store.User.filter((user)=>
        user.name.toLowerCase().includes(input)||
        user.email.toLowerCase().includes(input)||
        user.phone.toLowerCase().includes(input)||
        user.role.toLowerCase().includes(input));
 DisplayTable(value);
}
document.getElementById("Search").addEventListener("input", Search);