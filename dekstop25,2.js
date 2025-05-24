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

        // Profile dropdown functions
        function editProfile() {
            document.getElementById('profile-dropdown').classList.remove('show');
            document.getElementById('editProfileModal').classList.add('show');
        }

        function closeEditProfileModal() {
            document.getElementById('editProfileModal').classList.remove('show');
        }

        function handlePhotoUpload(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const profileImage = document.getElementById('profileImage');
                    const profileIcon = document.querySelector('#modalProfilePhoto i');
                    
                    profileImage.src = e.target.result;
                    profileImage.style.display = 'block';
                    profileIcon.style.display = 'none';
                };
                reader.readAsDataURL(file);
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
            
            // Update profile name in sidebar
            document.querySelector('.admin-name').textContent = fullName;
            
            // Update greeting
            document.querySelector('.greeting').innerHTML = `Hello ${fullName} <span>👋</span>`;
            
            alert('Profile berhasil diperbarui!');
            closeEditProfileModal();
            
            // Di sini bisa ditambahkan code untuk mengirim data ke server
            console.log('Profile updated:', {
                name: fullName,
                email: email,
                phone: phone
            });
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
            if (e.target === modal) {
                closeEditProfileModal();
            }
        });