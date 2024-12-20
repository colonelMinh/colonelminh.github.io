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
    var userKey = "Admin"; // Key cho tài khoản admin

    function checkPassword() {
        var userPassword = prompt("Vui lòng nhập key để xem nội dung trang web:");
        if (userPassword === correctPassword || userPassword === pass || userPassword === pass1 || userPassword === userKey) {
            if (userPassword === userKey) {
                window.location.href = "edit.html";
            } else {
                alert("Key chính xác! Chào mừng bạn!");
                localStorage.setItem('user', JSON.stringify({ key: userKey }));
            }
        } else {
            alert("Key không chính xác. Liên hệ tại https://forms.gle/F94L36wYKzaHR8sTA để lấy key nếu chưa có). Trước khi lấy key, đăng ký tại https://colonelminh.github.io/signup.html. Trang web sẽ đóng lại.");
            window.location.href = "https://www.google.com/";
        }
    }

    window.onload = function() {
        checkPassword();
    };
})();