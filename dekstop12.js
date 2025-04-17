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

// Simple form validation and submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // You would normally send this data to a server
    console.log('Form submitted:', { name, email, phone, message });
    
    // Reset form after submission
    this.reset();
    
    // Show success message (you could enhance this)
    alert('Pesan Anda telah dikirim. Terima kasih!');
});

// Add JavaScript for image upload functionality if needed
document.addEventListener('DOMContentLoaded', function() {
    const uploadBtn = document.getElementById('uploadBtn');
    const avatar = document.getElementById('avatar');
    
    uploadBtn.addEventListener('click', function() {
        // Create hidden file input
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.style.display = 'none';
        
        // Trigger file selection
        document.body.appendChild(fileInput);
        fileInput.click();
        
        // Handle file selection
        fileInput.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    // Clear avatar content
                    avatar.innerHTML = '';
                    
                    // Create and append image
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    avatar.appendChild(img);
                };
                
                reader.readAsDataURL(this.files[0]);
            }
            
            // Remove the input from DOM
            document.body.removeChild(fileInput);
        });
    });
});

// Minimal JavaScript untuk menangani form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('profileForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = {
            nama: document.getElementById('nama').value,
            email: document.getElementById('email').value,
            telepon: document.getElementById('telepon').value
        };
        
        // Log data (dalam implementasi nyata, kirim ke server)
        console.log('Form data:', formData);
        
        // Tampilkan notifikasi simpan sukses
        alert('Data profil berhasil disimpan');
        
        // Reset form jika diperlukan
        // form.reset();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const passwordForm = document.getElementById('passwordForm');
    const sandiLama = document.getElementById('sandiLama');
    const sandiBaru = document.getElementById('sandiBaru');
    const sandiLamaError = document.getElementById('sandiLamaError');
    const sandiBaruError = document.getElementById('sandiBaruError');
    
    // Reset error messages on input
    sandiLama.addEventListener('input', function() {
        sandiLamaError.style.display = 'none';
    });
    
    sandiBaru.addEventListener('input', function() {
        sandiBaruError.style.display = 'none';
    });
    
    passwordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Validate old password
        if (!sandiLama.value.trim()) {
            sandiLamaError.style.display = 'block';
            isValid = false;
        }
        
        // Validate new password
        if (!sandiBaru.value.trim()) {
            sandiBaruError.style.display = 'block';
            isValid = false;
        }
        
        if (isValid) {
            // Collect password data
            const passwordData = {
                sandiLama: sandiLama.value,
                sandiBaru: sandiBaru.value
            };
            
            // Log data (in a real implementation, send to server)
            console.log('Password data:', passwordData);
            
            // Show success notification
            alert('Sandi berhasil diubah');
            
            // Reset form
            passwordForm.reset();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const addressForm = document.getElementById('addressForm');
    
    // Load saved address if available
    loadSavedAddress();
    
    addressForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (validateForm()) {
            // Save the address data
            saveAddress();
            
            // Show success message
            alert('Alamat berhasil disimpan!');
            
            // Optional: Reset form
            // addressForm.reset();
        }
    });
    
    function validateForm() {
        const requiredFields = document.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = 'red';
            } else {
                field.style.borderColor = '#ccc';
            }
        });
        
        // Phone number validation
        const phoneField = document.getElementById('telepon');
        const phoneRegex = /^[0-9+\- ]{10,15}$/;
        if (phoneField.value && !phoneRegex.test(phoneField.value)) {
            isValid = false;
            phoneField.style.borderColor = 'red';
            alert('Nomor telepon tidak valid. Pastikan nomor telepon berisi 10-15 digit.');
        }
        
        // Postal code validation
        const postalField = document.getElementById('kodepos');
        const postalRegex = /^[0-9]{5}$/;
        if (postalField.value && !postalRegex.test(postalField.value)) {
            isValid = false;
            postalField.style.borderColor = 'red';
            alert('Kode pos tidak valid. Kode pos harus terdiri dari 5 digit angka.');
        }
        
        return isValid;
    }
    
    function saveAddress() {
        const formData = {
            nama: document.getElementById('nama').value,
            telepon: document.getElementById('telepon').value,
            provinsi: document.getElementById('provinsi').value,
            kota: document.getElementById('kota').value,
            kecamatan: document.getElementById('kecamatan').value,
            desa: document.getElementById('desa').value,
            kodepos: document.getElementById('kodepos').value,
            alamat: document.getElementById('alamat').value
        };
        
        // Save to localStorage
        localStorage.setItem('savedAddress', JSON.stringify(formData));
    }
    
    function loadSavedAddress() {
        const savedData = localStorage.getItem('savedAddress');
        
        if (savedData) {
            const addressData = JSON.parse(savedData);
            
            // Fill form fields with saved data
            document.getElementById('nama').value = addressData.nama || '';
            document.getElementById('telepon').value = addressData.telepon || '';
            document.getElementById('provinsi').value = addressData.provinsi || '';
            document.getElementById('kota').value = addressData.kota || '';
            document.getElementById('kecamatan').value = addressData.kecamatan || '';
            document.getElementById('desa').value = addressData.desa || '';
            document.getElementById('kodepos').value = addressData.kodepos || '';
            document.getElementById('alamat').value = addressData.alamat || '';
        }
    }
    
    // Add input event listeners to remove red border when user starts typing
    const allInputs = document.querySelectorAll('input, textarea');
    allInputs.forEach(input => {
        input.addEventListener('input', function() {
            this.style.borderColor = '#ccc';
        });
    });
});