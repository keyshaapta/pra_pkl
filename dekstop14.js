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
            // Select all checkbox functionality
            const selectAllCheckbox = document.getElementById('select-all-checkbox');
            const itemCheckboxes = document.querySelectorAll('.item-checkbox');
            
            selectAllCheckbox.addEventListener('change', function() {
                const isChecked = this.checked;
                
                itemCheckboxes.forEach(checkbox => {
                    checkbox.checked = isChecked;
                });
                
                updateTotalPrice();
            });
            
            itemCheckboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    // Check if all item checkboxes are checked
                    const allChecked = Array.from(itemCheckboxes).every(cb => cb.checked);
                    selectAllCheckbox.checked = allChecked;
                    
                    updateTotalPrice();
                });
            });
            
            // Quantity buttons functionality
            const decreaseButtons = document.querySelectorAll('.decrease-btn');
            const increaseButtons = document.querySelectorAll('.increase-btn');
            const quantityInputs = document.querySelectorAll('.quantity-input');
            
            decreaseButtons.forEach((button, index) => {
                button.addEventListener('click', function() {
                    const currentValue = parseInt(quantityInputs[index].value);
                    if (currentValue > 1) {
                        quantityInputs[index].value = currentValue - 1;
                        updateTotalPrice();
                    }
                });
            });
            
            increaseButtons.forEach((button, index) => {
                button.addEventListener('click', function() {
                    const currentValue = parseInt(quantityInputs[index].value);
                    quantityInputs[index].value = currentValue + 1;
                    updateTotalPrice();
                });
            });
            
            quantityInputs.forEach(input => {
                input.addEventListener('change', function() {
                    // Ensure value is at least 1
                    if (parseInt(this.value) < 1 || isNaN(parseInt(this.value))) {
                        this.value = 1;
                    }
                    
                    updateTotalPrice();
                });
            });
            
            // Delete button functionality
            const deleteButton = document.querySelector('.hapus-btn');
            
            deleteButton.addEventListener('click', function() {
                const checkedItems = document.querySelectorAll('.item-checkbox:checked');
                
                checkedItems.forEach(checkbox => {
                    const cartItem = checkbox.closest('.cart-item');
                    cartItem.remove();
                });
                
                // If no items left, update the UI accordingly
                if (document.querySelectorAll('.cart-item').length === 0) {
                    const cartContainer = document.querySelector('.cart-container');
                    cartContainer.innerHTML = '<div style="padding: 20px; text-align: center;">Keranjang Anda kosong</div>';
                }
                
                updateTotalPrice();
            });
            
            // Function to update total price
            function updateTotalPrice() {
                const checkedItems = document.querySelectorAll('.item-checkbox:checked');
                let total = 0;
                
                checkedItems.forEach(checkbox => {
                    const cartItem = checkbox.closest('.cart-item');
                    const priceText = cartItem.querySelector('.item-price').textContent;
                    const quantity = parseInt(cartItem.querySelector('.quantity-input').value);
                    
                    // Extract price value (remove "Rp " and convert to number)
                    const price = parseInt(priceText.replace(/\D/g, ''));
                    total += price * quantity;
                });
                
                // Format total price
                const formattedTotal = new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2
                }).format(total).replace('IDR', 'Rp');
                
                // Update sub total text
                document.querySelector('.summary-row span:last-child').textContent = formattedTotal;
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
            // Select All functionality
            const selectAllCheckbox = document.getElementById('select-all-checkbox');
            const itemCheckboxes = document.querySelectorAll('.item-checkbox');
            
            selectAllCheckbox.addEventListener('change', function() {
                itemCheckboxes.forEach(checkbox => {
                    checkbox.checked = selectAllCheckbox.checked;
                });
            });
            
            // Individual checkbox change
            itemCheckboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    const allChecked = Array.from(itemCheckboxes).every(cb => cb.checked);
                    selectAllCheckbox.checked = allChecked;
                });
            });
            
            // Quantity controls
            const decreaseButtons = document.querySelectorAll('.decrease-btn');
            const increaseButtons = document.querySelectorAll('.increase-btn');
            
            decreaseButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const input = this.parentElement.querySelector('.quantity-input');
                    let value = parseInt(input.value);
                    if (value > 1) {
                        input.value = value - 1;
                    }
                });
            });
            
            increaseButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const input = this.parentElement.querySelector('.quantity-input');
                    let value = parseInt(input.value);
                    input.value = value + 1;
                });
            });
            
            // Delete button (individual item)
            const deleteButtons = document.querySelectorAll('.delete-btn');
            deleteButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const item = this.closest('.item');
                    item.remove();
                    updateSelectAllState();
                });
            });
            
            // Delete selected items
            const hapusBtn = document.querySelector('.hapus-btn');
            hapusBtn.addEventListener('click', function() {
                const checkedItems = document.querySelectorAll('.item-checkbox:checked');
                checkedItems.forEach(checkbox => {
                    const item = checkbox.closest('.item');
                    item.remove();
                });
                updateSelectAllState();
            });
            
            // Copy button functionality
            const copyButtons = document.querySelectorAll('.copy-btn');
            copyButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const item = this.closest('.item');
                    const clone = item.cloneNode(true);
                    
                    // Reset event listeners for the clone
                    attachEventListeners(clone);
                    
                    item.parentNode.insertBefore(clone, item.nextSibling);
                });
            });
            
            function attachEventListeners(item) {
                // Attach quantity control listeners
                const decreaseBtn = item.querySelector('.decrease-btn');
                const increaseBtn = item.querySelector('.increase-btn');
                const deleteBtn = item.querySelector('.delete-btn');
                const copyBtn = item.querySelector('.copy-btn');
                const checkbox = item.querySelector('.item-checkbox');
                
                decreaseBtn.addEventListener('click', function() {
                    const input = this.parentElement.querySelector('.quantity-input');
                    let value = parseInt(input.value);
                    if (value > 1) {
                        input.value = value - 1;
                    }
                });
                
                increaseBtn.addEventListener('click', function() {
                    const input = this.parentElement.querySelector('.quantity-input');
                    let value = parseInt(input.value);
                    input.value = value + 1;
                });
                
                deleteBtn.addEventListener('click', function() {
                    item.remove();
                    updateSelectAllState();
                });
                
                copyBtn.addEventListener('click', function() {
                    const clone = item.cloneNode(true);
                    attachEventListeners(clone);
                    item.parentNode.insertBefore(clone, item.nextSibling);
                });
                
                checkbox.addEventListener('change', function() {
                    updateSelectAllState();
                });
            }
            
            function updateSelectAllState() {
                const itemCheckboxes = document.querySelectorAll('.item-checkbox');
                if (itemCheckboxes.length === 0) {
                    selectAllCheckbox.checked = false;
                    return;
                }
                
                const allChecked = Array.from(itemCheckboxes).every(cb => cb.checked);
                selectAllCheckbox.checked = allChecked;
            }
        });