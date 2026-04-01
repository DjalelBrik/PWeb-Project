import {store} from "../../../data/Store.js"

function AddProduct(){
    const id=document.getElementById("productId").value;
    const title=document.getElementById("title").value;
    const quantity=document.getElementById("quantity").value;
    const category=document.getElementById("category").value;
    const price=document.getElementById("price").value;
    const  description=document.getElementById("description").value;
    const file=document.getElementById("img").files[0];
    if(!id || !title || !quantity || !category || !price || !description || !file){alert("fill the form"); return;}
    const product={
        id:Number(id),
        file,
        title,
        quantity:Number(quantity),
        category,
        price:Number(price),
        description,
    };
    store.products.push(product);
    console.log(store.products);
    document.getElementById("productId").value="";
    document.getElementById("title").value="";
    document.getElementById("quantity").value="";
    document.getElementById("category").value="";
    document.getElementById("price").value="";
    document.getElementById("description").value="";
    document.getElementById("img").value="";
}
document.querySelector(".save-btn").addEventListener("click", AddProduct);

