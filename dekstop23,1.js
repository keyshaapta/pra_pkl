// Sample data for the message table
const messageData = [
    {
        date: '11-03-2025',
        name: '083444444444',
        product: 'Croissant(3)',
        address: 'Jl. Adakala, Senayan',
        total: 'Rp 18.000',
        status: 'Disiapkan'
    },
    {
        date: '09-03-2025',
        name: '08666666666',
        product: 'Danish Pastry(2)',
        address: 'Jl. Adakala, Senayan',
        total: 'Rp 18.000',
        status: 'Diterima'
    }
];

// TAMBAHAN: Variable to store current profile photo
let currentProfilePhoto = null;

// Function to populate the message table
function populateMessageTable() {
    const tableBody = document.querySelector('.customers-table tbody'); // PERBAIKAN: sesuaikan dengan HTML
    tableBody.innerHTML = '';

    messageData.forEach(customer => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${customer.date}</td>
            <td>${customer.name}</td>
            <td>${customer.product}</td>
            <td>${customer.address}</td>
            <td>${customer.total}</td>
            <td>${customer.status}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Function to handle sorting
function handleSort() {
    const sortDropdown = document.getElementById('sort-select'); // PERBAIKAN: gunakan getElementById
    if (sortDropdown) {
        sortDropdown.addEventListener('change', function() {
            const sortOption = this.value;
            
            if (sortOption === 'newest') { // PERBAIKAN: gunakan value yang sama dengan HTML
                messageData.sort((a, b) => {
                    const dateA = new Date(a.date.split('-').reverse().join('-'));
                    const dateB = new Date(b.date.split('-').reverse().join('-'));
                    return dateB - dateA;
                });
            } else if (sortOption === 'oldest') { // PERBAIKAN: gunakan value yang sama dengan HTML
                messageData.sort((a, b) => {
                    const dateA = new Date(a.date.split('-').reverse().join('-'));
                    const dateB = new Date(b.date.split('-').reverse().join('-'));
                    return dateA - dateB;
                });
            } else if (sortOption === 'name-asc') { // PERBAIKAN: gunakan value yang sama dengan HTML
                messageData.sort((a, b) => a.name.localeCompare(b.name));
            } else if (sortOption === 'name-desc') { // PERBAIKAN: gunakan value yang sama dengan HTML
                messageData.sort((a, b) => b.name.localeCompare(a.name));
            }
            
            populateMessageTable();
        });
    }
}

// Function to handle search
function handleSearch() {
    const searchInput = document.querySelector('.customers-search input'); // PERBAIKAN: sesuaikan dengan HTML
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            const filteredData = messageData.filter(customer => {
                return customer.date.toLowerCase().includes(searchTerm) ||
                       customer.name.toLowerCase().includes(searchTerm) ||
                       customer.product.toLowerCase().includes(searchTerm) ||
                       customer.address.toLowerCase().includes(searchTerm) ||
                       customer.total.toLowerCase().includes(searchTerm) ||
                       customer.status.toLowerCase().includes(searchTerm) ;
            });
            
            const tableBody = document.querySelector('.customers-table tbody'); // PERBAIKAN: sesuaikan dengan HTML
            tableBody.innerHTML = '';
            
            filteredData.forEach(customer => {
                const row = document.createElement('tr');
                
                row.innerHTML = `
                    <td>${customer.date}</td>
                    <td>${customer.name}</td>
                    <td>${customer.product}</td>
                    <td>${customer.address}</td>
                    <td>${customer.total}</td>
                    <td>${customer.status}</td>
                `;
                
                tableBody.appendChild(row);
            });
        });
    }
}

// TAMBAHAN: Load saved profile data from memory
function loadSavedProfile() {
    // Simulate loading saved data (in real app, this would come from server/database)
    const savedData = {
        name: 'Aisyah',
        email: 'aisyah@admin.com',
        phone: '081234567890',
        role: 'Admin',
        photo: null // This would be loaded from your backend
    };
    
    // Update form fields
    document.getElementById('fullName').value = savedData.name;
    document.getElementById('email').value = savedData.email;
    document.getElementById('phone').value = savedData.phone;
    document.getElementById('role').value = savedData.role;
    
    // Update profile photo if exists
    if (savedData.photo) {
        currentProfilePhoto = savedData.photo;
        updateProfilePhoto(savedData.photo);
    }
}

