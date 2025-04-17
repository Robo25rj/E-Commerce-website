let input1=document.querySelectorAll("input")[0];
let LastName=document.querySelectorAll("input")[1];
let Email=document.querySelectorAll("input")[2];
let Number1=document.querySelectorAll("input")[3];
let Password=document.querySelectorAll("input")[4];
let confirmPassword=document.querySelectorAll("input")[5];

let span1=document.querySelectorAll("span")[0];
let lSpan=document.querySelectorAll("span")[1];
let eSpan=document.querySelectorAll("span")[2];
let nSpan=document.querySelectorAll("span")[3];
let PSpan=document.querySelectorAll("span")[4];
let cpSpan=document.querySelectorAll("span")[5];
let span7=document.querySelectorAll("span")[6];

let form=document.querySelector("form");
let storage=[];

let localData=JSON.parse(localStorage.getItem("Data"));
console.log(localData);
if (localData) {
    storage=localData;
    console.log(storage);
}
//console.log(input1,input2,input3,input4,input5,input6,span1,span2,span3,span4,span5,span6,span7,form);

form.addEventListener("submit",(e)=>{
     
    let regex=/^[a-zA-Z]{2,20}$/;  //validations 
    
  // e.preventDefault();
   let flag=true;

    if (input1.value=="") {
        span1.innerHTML="First Name is Required...!";
        flag=false;
        e.preventDefault();
        
    }
    else if (regex.test(input1.value)) {
        span1.innerHTML="";
    }
    else{
        span1.innerHTML= "Invalid Last Name..! <br>";
        flag=false;
        e.preventDefault();
        

    }

    if (LastName.value=="") {
        lSpan.innerHTML="Last Name is Required...!";
        flag=false;
        e.preventDefault();
        
    }
    else if (regex.test(LastName.value)) {
        lSpan.innerHTML="";
    }
    else{
        lSpan.innerHTML= "Invalid Last Name..! <br>";
        flag=false;
        e.preventDefault();
        

    }

    if (Email.value=="") {
        eSpan.innerHTML="Email is Required..!";
        flag=false;
        e.preventDefault();
        

    }else  {
        eSpan.innerHTML="";

    }

    let regex1=/^[6-9][0-9]{9}$/;  //first number 6-9 remaining number 0-9 and length should be 9

    if (Number1.value=="") {
        nSpan.innerHTML="Number is Required..!";
        flag=false;
        e.preventDefault();
        
    }
    else if (regex1.test(Number1.value)) {
        nSpan.innerHTML="";
    }
    else{
        nSpan.innerHTML="Invalid Mobile Number...! <br>";
        flag=false;
        e.preventDefault();
        
    }

    let regex2=/^[a-zA-Z0-9]{8,15}$/;

    if (Password.value=="") {
        PSpan.innerHTML="Password is Required..!"
        flag=false;
        e.preventDefault();
        
    }
    else if (regex2.test(Password.value)) {
        PSpan.innerHTML="";

    }
    else{
        PSpan.innerHTML="Password is Invalid...!"
        flag=false;
        e.preventDefault();
    }

    if (confirmPassword.value==Password.value) {
        cpSpan.innerHTML="";
    }
    else{
        cpSpan.innerHTML="Confirm password doesn't Match <br>";
        flag=false;
        e.preventDefault();
        
    }
 
    if (flag) {
        let obj={
            first:input1.value,
            last:LastName.value,
            email: Email.value,
            number: Number1.value,
            pass:Password.value,
        };
       // console.log(obj);
        storage.push(obj);
    console.log(storage);
    localStorage.setItem("Data",JSON.stringify(storage));

    }  
   
});
