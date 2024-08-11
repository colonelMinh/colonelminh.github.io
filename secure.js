// Khi người dùng cuộn xuống 20px từ đầu tài liệu, hiển thị nút
window.onscroll = function() {scrollFunction()};
        
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// Khi người dùng click vào nút, cuộn lên đầu tài liệu
function topFunction() {
    document.body.scrollTop = 0; // Đối với Safari
    document.documentElement.scrollTop = 0; // Đối với Chrome, Firefox, IE và Opera
}

(function() {
    var correctPassword = "minhsiucapvjppro"; // Thay đổi thành mật khẩu của bạn
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
