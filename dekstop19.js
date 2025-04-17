document.addEventListener('DOMContentLoaded', function() {
    // Menu Item Click Functionality
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove selected class from all menu items
            menuItems.forEach(mi => mi.classList.remove('selected'));
            
            // Add selected class to clicked item
            this.classList.add('selected');
        });
    });

    // Dropdown functionality
    const dropdown = document.querySelector('.dropdown');
    
    dropdown.addEventListener('click', function() {
        // Create and display dropdown menu
        const dropdownMenu = document.createElement('div');
        dropdownMenu.className = 'dropdown-menu';
        
        const options = ['Newest', 'Oldest', 'A-Z', 'Z-A'];
        
        options.forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.className = 'dropdown-item';
            optionElement.textContent = option;
            
            optionElement.addEventListener('click', function(e) {
                e.stopPropagation();
                dropdown.querySelector('span').textContent = option;
                document.body.removeChild(dropdownMenu);
                
                // Sort functionality would go here
                sortTable(option);
            });
            
            dropdownMenu.appendChild(optionElement);
        });
        
        // Position the dropdown menu
        const rect = dropdown.getBoundingClientRect();
        dropdownMenu.style.position = 'absolute';
        dropdownMenu.style.top = rect.bottom + 'px';
        dropdownMenu.style.left = rect.left + 'px';
        dropdownMenu.style.minWidth = rect.width + 'px';
        dropdownMenu.style.backgroundColor = 'white';
        dropdownMenu.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        dropdownMenu.style.borderRadius = '5px';
        dropdownMenu.style.zIndex = '1000';
        
        document.body.appendChild(dropdownMenu);
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function closeDropdown(e) {
            if (!dropdown.contains(e.target) && !dropdownMenu.contains(e.target)) {
                if (document.body.contains(dropdownMenu)) {
                    document.body.removeChild(dropdownMenu);
                }
                document.removeEventListener('click', closeDropdown);
            }
        });
    });

    // Search functionality
    const searchInputs = document.querySelectorAll('.search-input');
    
    searchInputs.forEach(input => {
        input.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const tableRows = document.querySelectorAll('tbody tr');
            
            tableRows.forEach(row => {
                const text = row.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    });

    // Function to sort table
    function sortTable(sortBy) {
        const table = document.querySelector('table');
        const rows = Array.from(table.querySelectorAll('tbody tr'));
        const tbody = table.querySelector('tbody');
        
        rows.sort((a, b) => {
            let aValue, bValue;
            
            switch(sortBy) {
                case 'Newest':
                    // Sort by date (latest first)
                    aValue = new Date(convertDate(a.cells[3].textContent));
                    bValue = new Date(convertDate(b.cells[3].textContent));
                    return bValue - aValue;
                case 'Oldest':
                    // Sort by date (oldest first)
                    aValue = new Date(convertDate(a.cells[3].textContent));
                    bValue = new Date(convertDate(b.cells[3].textContent));
                    return aValue - bValue;
                case 'A-Z':
                    // Sort by name alphabetically
                    aValue = a.cells[0].textContent.toLowerCase();
                    bValue = b.cells[0].textContent.toLowerCase();
                    return aValue.localeCompare(bValue);
                case 'Z-A':
                    // Sort by name reverse alphabetically
                    aValue = a.cells[0].textContent.toLowerCase();
                    bValue = b.cells[0].textContent.toLowerCase();
                    return bValue.localeCompare(aValue);
                default:
                    return 0;
            }
        });
        
        // Clear and refill tbody with sorted rows
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }
        
        rows.forEach(row => tbody.appendChild(row));
    }

    // Helper function to convert date format for sorting
    function convertDate(dateStr) {
        // Convert from DD-MM-YYYY to YYYY-MM-DD for proper date comparison
        const parts = dateStr.split('-');
        return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }

    // Initial sort by newest
    sortTable('Newest');
});