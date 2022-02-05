//function:
function makeCake(cake, icing){

   // console.log("my favourite cake is ", cake);
   // console.log ("with",icing, "icing" );
};
let cake= "chocolate";
let icing= "vanilla";
//object:
makeCake ("chocolate","vanilla");
const myCake = {
   cakeFlavor:"red velvet",
   cakeIcing:"cream chesse",
   cakeTopping: "strawberries"

};
//console.log(myCake)

//event:
function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
  }
  
  function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
  }
//method:
function clickMe() {
    let text = document.getElementById("question").innerHTML;
    document.getElementById("question").innerHTML =
    text.replace("Vanilla","Chocolate");
  }