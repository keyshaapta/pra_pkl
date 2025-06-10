

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
