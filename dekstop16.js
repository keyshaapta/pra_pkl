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

document.addEventListener('DOMContentLoaded', function() {
    // Handle payment tab selection
    const paymentTabs = document.querySelectorAll('.payment-tab');
    paymentTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            paymentTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
        });
    });

    // Handle add card button
    const addCardBtn = document.querySelector('.add-card-btn');
    addCardBtn.addEventListener('click', function() {
        alert('Add new payment card functionality would go here');
    });

    // Handle checkout button
    const checkoutBtn = document.querySelector('.checkout-btn');
    checkoutBtn.addEventListener('click', function() {
        alert('Order placed successfully!');
    });
});



// Payment option buttons functionality
const optionButtons = document.querySelectorAll('.option-btn');
        
optionButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        optionButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        button.classList.add('active');
    });
});

// Radio button functionality
const radioButton = document.getElementById('radio-button');

radioButton.addEventListener('click', () => {
    radioButton.classList.toggle('selected');
});

// Make the whole payment method row clickable for the radio button
const paymentMethod = document.querySelector('.payment-method');

paymentMethod.addEventListener('click', () => {
    radioButton.classList.toggle('selected');
});

// Add card button functionality (placeholder)
const addCardBtn = document.querySelector('.add-card-btn');

addCardBtn.addEventListener('click', () => {
    alert('Tambah kartu baru');
});

