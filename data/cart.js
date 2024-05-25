export let cart=
JSON.parse(localStorage.getItem('cart'));
if(!cart){
  cart=[{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    Quantity: 2},
    {productId: "54e0eccd-8f36-462b-b68a-8182611d9add",
    Quantity: 2}

];
}
function SaveToCart(){
  localStorage.setItem('cart',JSON.stringify(cart));
}
export function addToCart(productId){
    let matchingItem;
    cart.forEach((CartItem)=>{
     if(productId==CartItem.productId){
       matchingItem=CartItem;
     }
   });
   if (matchingItem){
     matchingItem.Quantity +=1;
   }else{
    cart.push({
     productId:productId,
     Quantity: 1
    });
  }
    SaveToCart();
  }
 export function removefromCart(productid){
    const newcart=[]
    cart.forEach((cartItem)=>
    {
      if (cartItem.productId!==productid){
        newcart.push(cartItem);

      }
    })
    cart=newcart;
      SaveToCart();
  }
  export function udatefromcart(productid){
    const newcart=[]
    cart.forEach((cartItem)=>
    {
      if(cartItem.productId==productid){
        

      }
    })
    cart=newcart;
    SaveToCart();
  }