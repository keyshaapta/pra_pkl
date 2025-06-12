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

        // Product navigation mapping
const productMapping = {
    // Croissant products (positions 1-6)
    'oreo choco croissant': 1,
    'blueberry croissant': 2,
    'black orange cream croissant': 3,
    'bowtie strawberry croissant': 4,
    'bowtie chocolate croissant': 5,
    'bowtie blueberry croissant': 6,
    
    // Pie products (positions 7-12)
    'Pie pistachio': 7,
    'Pie Strawberry Almond': 8,
    'Pie Raspberry Cream': 9,
    'Pie Spinach': 10,
    'Pie Cornet Beef': 11,
    'Pie Egg': 12,
    
    // Choux products (positions 13-18)
    'Choux Matcha With Strawberry': 13,
    'Choux Strawberry': 14,
    'Choux Raspberry': 15,
    'Choux Chocolate': 16,
    'Choux Peach Cream': 17,
    'Choux Blueberry': 18,
    
    // Danish Pastry products (positions 19-24)
    'Danish Pastry Blueberry': 19,
    'Danish Pastry Orange': 20,
    'Danish Pastry Cherry': 21,
    'Danish Pastry Ham and Cheese': 22,
    'Danish Pastry Mushroom': 23,
    'Danish Pastry grilled cheese': 24,
    
    // Mille Feuille products (positions 25-27)
    'Mille Feuille Peach': 25,
    'Mille Feuille Raspberry': 26,
    'Mille Feuille Strawberry Cream': 27
};

// Box class mapping for different product sections
const boxMapping = {
    1: 'box-top', 2: 'box-top', 3: 'box-top',
    4: 'box-middle', 5: 'box-middle', 6: 'box-middle',
    7: 'box-bottom', 8: 'box-bottom', 9: 'box-bottom',
    10: 'box-empt', 11: 'box-empt', 12: 'box-empt',
    13: 'box-lim', 14: 'box-lim', 15: 'box-lim',
    16: 'box-enm', 17: 'box-enm', 18: 'box-enm',
    19: 'box-tuju', 20: 'box-tuju', 21: 'box-tuju',
    22: 'box-lpan', 23: 'box-lpan', 24: 'box-lpan',
    25: 'box-smbln', 26: 'box-smbln', 27: 'box-smbln'
};

// Function to scroll to specific product
function scrollToProduct(productPosition) {
    const boxClass = boxMapping[productPosition];
    const targetBox = document.querySelector(`.${boxClass}`);
    
    if (targetBox) {
        // Calculate which product within the box (1st, 2nd, or 3rd)
        const productIndex = ((productPosition - 1) % 3);
        const productCards = targetBox.querySelectorAll('.product-card');
        
        if (productCards[productIndex]) {
            // Scroll to the specific product card
            productCards[productIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest'
            });
            
            // Add highlight effect
            productCards[productIndex].classList.add('highlight');
            setTimeout(() => {
                productCards[productIndex].classList.remove('highlight');
            }, 2000);
        }
    }
}

// Function to handle submenu item clicks
function handleSubmenuClick(event) {
    const clickedItem = event.target;
    const itemText = clickedItem.textContent.trim();
    
    // Find the product position based on the clicked item
    const productPosition = productMapping[itemText];
    
    if (productPosition) {
        // Scroll to the product
        scrollToProduct(productPosition);
        
        // Close the submenu after clicking
        const parentMenu = clickedItem.closest('.menu-item').nextElementSibling;
        if (parentMenu) {
            parentMenu.style.display = 'none';
        }
    }
}

// Initialize the navigation system
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to all submenu items
    const submenuItems = document.querySelectorAll('.submenu-item');
    submenuItems.forEach(item => {
        item.addEventListener('click', handleSubmenuClick);
        item.style.cursor = 'pointer'; // Make it clear items are clickable
    });
    
    // Keep existing menu toggle functionality
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const submenu = this.nextElementSibling;
            const icon = this.querySelector('i i');
            
            if (submenu && submenu.classList.contains('submenu')) {
                if (submenu.style.display === 'block') {
                    submenu.style.display = 'none';
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    // Close all other submenus
                    document.querySelectorAll('.submenu').forEach(sub => {
                        sub.style.display = 'none';
                    });
                    document.querySelectorAll('.menu-item i i').forEach(ic => {
                        ic.style.transform = 'rotate(0deg)';
                    });
                    
                    // Open clicked submenu
                    submenu.style.display = 'block';
                    icon.style.transform = 'rotate(180deg)';
                }
            }
        });
    });
});

// Add CSS for highlight effect
const style = document.createElement('style');
style.textContent = `
    .product-card.highlight {
        transform: scale(1.05);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        border: 2px solidrgb(248, 146, 202);
        transition: all 0.3s ease;
    }
    
    .submenu-item:hover {
        background-color: #f0f0f0;
        padding: 5px;
        border-radius: 3px;
        transition: background-color 0.2s ease;
    }
`;
document.head.appendChild(style);