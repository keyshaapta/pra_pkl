let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-icon').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#shopping-cart-icon').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

/*const searchIcon = document.querySelector(".search-icon");
const searchForm = document.querySelector(".search-form");

searchIcon.addEventListener("click", () => {
    searchForm.classList.add("active");
    cartItemsContainer.classList.remove("active");
});

const shoppingCartIcon = document.querySelector(".shopping-cart-icon");
const cartItemsContainer = document.querySelector(".cart-items-container");

shoppingCartIcon.addEventListener("click", () => {
    cartItemsContainer.classList.add("active");
    searchForm.classList.remove("active");
});*/

