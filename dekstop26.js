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

// JavaScript functionality for interaction elements
document.addEventListener('DOMContentLoaded', function() {
    // Handle radio button selection
    const radioBtn = document.getElementById('regular');
    radioBtn.addEventListener('change', function() {
        console.log('Shipping method selected: Regular');
    });

    // Handle button clicks
    const addAddressBtn = document.querySelector('.address-button:first-child');
    addAddressBtn.addEventListener('click', function() {
        console.log('Add address button clicked');
    });

    const changeAddressBtn = document.querySelector('.address-button:last-child');
    changeAddressBtn.addEventListener('click', function() {
        console.log('Change address button clicked');
    });

    const changeMethodLink = document.querySelector('.change-method');
    changeMethodLink.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Change method link clicked');
    });
});