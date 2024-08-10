<?php
session_start();

if (!isset($_SESSION["username"])) {
    header("Location: login.html");
    exit();
}

// Nội dung trang bảo vệ
echo "<h1>Chào mừng " . $_SESSION["username"] . "!</h1>";
echo "<a href='logout.php'>Đăng xuất</a>";
?>
