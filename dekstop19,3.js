document.addEventListener('DOMContentLoaded', function() {
    // Load saved profile data on page load
    loadSavedProfile();
    
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
                    aValue = new Date(a.cells[2].textContent.split('-').reverse().join('-'));
                    bValue = new Date(b.cells[2].textContent.split('-').reverse().join('-'));
                    return bValue - aValue;
                case 'oldest':
                    aValue = new Date(a.cells[2].textContent.split('-').reverse().join('-'));
                    bValue = new Date(b.cells[2].textContent.split('-').reverse().join('-'));
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

    // Profile dropdown functionality
    const adminProfile = document.getElementById('admin-profile');
    const profileDropdown = document.getElementById('profile-dropdown');

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
});

// Variable to store current profile photo
let currentProfilePhoto = null;

// Load saved profile data from memory
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

// Profile dropdown functions
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

// Function to view profile photo in zoom modal
function viewProfilePhoto() {
    if (currentProfilePhoto) {
        const viewPhotoModal = document.getElementById('viewPhotoModal');
        const viewPhotoImg = document.getElementById('viewPhotoImg');
        
        viewPhotoImg.src = currentProfilePhoto;
        viewPhotoModal.classList.add('show');
    }
}

// Function to close view photo modal
function closeViewPhotoModal() {
    document.getElementById('viewPhotoModal').classList.remove('show');
}

function closeEditProfileModal() {
    document.getElementById('editProfileModal').classList.remove('show');
    
    // Reset file input
    document.getElementById('photoInput').value = '';
}

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

function logout() {
    if (confirm('Apakah Anda yakin ingin logout?')) {
        alert('Logout berhasil! Anda bisa redirect ke halaman login di sini.');
        // window.location.href = 'login.html'; // Uncomment untuk redirect ke halaman login
    }
    document.getElementById('profile-dropdown').classList.remove('show');
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('editProfileModal');
    const viewModal = document.getElementById('viewPhotoModal');
    
    if (e.target === modal) {
        closeEditProfileModal();
    }
    
    if (e.target === viewModal) {
        closeViewPhotoModal();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Close modal with Escape key
    if (e.key === 'Escape') {
        const modal = document.getElementById('editProfileModal');
        const viewModal = document.getElementById('viewPhotoModal');
        
        if (modal.classList.contains('show')) {
            closeEditProfileModal();
        }
        
        if (viewModal.classList.contains('show')) {
            closeViewPhotoModal();
        }
    }
});