import {store} from "../../../data/Store.js"
import { DisplayTable } from "./DisplayUser.js";

function Filter(){
    const input=document.getElementById("Select").value;
    const value=store.User.filter((user)=>
        user.status === input);
    DisplayTable(value);
}
document.getElementById("Select").addEventListener("change", Filter);
