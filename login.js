const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");

btnLogin.addEventListener("click", async (e) => {
    e.preventDefault();

    if (inputUsername.value === "" || inputPassword.value === "") {
        alert("Vui lòng không để trống");
        return;
    }

    const user = {
        username: inputUsername.value,
        password: inputPassword.value,
    };

    try {
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            const userData = await response.json();
            const currentTime = new Date().getTime(); // Thời gian hiện tại
            localStorage.setItem('user', JSON.stringify({
                username: userData.username,
                fullName: userData.fullName,
                loginTime: currentTime // Lưu thời gian đăng nhập
            }));
            alert('Đăng nhập thành công');
            window.location.href = 'study-document.html';
        } else {
            const errorData = await response.json();
            alert(`Đăng nhập thất bại: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Đăng nhập thất bại, vui lòng thử lại!');
    }
});
