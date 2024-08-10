<?php
$servername = "localhost";
$username = "root";
$password = ""; // Mật khẩu MySQL
$dbname = "user_data";

// Tạo kết nối
$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST['username'];
    $pass = $_POST['password'];

    $sql = "SELECT * FROM users WHERE username='$user'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($pass, $row['password'])) {
            header("Location: study-document.html");
        } else {
            echo "Sai mật khẩu!";
        }
    } else {
        echo "Không tìm thấy tên người dùng!";
    }
}

$conn->close();
?>
