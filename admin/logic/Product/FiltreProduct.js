import {store} from "../../../data/Store.js"

function Filter(){
    const input=document.getElementById("Select").value.toLowerCase();
    const value=store.products.filter((product)=>
        product.category.toLowerCase().includes(input));
        console.log(value);
}
document.getElementById("Select").addEventListener("input", Filter);