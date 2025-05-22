const container = document.getElementById("container");
const registerbtn = document.getElementById("register");
const loginbtn = document.getElementById("login");

registerbtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// Typing animation
function typeText(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Start typing animations
document.addEventListener('DOMContentLoaded', () => {
    const signinHeading = document.getElementById('signin-heading');
    const signupHeading = document.getElementById('signup-heading');
    
    typeText(signinHeading, 'Masuk', 150);
    
    // Typing animation when switching between forms
    registerbtn.addEventListener('click', () => {
        setTimeout(() => {
            typeText(signupHeading, 'Buat Akun', 150);
        }, 600);
    });
    
    loginbtn.addEventListener('click', () => {
        setTimeout(() => {
            typeText(signinHeading, 'Masuk', 150);
        }, 600);
    });
});

// Input focus animations
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.transition = 'background-color 0.3s';
        input.style.backgroundColor = '#f5f5f5';
        input.style.boxShadow = '0 0 5px rgba(160, 141, 124, 0.5)';
    });
    
    input.addEventListener('blur', () => {
        input.style.backgroundColor = '#eee';
        input.style.boxShadow = 'none';
    });
});

// Button hover animation
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transition = 'all 0.3s';
        button.style.transform = 'translateY(-3px)';
        button.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });
    
    button.addEventListener('mouseout', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
    });
});