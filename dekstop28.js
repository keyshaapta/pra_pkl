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
    // Store the original left card dimensions when the page loads
    const leftCard = document.querySelector('.cardon');
    const rightCard = document.querySelector('.cardtw');
    
    // Set a fixed height for the left card
    const fixedLeftCardHeight = leftCard.offsetHeight;
    leftCard.style.minHeight = fixedLeftCardHeight + 'px';
    
    // Handle click events on both summary elements (arrows)
    const summaryElements = document.querySelectorAll('summary');
    summaryElements.forEach(function(summary) {
        summary.addEventListener('click', function(e) {
            // This prevents the height of the left card from changing
            setTimeout(() => {
                leftCard.style.minHeight = fixedLeftCardHeight + 'px';
                leftCard.style.height = fixedLeftCardHeight + 'px';
            }, 10);
        });
    });
    
    // Copy button functionality
    const copyBtn = document.querySelector('.copy-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            const virtualNumber = document.querySelector('.detail-value').textContent;
            navigator.clipboard.writeText(virtualNumber)
                .then(() => {
                    // Change button text temporarily
                    const originalText = copyBtn.textContent;
                    copyBtn.textContent = 'Tersalin!';
                    setTimeout(() => {
                        copyBtn.textContent = originalText;
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy text: ', err);
                });
        });
    }
    
    // Check status button functionality
    const checkStatusBtn = document.querySelector('.check-status-btn');
    if (checkStatusBtn) {
        checkStatusBtn.addEventListener('click', function() {
            alert('Memeriksa status pesanan...');
        });
    }
    
    // Action buttons functionality
    const actionBtns = document.querySelectorAll('.action-btn');
    actionBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            if (btn.textContent === 'Lihat Pesanan') {
                alert('Menampilkan detail pesanan...');
            } else if (btn.textContent === 'Beli lagi') {
                alert('Mengarahkan ke halaman belanja...');
            }
        });
    });
});