// TAMBAHAN: Profile dropdown functions
function editProfile() {
    document.getElementById('profile-dropdown').classList.remove('show');
    document.getElementById('editProfileModal').classList.add('show');
    
    // Load current profile photo into modal
    const removeBtn = document.getElementById('removePhotoBtn');
    if (currentProfilePhoto) {
        const profileImage = document.getElementById('profileImage');
        const profileIcon = document.querySelector('#modalProfilePhoto i');
        
        profileImage.src = currentProfilePhoto;
        profileImage.style.display = 'block';
        profileIcon.style.display = 'none';
        removeBtn.style.display = 'flex';
    } else {
        removeBtn.style.display = 'none';
    }
}

// TAMBAHAN: Function to view profile photo in zoom modal
function viewProfilePhoto() {
    if (currentProfilePhoto) {
        const viewPhotoModal = document.getElementById('viewPhotoModal');
        const viewPhotoImg = document.getElementById('viewPhotoImg');
        
        viewPhotoImg.src = currentProfilePhoto;
        viewPhotoModal.classList.add('show');
    }
}

// TAMBAHAN: Function to close view photo modal
function closeViewPhotoModal() {
    document.getElementById('viewPhotoModal').classList.remove('show');
}

// TAMBAHAN: Close edit profile modal
function closeEditProfileModal() {
    document.getElementById('editProfileModal').classList.remove('show');
    
    // Reset file input
    document.getElementById('photoInput').value = '';
}

// TAMBAHAN: Handle photo upload
function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        // Validate file type
        if (!file.type.startsWith('image/')) {
            alert('Harap pilih file gambar yang valid!');
            return;
        }
        
        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('Ukuran file terlalu besar! Maksimal 5MB.');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            const profileImage = document.getElementById('profileImage');
            const profileIcon = document.querySelector('#modalProfilePhoto i');
            const removeBtn = document.getElementById('removePhotoBtn');
            
            profileImage.src = e.target.result;
            profileImage.style.display = 'block';
            profileIcon.style.display = 'none';
            removeBtn.style.display = 'flex';
            
            // Store the photo data temporarily
            currentProfilePhoto = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// TAMBAHAN: Remove profile photo
function removeProfilePhoto() {
    if (confirm('Apakah Anda yakin ingin menghapus foto profil?')) {
        // Reset modal photo
        const profileImage = document.getElementById('profileImage');
        const profileIcon = document.querySelector('#modalProfilePhoto i');
        const removeBtn = document.getElementById('removePhotoBtn');
        
        profileImage.style.display = 'none';
        profileIcon.style.display = 'block';
        removeBtn.style.display = 'none';
        
        // Clear current photo data
        currentProfilePhoto = null;
        
        // Reset file input
        document.getElementById('photoInput').value = '';
        
        // Update sidebar avatar immediately with default icon
        updateSidebarAvatar(null);
        
        alert('Foto profil berhasil dihapus!');
    }
}

// TAMBAHAN: Update profile photo
function updateProfilePhoto(photoData) {
    // Update modal photo
    const profileImage = document.getElementById('profileImage');
    const profileIcon = document.querySelector('#modalProfilePhoto i');
    const removeBtn = document.getElementById('removePhotoBtn');
    
    if (photoData) {
        profileImage.src = photoData;
        profileImage.style.display = 'block';
        profileIcon.style.display = 'none';
        removeBtn.style.display = 'flex';
    } else {
        profileImage.style.display = 'none';
        profileIcon.style.display = 'block';
        removeBtn.style.display = 'none';
    }
    
    // Update sidebar avatar
    updateSidebarAvatar(photoData);
}

