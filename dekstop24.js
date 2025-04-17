// Sample data for the message table
const messageData = [
    {
        name: 'Aisyah',
        phone: '083444444444',
        email: 'aisyah@gmail',
        message: 'Lorem ipsum',
        date: '18-03-2021'
    },
    {
        name: 'Keysha',
        phone: '0866666666',
        email: 'key@gmail',
        message: 'Lorem ipsum',
        date: '23-03-2022'
    }
];

// Function to populate the message table
function populateMessageTable() {
    const tableBody = document.getElementById('messageTableBody');
    tableBody.innerHTML = '';

    messageData.forEach(customer => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${customer.name}</td>
            <td>${customer.phone}</td>
            <td>${customer.email}</td>
            <td>${customer.message}</td>
            <td>${customer.date}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Function to handle sorting
function handleSort() {
    const sortDropdown = document.querySelector('.sort-dropdown');
    sortDropdown.addEventListener('change', function() {
        const sortOption = this.value;
        
        if (sortOption === 'Newest') {
            messageData.sort((a, b) => {
                const dateA = new Date(a.date.split('-').reverse().join('-'));
                const dateB = new Date(b.date.split('-').reverse().join('-'));
                return dateB - dateA;
            });
        } else if (sortOption === 'Oldest') {
            messageData.sort((a, b) => {
                const dateA = new Date(a.date.split('-').reverse().join('-'));
                const dateB = new Date(b.date.split('-').reverse().join('-'));
                return dateA - dateB;
            });
        } else if (sortOption === 'Name (A-Z)') {
            messageData.sort((a, b) => a.name.localeCompare(b.name));
        }
        
        populateMessageTable();
    });
}

// Function to handle search
function handleSearch() {
    const searchInput = document.querySelector('.message-search input');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        const filteredData = messageData.filter(customer => {
            return customer.name.toLowerCase().includes(searchTerm) ||
                   customer.email.toLowerCase().includes(searchTerm) ||
                   customer.phone.includes(searchTerm) ||
                   customer.message.toLowerCase().includes(searchTerm);
        });
        
        const tableBody = document.getElementById('messageTableBody');
        tableBody.innerHTML = '';
        
        filteredData.forEach(customer => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${customer.name}</td>
                <td>${customer.phone}</td>
                <td>${customer.email}</td>
                <td>${customer.message}</td>
                <td>${customer.date}</td>
            `;
            
            tableBody.appendChild(row);
        });
    });
}

// Initialize the dashboard
function initDashboard() {
    populateMessageTable();
    handleSort();
    handleSearch();
    
    // Add active class to menu items on click
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initDashboard);