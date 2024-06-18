const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function register(event) {
  event.preventDefault();
  const username = document.querySelector('#register-username').value;
  const email = document.querySelector('#register-email').value;
  const password = document.querySelector('#register-password').value;

  if (username && email && password) {
    // Lưu thông tin vào localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email); // Thêm email vào localStorage
    localStorage.setItem('password', password);
    // Chuyển hướng đến trang index.html
    window.location.href = 'index.html';
  } else {
    alert('Vui lòng điền đầy đủ thông tin đăng ký.');
  }
}

function login(event) {
  event.preventDefault();
  const username = document.querySelector('#login-username').value;
  const password = document.querySelector('#login-password').value;

  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (username === storedUsername && password === storedPassword) {
    // Chuyển hướng đến trang index.html
    window.location.href = 'index.html';
  } else {
    alert('Sai tên đăng nhập hoặc mật khẩu.');
  }
}
