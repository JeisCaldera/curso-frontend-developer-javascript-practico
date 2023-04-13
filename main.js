const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartMenu= document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail")
const isProductDetailCart = productDetail.classList.contains('inactive');


menuEmail.addEventListener('click',toggleDesktopMenu);
burgerMenu.addEventListener('click',toggleMobileMenu);
shoppingCartMenu.addEventListener('click', toggleProductDetailCart);

function toggleDesktopMenu() {
    if (!isProductDetailCart){
        productDetail.classList.add('inactive');
     }
    desktopMenu.classList.toggle('inactive');
}
 
function toggleMobileMenu(){
    
     
     if (!isProductDetailCart){
        productDetail.classList.add('inactive');
     }
     mobileMenu.classList.toggle('inactive');
}

function toggleProductDetailCart(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive')
    
    if(!isDesktopMenuClose){
        desktopMenu.classList.add('inactive')
    }

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    productDetail.classList.toggle('inactive');
}