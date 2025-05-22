const container = document.getElementById("container");
const registerbtn = document.getElementById("register");
const loginbtn = document.getElementById("login");

registerbtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// Typewriter effect for input fields
document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('.typewriter');
  
  inputs.forEach(input => {
      input.addEventListener('focus', function() {
          this.setAttribute('placeholder', '');
          
          // Simulate typing when focused
          const demoText = this.id.includes('email') ? 'contoh@email.com' : 
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
      
      input.addEventListener('blur', function() {
          this.setAttribute('placeholder', '');
      });
  });
});

// Button click animations
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const ripple = document.createElement('span');
      ripple.style.position = 'absolute';
      ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
      ripple.style.borderRadius = '50%';
      ripple.style.width = '100px';
      ripple.style.height = '100px';
      ripple.style.left = `${x - 50}px`;
      ripple.style.top = `${y - 50}px`;
      ripple.style.transform = 'scale(0)';
      ripple.style.opacity = '1';
      ripple.style.transition = 'transform 0.6s, opacity 0.6s';
      
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      
      setTimeout(() => {
          ripple.style.transform = 'scale(4)';
          ripple.style.opacity = '0';
          
          setTimeout(() => {
              ripple.remove();
          }, 600);
      }, 10);
  });
});

// Circle images transition effects
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById("container");
  const leftCircle = document.querySelector('.left-circle');
  const rightCircle = document.querySelector('.right-circle');
  const fullCircle = document.querySelector('.full-circle');
  
  // Initial setup - show right half circle on login view
  rightCircle.style.opacity = '1';
  leftCircle.style.opacity = '0';
  fullCircle.style.opacity = '0';
  
  // Reset circle images position on form transition
  registerBtn.addEventListener("click", () => {
      container.classList.add("active");
      setTimeout(() => {
          rightCircle.style.opacity = '0';
          leftCircle.style.opacity = '1';
          fullCircle.style.opacity = '0';
      }, 300);
  });
  
  loginBtn.addEventListener("click", () => {
      container.classList.remove("active");
      setTimeout(() => {
          rightCircle.style.opacity = '1';
          leftCircle.style.opacity = '0';
          fullCircle.style.opacity = '0';
      }, 300);
  });
  
  // Show full circle briefly during transitions
  container.addEventListener('transitionstart', () => {
      fullCircle.style.opacity = '1';
      setTimeout(() => {
          fullCircle.style.opacity = '0';
      }, 300);
  });
});

// Form validation effects
document.getElementById('masuk-btn').addEventListener('click', function() {
  validateForm('email-login', 'password-login');
});

document.getElementById('daftar-btn').addEventListener('click', function() {
  validateForm('name', 'email-register', 'password-register');
});

function validateForm(...fields) {
  let valid = true;
  
  fields.forEach(field => {
      const input = document.getElementById(field);
      if (!input.value) {
          valid = false;
          input.style.border = '1px solid red';
          input.classList.add('shake');
          
          setTimeout(() => {
              input.classList.remove('shake');
          }, 500);
      } else {
          input.style.border = '1px solid #ddd';
      }
  });
  
  if (valid) {
      // Create success message
      const message = document.createElement('div');
      message.textContent = fields.includes('name') ? 'Pendaftaran berhasil!' : 'Login berhasil!';
      message.style.position = 'fixed';
      message.style.top = '20px';
      message.style.left = '50%';
      message.style.transform = 'translateX(-50%)';
      message.style.padding = '10px 20px';
      message.style.backgroundColor = '#4CAF50';
      message.style.color = 'white';
      message.style.borderRadius = '4px';
      message.style.zIndex = '9999';
      
      document.body.appendChild(message);
      
      setTimeout(() => {
          message.style.opacity = '0';
          message.style.transition = 'opacity 0.5s';
          
          setTimeout(() => {
              message.remove();
          }, 500);
      }, 2000);
  }
}

// Add keyframe animation for shake effect
const shakeKeyframes = `
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}
.shake {
  animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
}`;

const styleSheet = document.createElement("style");
styleSheet.textContent = shakeKeyframes;
document.head.appendChild(styleSheet);