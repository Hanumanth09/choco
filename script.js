const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 100;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `hsl(${Math.random() * 60 + 300}, 100%, 70%)`;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    }
    
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animateParticles);
}

animateParticles();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const chocolateRain = document.querySelector('.chocolate-rain');
const glitter = document.querySelector('.glitter');
const chocolateEmojis = ['🍫', '🍬', '🍭', '💝', '💕', '❤️', '💖', '💗', '💓'];

function createFallingChocolate() {
    const chocolate = document.createElement('div');
    chocolate.className = 'falling-chocolate';
    chocolate.textContent = chocolateEmojis[Math.floor(Math.random() * chocolateEmojis.length)];
    chocolate.style.left = Math.random() * 100 + 'vw';
    chocolate.style.animationDuration = (Math.random() * 3 + 3) + 's';
    chocolate.style.fontSize = (Math.random() * 20 + 20) + 'px';
    
    chocolateRain.appendChild(chocolate);
    
    setTimeout(() => {
        chocolate.remove();
    }, 6000);
}

function createGlitter() {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'absolute';
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.width = '4px';
    sparkle.style.height = '4px';
    sparkle.style.background = 'white';
    sparkle.style.borderRadius = '50%';
    sparkle.style.boxShadow = '0 0 10px white';
    sparkle.style.animation = 'sparkle 1s ease-out forwards';
    
    glitter.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(1); opacity: 0; }
    }
    @keyframes cardAppear {
        from {
            opacity: 0;
            transform: scale(0.5) translateY(50px);
        }
        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }
    @keyframes popupAppear {
        from {
            opacity: 0;
            transform: scale(0.5);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    @keyframes popupDisappear {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0.5);
        }
    }
`;
document.head.appendChild(style);

setInterval(createFallingChocolate, 300);
setInterval(createGlitter, 200);

const chocolateBox = document.getElementById('chocolateBox');
const mainCard = document.getElementById('mainCard');

chocolateBox.addEventListener('click', function() {
    this.classList.add('opened');
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createGlitter();
            createFallingChocolate();
        }, i * 20);
    }
    
    setTimeout(() => {
        this.style.display = 'none';
        mainCard.classList.remove('hidden');
        mainCard.style.animation = 'cardAppear 0.8s ease forwards';
    }, 800);
});

const quotes = [
    '"You are the chocolate to my heart, making every moment sweeter!"',
    '"Like chocolate melts in warmth, my heart melts for you!"',
    '"Life with you is like a box of chocolates - full of sweet surprises!"',
    '"You\'re my favorite flavor in this world of chocolates!"',
    '"Our love is sweeter than the finest chocolate!"',
    '"Just like chocolate, you make everything better!"',
    '"You\'re the sweetest addiction I never want to quit!"',
    '"Every moment with you is as delightful as chocolate!"'
];

let quoteIndex = 0;
const quoteElement = document.querySelector('.chocolate-quote');

function changeQuote() {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    quoteElement.style.opacity = '0';
    setTimeout(() => {
        quoteElement.textContent = quotes[quoteIndex];
        quoteElement.style.opacity = '1';
    }, 500);
}

quoteElement.style.transition = 'opacity 0.5s ease';
setInterval(changeQuote, 5000);

const chocolateWishes = {
    dairy: {
        icon: '🧈',
        title: 'Dairy Milk Love',
        message: 'Happy Chocolate Day! You make my life smooth and creamy like dairy milk!',
        quote: '"Your love is as smooth as silk, as sweet as honey, and as comforting as the creamiest dairy milk chocolate. You complete me!"',
        bgColor: 'linear-gradient(145deg, rgba(138, 43, 226, 0.4), rgba(75, 0, 130, 0.4))'
    },
    dark: {
        icon: '🍫',
        title: 'Dark Chocolate Passion',
        message: 'Happy Chocolate Day! Our love is deep and intense like dark chocolate!',
        quote: '"Like dark chocolate, our love is bold, intense, and unforgettable. You are my sweetest obsession and my greatest treasure!"',
        bgColor: 'linear-gradient(145deg, rgba(101, 67, 33, 0.5), rgba(59, 47, 47, 0.5))'
    },
    white: {
        icon: '⬜',
        title: 'White Chocolate Dreams',
        message: 'Happy Chocolate Day! You bring purity and sweetness to my world!',
        quote: '"You are my white chocolate dream - pure, sweet, and absolutely irresistible. With you, every day feels like a celebration of love!"',
        bgColor: 'linear-gradient(145deg, rgba(255, 250, 240, 0.3), rgba(255, 228, 196, 0.3))'
    }
};

function showChocolateWish(type) {
    const wishData = chocolateWishes[type];
    const wishPopup = document.getElementById('chocolateWish');
    const wishBg = document.querySelector('.wish-bg');
    
    document.querySelector('.wish-icon').textContent = wishData.icon;
    document.querySelector('.wish-title').textContent = wishData.title;
    document.querySelector('.wish-message').textContent = wishData.message;
    document.querySelector('.wish-quote').textContent = wishData.quote;
    wishBg.style.background = wishData.bgColor;
    
    wishPopup.classList.remove('hidden');
    wishPopup.style.animation = 'popupAppear 0.5s ease forwards';
}

setTimeout(() => {
    document.querySelectorAll('.choco-type').forEach(choco => {
        choco.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            showChocolateWish(type);
            
            for (let i = 0; i < 15; i++) {
                setTimeout(() => createGlitter(), i * 50);
            }
        });
    });

    document.querySelector('.close-wish').addEventListener('click', function() {
        const wishPopup = document.getElementById('chocolateWish');
        wishPopup.style.animation = 'popupDisappear 0.3s ease forwards';
        setTimeout(() => {
            wishPopup.classList.add('hidden');
        }, 300);
    });

    const loveButton = document.querySelector('.love-button');
    loveButton.addEventListener('click', function() {
        this.textContent = '💕 Love You Too! 💕';
        
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                createGlitter();
                createFallingChocolate();
            }, i * 30);
        }
        
        setTimeout(() => {
            this.textContent = 'I Love You 💕';
        }, 2000);
    });
}, 1000);
