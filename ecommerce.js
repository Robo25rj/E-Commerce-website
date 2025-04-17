let login=document.querySelector("#right");
console.log(login);

let particularUser=JSON.parse(localStorage.getItem("particularUser"));

console.log(particularUser);

let maleCont=document.querySelector("#maleCont");


let femaleCont=document.querySelector("#FeCont");

let popup=document.querySelector("#PopUp");

let X=document.querySelector("#X");

X.addEventListener("click",()=>{
    popup.style.right="-100%";
})

let kids=document.querySelector("#kidsCont");

let electronicsCont=document.querySelector("#electronicsCont");

//!dynamic

let dynamic=document.querySelector("#dynamic");

console.log(maleCont,femaleCont,popup,X,kids,electronicsCont,dynamic);

//! array for cart
let cartStorage=[];

if(particularUser){
    login.innerHTML= `<span>${particularUser.first}<span>
    <a href="./ecommerce.html" id="logOut"><button>LogOut</button></a>`;

    let logout=document.querySelector("#logOut");
    logout.addEventListener("click",()=>{
        localStorage.removeItem("particularUser");
    });
}

async function fetchData(){
   let dataFromServer= await fetch("https://www.shoppersstack.com/shopping/products/alpha");
   
   let allData=await dataFromServer.json();
   console.log(dataFromServer);
    console.log(allData.data);

    //! male section
    let maleData=allData.data.filter((e)=>{
        if (e.category=="men") {
            return e;
        }
    })
    console.log(maleData);

    maleData.map((e)=>{
         maleCont.innerHTML +=`<div id="${e.productId}">
         <img src="${e.productImageURLs[0]}" alt="">
         <h2>Name: ${e.name}</h2>
         <h3>Price:$ ${e.price}</h3>
         <h4>Rating: ${e.rating}</h4>
         <button class="btn">Add To Cart</button>
     </div>`;
    });

    //! Female section
    let femaleData=allData.data.filter((e)=>{
        if(e.category=="women"){
              return e;
        }
    })
    console.log(femaleData);
    femaleData.map((e)=>{
        femaleCont.innerHTML +=`<div id="${e.productId}">
        <img src="${e.productImageURLs[0]}" alt="">
        <h2>Name: ${e.name}</h2>
        <h3>Price:$ ${e.price}</h3>
        <h4>Rating: ${e.rating}</h4>
        <button class="btn">Add To Cart</button>
    </div>`;
   });

   //! Kids section
    let kidsData=allData.data.filter((e)=>{
        if (e.category=="kids") {
            return e;
        }
    })
    console.log(kidsData);

    kidsData.map((e)=>{
        kidsCont.innerHTML +=`<div id="${e.productId}">
        <img src="${e.productImageURLs[0]}" alt="">
        <h2>Name: ${e.name}</h2>
        <h3>Price:$ ${e.price}</h3>
        <h4>Rating: ${e.rating}</h4>
        <button class="btn">Add To Cart</button>
    </div>`;
   });


   //! electronics
   let electronicsData=allData.data.filter((e)=>{
          if (e.category=="electronics") {
            return e;
          }
   })
   console.log(electronicsData);

   electronicsData.map((e)=>{
    electronicsCont.innerHTML +=`<div id="${e.productId}">
    <img src="${e.productImageURLs[0]}" alt="">
    <h2>Name: ${e.name}</h2>
    <h3>Price: $${e.price}</h3>
    <h4>Rating:${e.rating}</h4>
    <button class="btn">Add To Cart</button>
</div>`;
});

    
   let btn=document.querySelectorAll(".btn");
   btn.forEach((e)=>{
    e.addEventListener("click",()=>{
        popup.style.right="0";
        if (particularUser) {  //! for dynamic cart
            let parentElement=e.parentElement.id;  //!not target entire div only id
            console.log(parentElement);
            let oneProduct=allData.data.find((e)=>{
                if (e.productId==parentElement) {
                    return e;
                }
            });
            console.log(oneProduct);
            cartStorage.push(oneProduct);
            print();

            subTotal();            

            Delete();

            grandtotal();

        }else{
            dynamic.innerHTML=`<a href="./login.html">Login First</a>`;
        }
    })
   })

}
fetchData();

function print(){
    dynamic.innerHTML=""; //!make it empty
    cartStorage.map((e)=>{
        dynamic.innerHTML += `<div class="cart-design" id="${e.productId}">

        <div>
            <img src="${e.productImageURLs[0]}" alt="">
        </div>

        <div>
        <h3>${e.name}</h3>
        <input type="number">
        </div>

        <div>
            <h4 class="price">${e.price}</h4>
        </div>
        <div>
            <h4 class="sub">${e.price}</h4> 
            <i class="fa-duotone fa-trash"></i>
        </div>
    </div>`
    })
    Delete();
}

function Delete(){
    
    let trash=document.querySelectorAll(".fa-trash");
    trash.forEach((e)=>{
        e.addEventListener("click",()=>{
            // console.log(e);
            let parentElement=e.parentElement.parentElement;
            console.log(parentElement);
            cartStorage=cartStorage.filter((e)=>{
                   if (parentElement.id != e.productId) {
                    return e;
                   }   
            })
            console.log(cartStorage);
            print();
           grandtotal();
        })
    })
}
function subTotal(){
    let sub=document.querySelectorAll(".sub");
    console.log(sub);
    let quantity=document.querySelectorAll("input");
    quantity.forEach((e)=>{
        e.addEventListener("input",()=>{
            if (e.value<1) {
                e.value=1;
            }
            let parentElement=e.parentElement.parentElement;

            let price=parentElement.querySelector(".price");
            let sub=parentElement.querySelector(".sub");
            // console.log(price);
            // console.log(sub);
            // console.log(parentElement);

            sub.innerHTML=e.value*price.innerHTML;
            grandtotal();
        });
    });
   
}
function grandtotal(){
    let gt=document.querySelector("#GT");
    let sub=document.querySelectorAll(".sub");
    let sum=0;
    sub.forEach((e)=>{
        let total=parseInt(e.innerHTML);
        sum=sum+total;
    });
    gt.innerHTML=sum;
}