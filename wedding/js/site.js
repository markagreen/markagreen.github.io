// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", open);
  });
}

// Countdown
// Format: YYYY-MM-DDTHH:MM:SS in the venue's local time.
const weddingDate = new Date("2027-06-26T14:00:00");

function updateCountdown() {
  const countdown = document.getElementById("countdown");
  if (!countdown) return;

  const now = new Date();
  const distance = weddingDate - now;

  if (distance <= 0) {
    countdown.style.display = "none";
    const message = document.getElementById("countdown-message");
    if (message) message.textContent = "Today is the day! ♡";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
