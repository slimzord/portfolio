document.addEventListener("DOMContentLoaded", () => {
// Animação de rolagem suave
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
link.addEventListener('click', (event) => {
event.preventDefault();
const targetId = link.getAttribute('href').substring(1);
const targetSection = document.getElementById(targetId);
window.scrollTo({
top: targetSection.offsetTop - 60,
behavior: 'smooth'
});
});
});
});
