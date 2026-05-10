document.addEventListener('DOMContentLoaded', () => {

    // --- SOCIAL LINKS CONFIGURATION ---
    const socialLinks = {
        facebook: "https://www.facebook.com/carl.joseph.paica", // I-paste imong FB link diri
        discord: "https://discordapp.com/users/yourid",     // I-paste imong Discord link diri
        email: "mailto:yourname@gmail.com"                 // I-change imong email diri
    };

    // Pag-target sa mga ID
    const fbBtn = document.getElementById('fb-link');
    const discordBtn = document.getElementById('discord-link');
    const emailBtn = document.getElementById('email-link');

    // Logic para sa pag-redirect
    if (fbBtn) {
        fbBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(socialLinks.facebook, '_blank'); // Mo-abli sa bag-ong tab
        });
    }

    if (discordBtn) {
        discordBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(socialLinks.discord, '_blank');
        });
    }

    if (emailBtn) {
        emailBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = socialLinks.email; // Mo-abli sa default email app
        });
    }

    // --- EXISTING NAVBAR SHADOW LOGIC ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('nav-shadow');
        } else {
            navbar.classList.remove('nav-shadow');
        }
    });
});