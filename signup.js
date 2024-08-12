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

    // Gửi thông tin qua Google Apps Script
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwKWthTTAP1D7PL0f9Wqknw7ueOZfP-9jOuiX0Bsexott9halFCxXkVwWXM8Bs1u1hrHw/exec';
    const requestBody = new FormData();
    requestBody.append('fullname', fullName);
    requestBody.append('email', email);
    requestBody.append('password', password);

    fetch(scriptURL, { method: 'POST', body: requestBody })
        .then(response => {
            alert("Đăng ký thành công!");
            window.location.href = "login.html";
        })
        .catch(error => {
            alert("Đăng ký thất bại: " + error.message);
        });
});
