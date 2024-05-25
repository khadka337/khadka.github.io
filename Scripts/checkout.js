import {addToCart, cart, removefromCart, udatefromcart} from '../data/cart.js';
import { products } from '../data/products.js';

let cartSummaryHtml='';
cart.forEach((cartItem)=>{
    const productId= cartItem.productId;
    let matchingProducts;
    products.forEach((product)=>{
        if(product.id===productId){
            matchingProducts=product;
        }
        
    });
        cartSummaryHtml +=`
            <div class="cart-item-container 
            js-cart-container-${matchingProducts.id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProducts.image}">

              <div class="cart-item-details">
                <div class="product-name">
                ${matchingProducts.name}
                </div>
                <div class="product-price">
                ${(matchingProducts.priceCents/100).toFixed(2)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.Quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary js-update-link"
                   data-product-id="${matchingProducts.id}">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link"
                  data-product-id="${matchingProducts.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${matchingProducts.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProducts.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProducts.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
`;
});
  document.querySelector('.js-order-summary').innerHTML=cartSummaryHtml;
   document.querySelectorAll('.js-delete-link')
    .forEach((link)=>{
    link.addEventListener('click',()=>{
     const productId= link.dataset.productId;
    removefromCart(productId); 
    const container = document.querySelector(`.js-cart-container-${productId}` );
    container.remove();
});
});

document.querySelectorAll('.js-update-link')
  .forEach((link)=>{
  link.addEventListener('click',()=>{
  const productId= link.dataset.productId;
  addToCart(productId);
  const container = document.querySelector(`.js-cart-container-${productId}` ); 
});
});

