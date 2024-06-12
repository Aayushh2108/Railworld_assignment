function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

let image = document.getElementById('image');
let images = ['image1.jpg', 'image2.jpg', 'image3.jpg']
setInterval(function () {
    let random = Math.floor(Math.random() * 3);
    image.src = images[random];
}, 2000);

const signupButton = document.querySelector('.signup-btn');
const signupFormContainer = document.querySelector('.signup-form-container');
const closeBtn = document.querySelector('.close-btn');

signupButton.addEventListener('click', () => {
    signupFormContainer.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    signupFormContainer.style.display = 'none';
});