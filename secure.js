(function() {
    // Kiểm tra cờ đăng nhập trong localStorage
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (isLoggedIn !== 'true') {
        // Nếu chưa đăng nhập hoặc cờ không đúng, chuyển hướng về trang login.html
        window.location.href = 'login.html';
    } else {
        console.log('Người dùng đã đăng nhập, tiếp tục truy cập trang.');
    }

    // Nếu cần thêm các tính năng bảo mật khác, bạn có thể thêm vào đây.
    // Ví dụ: Kiểm tra thời gian đăng nhập hoặc mã hóa dữ liệu.
})();




// Phần còn lại của mã
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

(function() {
    var correctPassword = "minhsiucapvjppro"; 
    var pass = "minhcancutethe:))";
    var pass1 = "lionelmessithegoat";

    function checkPassword() {
        var userPassword = prompt("Vui lòng nhập key để xem nội dung trang web:");
        if (userPassword === correctPassword || userPassword === pass || userPassword === pass1) {
            alert("Key chính xác! Chào mừng bạn!");
        } else {
            alert("Key không chính xác. Liên hệ tại https://forms.gle/F94L36wYKzaHR8sTA để lấy key nếu chưa có). Trang web sẽ đóng lại.");
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }
    }

    window.onload = function() {
        checkPassword();
    };
})();
