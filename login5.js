document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const signUpButton = document.getElementById('register');
    const signInButton = document.getElementById('login');
    
    // Add event listeners to the buttons
    if (signUpButton) {
        signUpButton.addEventListener('click', () => {
            container.classList.add('right-panel-active');
        });
    }
    
    if (signInButton) {
        signInButton.addEventListener('click', () => {
            container.classList.remove('right-panel-active');
        });
    }
    
    // Create and add croissant elements
    const croissantPositions = [
        { top: '10%', right: '15%', rotation: 25 },
        { top: '60%', right: '25%', rotation: -15 },
        { top: '30%', left: '15%', rotation: 45 },
        { bottom: '15%', left: '20%', rotation: -30 },
        { bottom: '25%', right: '10%', rotation: 60 }
    ];
    
    croissantPositions.forEach((pos, index) => {
        const croissant = document.createElement('img');
        croissant.src = 'croissant.png'; // Make sure you have this image file
        croissant.alt = 'Croissant';
        croissant.className = `croissant croissant-${index + 1}`;
        
        // Apply positioning styles
        Object.keys(pos).forEach(key => {
            if (key !== 'rotation') {
                croissant.style[key] = pos[key];
            }
        });
        
        // Apply rotation
        if (pos.rotation) {
            croissant.style.transform = `rotate(${pos.rotation}deg)`;
        }
        
        // Add the croissant to the container
        container.appendChild(croissant);
    });
    
    // Form validation
    const signInForm = document.getElementById('sign-inForm');
    if (signInForm) {
        signInForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Basic validation
            if (!email || !password) {
                alert('mohon dilengkapi dahulu');
                return;
            }
            
            // Here you would normally send the data to a server
            console.log('Form submitted:', { email, password });
            
            // For demo purposes, let's just clear the form
            signInForm.reset();
        });
    }

    // Form validation
    const signUpForm = document.getElementById('sign-upForm');
    if (signUpForm) {
        signUpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nama = doucment.getElementById(nama).value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Basic validation
            if (!nama || !email || !password) {
                alert('mohon lengkapi dulu');
                return;
            }
            
            // Here you would normally send the data to a server
            console.log('Form submitted:', { nama,email, password });
            
            // For demo purposes, let's just clear the form
            signUpForm.reset();
        });
    }
    
    // For demo purposes, let's initialize the page in the sign-up view
    // Comment out the next line if you want to start with the sign-in view
    // container.classList.add('right-panel-active');
});

document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('.typewriter');
  
  inputs.forEach(input => {
      input.addEventListener('focus', function() {
          this.setAttribute('placeholder', '');
          
          // Simulate typing when focused
          const demoText = this.id.includes('email') ? 'contoh@gmail.com' : 
                          this.id.includes('password') ? '••••••••' : 
                          'Nama Lengkap';
          
          let i = 0;
          const typeInterval = setInterval(() => {
              if (i < demoText.length && document.activeElement === this) {
                  this.setAttribute('placeholder', this.getAttribute('placeholder') + demoText.charAt(i));
                  i++;
              } else {
                  clearInterval(typeInterval);
              }
          }, 100);
      });
      });
       });