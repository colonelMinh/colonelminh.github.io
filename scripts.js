document.addEventListener('DOMContentLoaded', () => {
    const birthday = new Date('2007-01-16'); // Thay thế YYYY-MM-DD bằng ngày sinh nhật của bạn
    const today = new Date();

    if (today.getMonth() === birthday.getMonth() && today.getDate() === birthday.getDate()) {
        document.getElementById('birthday-card').classList.remove('hidden');
        document.getElementById('fireworks-canvas').classList.remove('hidden');
        startFireworks();
        sendBirthdayEmail();
    }
});

function startFireworks() {
    const canvas = document.getElementById('fireworks-canvas');
    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 200;  // Tăng số lượng hạt ban đầu lên 200
    const maxVelocity = 5;
    const canvasWidth = canvas.width = window.innerWidth;
    const canvasHeight = canvas.height = window.innerHeight;

    function Particle() {
        this.x = canvasWidth / 2;
        this.y = canvasHeight / 2;
        this.vx = Math.random() * maxVelocity * 2 - maxVelocity;
        this.vy = Math.random() * maxVelocity * 2 - maxVelocity;
        this.size = Math.random() * 5 + 2; // Tăng kích thước hạt lên 2-7
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;

        this.update = function() {
            this.x += this.vx;
            this.y += this.vy;
            this.size *= 0.98;
        };

        this.draw = function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        };
    }

    function animate() {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        particles.forEach((particle, index) => {
            particle.update();
            particle.draw();
            if (particle.size < 0.1) {
                particles.splice(index, 1);
            }
        });
        if (particles.length < particleCount) {
            // Tăng số lượng hạt mới được tạo ra mỗi khung hình
            for (let i = 0; i < 5; i++) {
                particles.push(new Particle());
            }
        }
        requestAnimationFrame(animate);
    }

    animate();
}


