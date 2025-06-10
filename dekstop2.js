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

document.querySelectorAll('.add-to-chart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Produk ditambahkan ke keranjang!');
    });
});

 // Add click event listeners to all menu items
 document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        // Toggle active class on the clicked item
        this.classList.toggle('active');
    });
});

// Preload hover images for better performance
        document.addEventListener('DOMContentLoaded', function() {
            const hoverImages = document.querySelectorAll('.hover-image');
            
            hoverImages.forEach(img => {
                const preloadImg = new Image();
                preloadImg.src = img.src;
            });
        });

        // Optional: Add loading state handling
        document.querySelectorAll('.product-image').forEach(img => {
            img.addEventListener('load', function() {
                this.classList.remove('image-loading');
            });
            
            img.addEventListener('error', function() {
                this.classList.remove('image-loading');
                console.log('Image failed to load:', this.src);
            });
        });