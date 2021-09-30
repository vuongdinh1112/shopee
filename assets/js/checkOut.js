let list_items=[];
    fetch("https://sheetdb.io/api/v1/iv1aoqer4kare")
    .then(response => response.json())
    .then(data =>{
        for(let i=0;i<data.length;i++){
            list_items.push(data[i]);
            }
        });

let addButton = document.getElementById("abc")
addButton && addButton.addEventListener("click", ()=>{
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
        console.log(1);
}})
;