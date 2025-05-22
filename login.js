const container = document.getElementById("container");
const registerbtn = document.getElementById("register");
const loginbtn = document.getElementById("login");

registerbtn.addEventListener("click", () => {
  console.log("klik daftar");
  container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
  console.log("klik masuk");
  container.classList.remove("active");
});
    
    
    // Form validation
    /*const signInForm = document.getElementById('sign-inForm');
    if (signInForm) {
        signInForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // pop up
            if (!email || !password) {
                alert('mohon dilengkapi dahulu');
                return;
            }

            if (!password) {
              alert('password salah');
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
            
            const nama = document.getElementById('nama').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // pop up
            if (!nama || !email || !password) {
                alert('mohon lengkapi dulu');
                return;
            }

            if (!password) {
              alert('password salah');
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


document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('.typewriter');
  
  inputs.forEach(input => {
      input.addEventListener('focus', function() {
          this.setAttribute('placeholder', '');
          
          // Simulate typing when focused
          const demoText = this.id.includes('email') ? 'contoh@gmail.com' : 
                          this.id.includes('password') ? '••••••••' : 
                          'nama lengkap';
          
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
       });*/

       // 1. Event listener untuk DOM yang sudah siap
document.addEventListener('DOMContentLoaded', function() {
  // 2. Inisialisasi tombol toggle
  const container = document.getElementById("container");
  const registerBtn = document.getElementById("register");
  const loginBtn = document.getElementById("login");
  
  registerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Klik daftar");
    container.classList.add("active");
  });
  
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Klik masuk");
    container.classList.remove("active");
  });
  
  // 3. Validasi form sign-in
  const signInForm = document.getElementById('sign-inForm');
  if (signInForm) {
    signInForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('signin-email').value;
      const password = document.getElementById('signin-password').value;
      
      if (!email || !password) {
        alert('mohon dilengkapi dahulu');
        return;
      }
      
      console.log('Form submitted:', { email, password });
      signInForm.reset();
    });
  }
  
  // 4. Validasi form sign-up
  const signUpForm = document.getElementById('sign-upForm');
  if (signUpForm) {
    signUpForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nama = document.getElementById('signup-nama').value;
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;
      
      if (!nama || !email || !password) {
        alert('mohon lengkapi dulu');
        return;
      }
      
      console.log('Form submitted:', { nama, email, password });
      signUpForm.reset();
    });
  }
  
  // 5. Efek typewriter - ini adalah kode nomor 3 yang Anda tanyakan
  const inputs = document.querySelectorAll('.typewriter');
  
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.setAttribute('placeholder', '');
      
      // Simulate typing when focused
      const demoText = this.id.includes('email') ? 'contoh@gmail.com' : 
                      this.id.includes('password') ? '••••••••' : 
                      'nama lengkap';
      
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