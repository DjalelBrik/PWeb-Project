import {store} from "../../../data/Store.js"

function Search(){
    const input=document.getElementById("search").value.toLowerCase();
    const value=store.products.filter((product)=>
        product.title.toLowerCase().includes(input)||
        product.category.toLowerCase().includes(input)||
        product.description.toLowerCase().includes(input));
        console.log(value);
}
document.getElementById("search").addEventListener("input", Search);