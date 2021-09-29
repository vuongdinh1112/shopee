<<<<<<< HEAD
let list_items=[];
    fetch("https://sheetdb.io/api/v1/iv1aoqer4kare")
    .then(response => response.json())
    .then(data =>{
        for(let i=0;i<data.length;i++){
            list_items.push(data[i]);
            }
        });

let addButton = document.getElementById("1")
addButton.addEventListener("click", ()=>{
    let a = false;
    let pos = 0;
    for(let i=0;i<list_items.length;i++){
    let input = list_items[i];
    if(localStorage.getItem("id") == input["id"]){
    a= true;
    pos=i;
    }
    }
    if(a==true){
        console.log("Nice");
        let a = list_items[pos];
        console.log(a["name"]);
        console.log(a["price"]);
        // document.getElementById("product").innerText= a["name"];
        // document.getElementById("price").innerText = a["price"];
}})
;
=======
console.log("hello world");
console.log("hello checkout");
console.log("hello duc");
console.log("test")
>>>>>>> 6479c36c60cc1029536567dc8fb22fe75d4892ec
