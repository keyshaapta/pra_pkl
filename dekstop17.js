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

document.addEventListener('DOMContentLoaded', function() {
    // Get all heart buttons
    const heartButtons = document.querySelectorAll('.heart-btn');
    
    // Add click event listener to each heart button
    heartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle active class
            this.classList.toggle('active');
            
            // Change icon based on active state
            const icon = this.querySelector('i');
            if (this.classList.contains('active')) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
            } else {
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
            }
        });
    });
});

// Simple animation when clicking the view order button
document.querySelector('.view-order-btn').addEventListener('click', function() {
    const orderDetails = document.querySelector('.order-details');
    
    // Toggle visibility with smooth animation
    if (orderDetails.style.display === 'none') {
        orderDetails.style.display = 'block';
        setTimeout(() => {
            orderDetails.style.opacity = '1';
        }, 50);
    } else {
        orderDetails.style.opacity = '0';
        setTimeout(() => {
            orderDetails.style.display = 'none';
        }, 500);
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // You could add more initialization code here if needed
    console.log('Order confirmation page loaded');
});