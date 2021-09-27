let user_data=[];
fetch("https://sheetdb.io/api/v1/8cviwkjcv9avf")
.then(response => response.json())
.then(data =>{
    for(let i=0;i<data.length;i++){
        user_data.push(data[i]);
    }
});
console.log(user_data);
let signInButton = document.getElementById("sign_In_Button")
signInButton.addEventListener("click", ()=>{
    let a = false;
    let b = false;
    let pos = 0;
    for(let i=0;i<user_data.length;i++){
        let input = user_data[i];
        if(document.getElementById("sign_In").value == input["user_name"]){
            a= true;
            pos=i;
        }
    }
    if(a==true){
        console.log("Nice");
        if(document.getElementById("password").value == user_data[pos]["password"]){
            b=true;
        }

    }
    if(a==true && b==true){
        alert("Good job");
    }
    else if(a==true && b==false){
        alert("Wrong password");
    }
    else{
        alert("Wrong user name");
    }
});