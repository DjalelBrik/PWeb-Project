import {store} from "../../../data/Store.js"
import { DisplayTable } from "./DisplayTable.js";

function Filter(){
    const input=document.getElementById("Select").value.toLowerCase();
    const value=store.products.filter((product)=>
        product.category.toLowerCase().includes(input));
    DisplayTable(value);
}
document.getElementById("Select").addEventListener("input", Filter);