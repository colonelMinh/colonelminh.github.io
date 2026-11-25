# Archived cursor fireworks effect

This effect is kept for possible reuse and is not loaded by `index.html`.
To restore it, add the canvas and CSS below, then place the JavaScript in a
script on the page.

## HTML

```html
<canvas id="fireworksCanvas"></canvas>
```

## CSS

```css
#fireworksCanvas {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    pointer-events: none;
    mix-blend-mode: screen;
}
```

## JavaScript

```javascript
const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');

function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

initCanvas();
window.addEventListener('resize', initCanvas);

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
        this.life = Math.random() * 30 + 50;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size *= 0.96;
        this.life--;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

const particles = [];
const colors = ['#ff5733', '#33ff57', '#5733ff', '#f4ff33', '#ff33e3'];

function createFireworks(x, y) {
    for (let i = 0; i < 50; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(x, y, color));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle, index) => {
        if (particle.life <= 0 || particle.size <= 0.1) {
            particles.splice(index, 1);
        } else {
            particle.update();
            particle.draw();
        }
    });
    requestAnimationFrame(animate);
}

document.addEventListener('mousemove', (event) => {
    createFireworks(event.clientX, event.clientY);
});

animate();
```
