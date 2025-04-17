document.addEventListener('DOMContentLoaded', function() {
    // Sidebar menu item active state
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Remove active class from all items
            menuItems.forEach(menuItem => {
                menuItem.classList.remove('active');
            });
            
            // Add active class to clicked item
            this.classList.add('active');
        });
    });

    // Global search functionality
    const globalSearchInput = document.querySelector('.search-container input');
    globalSearchInput.addEventListener('keyup', function(e) {
        console.log('Global search for:', this.value);
    });

    // Customer table search functionality
    const customerSearchInput = document.querySelector('.customers-search input');
    customerSearchInput.addEventListener('keyup', function(e) {
        const searchValue = this.value.toLowerCase();
        const tableRows = document.querySelectorAll('.customers-table tbody tr');
        
        tableRows.forEach(row => {
            const text = row.textContent.toLowerCase();
            if(text.includes(searchValue)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });

    // Sort dropdown functionality
    const sortSelect = document.getElementById('sort-select');
    sortSelect.addEventListener('change', function() {
        const sortValue = this.value;
        const tableBody = document.querySelector('.customers-table tbody');
        const rows = Array.from(tableBody.querySelectorAll('tr'));
        
        rows.sort((a, b) => {
            let aValue, bValue;
            
            switch(sortValue) {
                case 'newest':
                    aValue = new Date(a.cells[3].textContent.split('-').reverse().join('-'));
                    bValue = new Date(b.cells[3].textContent.split('-').reverse().join('-'));
                    return bValue - aValue;
                case 'oldest':
                    aValue = new Date(a.cells[3].textContent.split('-').reverse().join('-'));
                    bValue = new Date(b.cells[3].textContent.split('-').reverse().join('-'));
                    return aValue - bValue;
                case 'name-asc':
                    aValue = a.cells[0].textContent;
                    bValue = b.cells[0].textContent;
                    return aValue.localeCompare(bValue);
                case 'name-desc':
                    aValue = a.cells[0].textContent;
                    bValue = b.cells[0].textContent;
                    return bValue.localeCompare(aValue);
                default:
                    return 0;
            }
        });
        
        // Clear the table body
        while(tableBody.firstChild) {
            tableBody.removeChild(tableBody.firstChild);
        }
        
        // Append sorted rows
        rows.forEach(row => {
            tableBody.appendChild(row);
        });
    });
});

// JavaScript (if needed)
document.addEventListener('DOMContentLoaded', function() {
    const addProductBtn = document.getElementById('addProductBtn');
    
    addProductBtn.addEventListener('click', function() {
      // Add your functionality here
      alert('Tambah Produk button clicked!');
    });
  });