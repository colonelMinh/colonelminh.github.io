document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Mã hóa mật khẩu nhập vào để so sánh
  const encryptedPassword = btoa(password);

  // Lấy thông tin người dùng từ localStorage
  let users = JSON.parse(localStorage.getItem("users")) || [];
  
  // Kiểm tra thông tin đăng nhập
  const user = users.find(user => user.email === email && user.password === encryptedPassword);

  if (user) {
      // Nếu thông tin đúng, chuyển hướng đến trang study-document.html
      window.location.href = "study-document.html";
  } else {
      alert("Email hoặc mật khẩu không đúng!");
  }
});
