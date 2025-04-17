let form=document.querySelector("form");
let userName=document.querySelectorAll("input")[0];
let password=document.querySelectorAll("input")[1];
let span1=document.querySelectorAll("span")[0];
let span2=document.querySelectorAll("span")[1];
let span3=document.querySelectorAll("span")[2];


console.log(form,userName,password,span1,span2,span3);

let localData=JSON.parse(localStorage.getItem("Data"));
console.log(localData);


// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     if(userName.value=="" && password.value==""){
//        alert("username required");
//        alert("password is required");
//     }
//     else if(userName.value==""){
//         alert("username required");
//     }
//     else if(password.value==""){
//         alert("Password required");
//     }
//     else if (userName.value=="Rohit" && password.value=="rj2525") {
//         alert("Boss welcome to the page");
//     }
//     else{
//         alert("shuuus!! go away")
//     }
// })

form.addEventListener("submit",(e)=>{
    span1.innerHTML="";
    span2.innerHTML="";
    span3.innerHTML="";

    let matching=localData.find((e)=>{
        if (userName.value==e.email && password.value==e.pass) {
            return e;
        }
    })


    if(userName.value=="" && password.value==""){
        span1.innerHTML="Username toh dal bhaii..!!"
        span2.innerHTML="Password toh dal bhaii..!!"
        e.preventDefault();
    }
    else if(userName.value==""){
        span1.innerHTML="Username toh dal bhaii..!!"
       
        e.preventDefault();
    }
    else if(password.value==""){
        span2.innerHTML="Password toh dal bhaii..!!"
        e.preventDefault();
    }
    else if (matching) {
                alert("Boss welcome to the page");
                localStorage.setItem("particularUser",JSON.stringify(matching));
            }
    else{
        
          span3.innerHTML="credentials toh Dhangse dal ";
          e.preventDefault();
     }

})