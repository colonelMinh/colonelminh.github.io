<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Email người nhận
    $to = "tranquangminhduclap@gmail.com";
    
    // Tiêu đề email
    $subject = "Thông điệp từ biểu mẫu liên hệ";
    
    // Nội dung email
    $email_content = "Tên: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Nội dung:\n$message\n";
    
    // Tiến hành gửi email
    if (mail($to, $subject, $email_content)) {
        echo "Cảm ơn ý kiến đóng góp của bạn! Chúng tôi sẽ phản hồi sớm nhất có thể.";
    } else {
        echo "Có lỗi xảy ra khi gửi email. Vui lòng thử lại sau!";
    }
}
?>
