// Scroll Reveal
const reveals = document.querySelectorAll('.scroll-reveal');
window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('revealed');
    }
  });
});

// Floating Hearts
const heartContainer = document.querySelector('.heart-container');
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 5 + 5 + 's';
  heartContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}
setInterval(createHeart, 300);

// Love Notes Carousel
const notes = [
  "You're my favorite notification 💬",
  "You light up my world like nobody else ✨",
  "Every moment with you is a treasure 💎",
  "Obviously you're pretty annoying but i can manage (jk)",
  "Together is my favorite place to be 💑",
  "You're the poem I never knew how to write 💖"
];
let noteIndex = 0;
setInterval(() => {
  document.getElementById("note-box").textContent = notes[noteIndex];
  noteIndex = (noteIndex + 1) % notes.length;
}, 4000);

// Secret Heart Clicks
let heartClickCount = 0;
function handleHeartClick() {
  heartClickCount++;
  if (heartClickCount === 10) {
    document.getElementById('secretMessage').style.display = 'block';
  }
}

// Confetti and Final Message Trigger
function triggerConfetti() {
  const duration = 2000;
  const end = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 2000 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(() => {
    const timeLeft = end - Date.now();
    if (timeLeft <= 0) return clearInterval(interval);

    confetti(Object.assign({}, defaults, {
      particleCount: 50,
      origin: {
        x: randomInRange(0.1, 0.9),
        y: Math.random() - 0.2
      }
    }));
  }, 250);
}

window.addEventListener("scroll", () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    triggerConfetti();
    document.getElementById('finalMessage').style.display = 'block';
  }
});

// Song Popup
function togglePopup() {
  const popup = document.getElementById('musicPopup');
  popup.classList.toggle('show');
}

function changeSong(src) {
  const audio = document.getElementById('bgMusic');
  audio.src = src;
  audio.play();
}

let index = 0;
function typeLetter() {
  const el = document.getElementById('typed-letter');
  if (index < letter.length) {
    el.innerHTML += letter[index] === '\n' ? '<br>' : letter[index];
    index++;
    setTimeout(typeLetter, 50);
  }
}
document.addEventListener('DOMContentLoaded', typeLetter);

// Initialize Glider Carousel
window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    dots: '.dots',
    draggable: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });
});
function enterSite() {
  const welcome = document.getElementById('welcome-screen');
  welcome.style.opacity = 0;
  setTimeout(() => {
    welcome.style.display = 'none';
  }, 1000);
}
function checkQuiz() {
  const answers = {
    q1: 'b', 
    q2: 'c', 
    q3: 'a'  
  };

  let score = 0;
  Object.keys(answers).forEach(q => {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected && selected.value === answers[q]) {
      score++;
    }
  });

  const resultEl = document.getElementById('quizResult');
 if (score === 3) {
  resultEl.textContent = "You know us SO well 💖 Perfect score!";
  document.getElementById("perfectMessage").style.display = "block";
  triggerConfetti();
} else {
  resultEl.textContent = score === 2
    ? "Almost perfect! Think better my dumb baby"
    : "Not bad! 😅 But we need to relive some memories hehe.";
  document.getElementById("perfectMessage").style.display = "none";
}
}