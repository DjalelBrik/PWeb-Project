import {store} from "../../../data/Store.js"
import { DisplayTable } from "./DisplayOrder.js";

function Filter(){
    const input=document.getElementById("Select").value;
    const value=store.Order.filter((order)=>
        order.status === input);
    DisplayTable(value);
}
document.getElementById("Select").addEventListener("change", Filter);
