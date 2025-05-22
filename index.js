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

document.addEventListener('DOMContentLoaded', () => {
    // Get all necessary elements
    const carousel = document.querySelector('.product-carousel');
    const productCards = document.querySelectorAll('.product-card');
    const leftButton = document.getElementById('nele');
    const rightButton = document.getElementById('neri');
    
    // Calculate values for scrolling
    const cardWidth = productCards[0].offsetWidth;
    let currentPosition = 0;
    const totalCards = productCards.length;
    const visibleCards = Math.floor(carousel.clientWidth / cardWidth);
    const maxPosition = totalCards - visibleCards;
    
    // Initialize carousel
    updateCarouselPosition();
    
    // Add event listeners to buttons
    leftButton.addEventListener('click', scrollLeft);
    rightButton.addEventListener('click', scrollRight);
    
    // Function to scroll left
    function scrollLeft() {
        if (currentPosition > 0) {
            currentPosition--;
            updateCarouselPosition();
        }
    }
    
    // Function to scroll right
    function scrollRight() {
        if (currentPosition < maxPosition) {
            currentPosition++;
            updateCarouselPosition();
        }
    }
    
    // Update the carousel's position
    function updateCarouselPosition() {
        const offset = -currentPosition * cardWidth;
        
        // Apply transform to move the carousel
        for (let i = 0; i < productCards.length; i++) {
            productCards[i].style.transform = `translateX(${offset}px)`;
        }
        
        // Update button states
        updateButtonStates();
    }
    
    // Update button states (disabled/enabled)
    function updateButtonStates() {
        leftButton.disabled = currentPosition === 0;
        rightButton.disabled = currentPosition >= maxPosition;
        
        // Optional: add visual indication for disabled buttons
        leftButton.style.opacity = currentPosition === 0 ? '0.5' : '1';
        rightButton.style.opacity = currentPosition >= maxPosition ? '0.5' : '1';
    }
    
    // Add some CSS dynamically for smooth transitions
    const style = document.createElement('style');
    style.textContent = `
        .product-carousel {
            position: relative;
            overflow: hidden;
            width: 100%;
        }
        
        .product-card {
            transition: transform 0.3s ease;
            flex: 0 0 auto;
        }
        
        #nele, #neri {
            cursor: pointer;
        }
        
        #nele:disabled {
        cursor: not-allowed;
        }
        
        #neri:disabled {
            cursor: not-allowed;
        }
    `;
    document.head.appendChild(style);
    
    // Handle window resize
    window.addEventListener('resize', () => {
        // Recalculate visible cards on resize
        const newVisibleCards = Math.floor(carousel.clientWidth / cardWidth);
        if (newVisibleCards !== visibleCards) {
            // Reset position if needed
            if (currentPosition > totalCards - newVisibleCards) {
                currentPosition = Math.max(0, totalCards - newVisibleCards);
                updateCarouselPosition();
            }
        }
    });
});

