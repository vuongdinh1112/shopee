// let list_items=[];
//     fetch("https://sheetdb.io/api/v1/jp556zty0eg2k")
//     .then(response => response.json())
//     .then(data =>{
//         for(let i=0;i<data.length;i++){
//             list_items.push(data[i]);
//             }
//         });

// let addButton = document.getElementById("btn-cart")
// addButton.addEventListener("click", ()=>{
//     let a = false;
//     let pos = 0;
//     for(let i=0;i<list_items.length;i++){
//     let input = list_items[i];
//     Number = Number(input);
//     if(localStorage.getItem("id") == input["id"]){
//     a= true;
//     pos=i;
//     }
//     }
//     if(a==true){
//         console.log("Nice");
//         let a = list_items[pos];
//         console.log(a["name"]);
//         console.log(a["price"]);
//         document.getElementById("product").innerHTML= a["name"];
//         document.getElementById("price").innerHTML = a["price"];

        

// }})







// let user_data=[];
// fetch("https://sheetdb.io/api/v1/gogvs137tq5qn")
// .then(response => response.json())
// .then(data =>{
//     for(let i=0;i<data.length;i++){
//         user_data.push(data[i]);
//     }
// });
// console.log(user_data);
// let signInButton = document.getElementById("sign_In_Button")
// signInButton.addEventListener("click", ()=>{
//     let a = false;
//     let b = false;
//     let pos = 0;
//     for(let i=0;i<user_data.length;i++){
//         let input = user_data[i];
//         if(document.getElementById("sign_In").value == input["lastname"]){
//             a= true;
//             pos=i;
//         }
//     }
//     if(a==true){
//         console.log("Nice");
//         if(document.getElementById("password").value == user_data[pos]["password"]){
//             b=true;
//         }
//     }
    
//     if(a==true && b==true){
        // document.getElementById("lastName").value == user_data[pos]["lastname"]
        // document.getElementById("firstName").value == user_data[pos]["firstname"]
        // document.getElementById("Phone Number").value == user_data[pos]["phone"]
        // document.getElementById("Email").value == user_data[pos]["email"]
        // document.getElementById("province").value == user_data[pos]["city"]
        // document.getElementById("place").value == user_data[pos]["address"]


//     }
//     else if(a==true && b==false){
//         alert("Wrong password");
//     }
//     else{
//         alert("Wrong user name");
//     }
// });



