document.getElementById("signup-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const fullName = document.getElementById('signup-fullname').value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    // Kiểm tra định dạng email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Đăng ký thất bại: Email không đúng định dạng.");
        return;
    }

    // Lấy thông tin người dùng từ localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra nếu email đã tồn tại
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert("Đăng ký thất bại: Email đã tồn tại.");
        return;
    }

    // Mã hóa mật khẩu (sử dụng btoa)
    const encryptedPassword = btoa(password);

    // Lưu thông tin đăng ký vào localStorage
    users.push({fullName, email: email, password: encryptedPassword });
    localStorage.setItem("users", JSON.stringify(users));

    // Hiển thị thông báo đăng ký thành công và chuyển hướng sau khi bấm nút OK
    alert("Đăng ký thành công!");
    setTimeout(() => {
        window.location.href = "login.html";
    }, 100);
});
