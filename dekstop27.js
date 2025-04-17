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
    // Add click event to all payment options
    const paymentOptions = document.querySelectorAll('.payment-option');
    paymentOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Find the radio button inside this option
            const radio = this.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
            }
            
            // Highlight the selected option
            paymentOptions.forEach(opt => {
                opt.style.border = 'none';
            });
            this.style.border = '2px solid #968968';
        });
    });

    // Process payment button handler
    const paymentButton = document.getElementById('processPayment');
    paymentButton.addEventListener('click', function() {
        // Find which payment method is selected
        const selectedMethod = document.querySelector('input[name="payment-method"]:checked');
        
        if (!selectedMethod) {
            alert('Silakan pilih metode pembayaran terlebih dahulu.');
            return;
        }
        
        alert('Memproses pembayaran dengan metode: ' + selectedMethod.value);
        // Here you would typically send the data to your backend
    });

    // Make the page responsive
    function adjustLayout() {
        const container = document.querySelector('.container');
        if (window.innerWidth < 768) {
            container.style.flexDirection = 'column';
        } else {
            container.style.flexDirection = 'row';
        }
    }

    // Initial check and listen for window resize
    adjustLayout();
    window.addEventListener('resize', adjustLayout);
});