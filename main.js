const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartMenu= document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");

const cartContainer = document.querySelector(".cards-container");


menuEmail.addEventListener('click',toggleDesktopMenu);
burgerMenu.addEventListener('click',toggleMobileMenu);
shoppingCartMenu.addEventListener('click', toggleProductDetailCart);

function toggleDesktopMenu() {
    const isProductDetailCart = shoppingCartContainer.classList.contains('inactive');
    if (!isProductDetailCart){
        shoppingCartContainer.classList.add('inactive');
     }
    desktopMenu.classList.toggle('inactive');
}
 
function toggleMobileMenu(){
    const isProductDetailCart = shoppingCartContainer.classList.contains('inactive');
     
     if (!isProductDetailCart){
        shoppingCartContainer.classList.add('inactive');
     }
     mobileMenu.classList.toggle('inactive');
}

function toggleProductDetailCart(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    
    if(!isDesktopMenuClose){
        desktopMenu.classList.add('inactive');
    }

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}


      const productList= [];
      productList.push({
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      });
      productList.push({
        name: 'Camera',
        price: 130,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      });
      productList.push({
        name: 'Computer',
        price: 620,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      });

      /* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */

     for(product of productList){
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');


      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
      

      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');

      

      const productInfoDiv = document.createElement('div');
      const productPrice = document.createElement('p'); 
      productPrice.innerText= '$' + product.price;
      const productName = document.createElement('p');
      productName.innerText= product.name;

      
    
      const productFigure = document.createElement('figure');
      const productImgCart = document.createElement('img');
      productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

      productFigure.appendChild(productImgCart);
      
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
      
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productFigure)

      productCard.appendChild(productImg);
      productCard.appendChild(productInfo)

     cartContainer.appendChild(productCard);

      }

      