// TAMBAHAN: Update sidebar avatar
function updateSidebarAvatar(photoData) {
    const adminAvatar = document.querySelector('.admin-avatar');
    
    // Clear existing content
    adminAvatar.innerHTML = '';
    
    if (photoData) {
        // Create and add image element
        const img = document.createElement('img');
        img.src = photoData;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.style.cursor = 'pointer'; // Add cursor pointer for clickable image
        img.title = 'Klik untuk melihat foto profil'; // Add tooltip
        
        // Add click event to view photo
        img.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent dropdown from opening
            viewProfilePhoto();
        });
        
        adminAvatar.appendChild(img);
    } else {
        // Show default icon when no photo (FIXED: Added default icon)
        const defaultIcon = document.createElement('i');
        defaultIcon.className = 'fa-solid fa-circle-user';
        defaultIcon.style.fontSize = '30px';
        defaultIcon.style.color = 'white';
        adminAvatar.appendChild(defaultIcon);
    }
}

// TAMBAHAN: Save profile
function saveProfile() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    if (!fullName || !email) {
        alert('Nama lengkap dan email harus diisi!');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Format email tidak valid!');
        return;
    }
    
    // Update profile name in sidebar
    document.querySelector('.admin-name').textContent = fullName;
    
    // Update greeting
    document.querySelector('.greeting').innerHTML = `Hello ${fullName} <span>👋</span>`;
    
    // Update profile photo
    updateProfilePhoto(currentProfilePhoto);
    
    // Here you would typically send data to server
    const profileData = {
        name: fullName,
        email: email,
        phone: phone,
        photo: currentProfilePhoto
    };
    
    console.log('Profile updated:', profileData);
    
    // In a real application, you would save this to your backend:
    // saveToServer(profileData);
    
    alert('Profile berhasil diperbarui!');
    closeEditProfileModal();
}

// TAMBAHAN: Logout function
function logout() {
    if (confirm('Apakah Anda yakin ingin logout?')) {
        alert('Logout berhasil! Anda bisa redirect ke halaman login di sini.');
        // window.location.href = 'login.html'; // Uncomment untuk redirect ke halaman login
    }
    document.getElementById('profile-dropdown').classList.remove('show');
}

// Initialize the dashboard
function initDashboard() {
    // TAMBAHAN: Load saved profile data on page load
    loadSavedProfile();
    
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
    
    // TAMBAHAN: Global search functionality
    const globalSearchInput = document.querySelector('.search-container input');
    if (globalSearchInput) {
        globalSearchInput.addEventListener('keyup', function(e) {
            console.log('Global search for:', this.value);
        });
    }

    // TAMBAHAN: Customer table search functionality (ini tadinya untuk customers-table, sekarang untuk message table juga)
    // CATATAN: Ini sudah ditangani oleh handleSearch() di atas, jadi kita hapus yang duplikat ini

    // TAMBAHAN: Sort dropdown functionality untuk customers table
    // CATATAN: Ini sudah ditangani oleh handleSort() di atas, jadi kita hapus yang duplikat ini

    // TAMBAHAN: Profile dropdown functionality
    const adminProfile = document.getElementById('admin-profile');
    const profileDropdown = document.getElementById('profile-dropdown');

    if (adminProfile && profileDropdown) {
        adminProfile.addEventListener('click', function(e) {
            e.stopPropagation();
            profileDropdown.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!adminProfile.contains(e.target)) {
                profileDropdown.classList.remove('show');
            }
        });

        // Prevent dropdown from closing when clicking inside it
        profileDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initDashboard);

// TAMBAHAN: Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('editProfileModal');
    const viewModal = document.getElementById('viewPhotoModal');
    
    if (modal && e.target === modal) {
        closeEditProfileModal();
    }
    
    if (viewModal && e.target === viewModal) {
        closeViewPhotoModal();
    }
});

// TAMBAHAN: Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Close modal with Escape key
    if (e.key === 'Escape') {
        const modal = document.getElementById('editProfileModal');
        const viewModal = document.getElementById('viewPhotoModal');
        
        if (modal && modal.classList.contains('show')) {
            closeEditProfileModal();
        }
        
        if (viewModal && viewModal.classList.contains('show')) {
            closeViewPhotoModal();
        }
    }
});