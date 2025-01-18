document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        // Toggle hamburger icon between 'X' and '≡'
        if (navMenu.classList.contains('active')) {
            hamburger.innerHTML = '&times;'; // 'X' symbol
        } else {
            hamburger.innerHTML = '&#9776;'; // Hamburger symbol
        }
    });
    // Function to update the footer with the current year and last modified date
    function updateFooter() {
        const currentYear = new Date().getFullYear();
        const lastModified = document.lastModified;
        
        document.getElementById('current-year').innerHTML = `&copy; ${currentYear} <span class="flower-symbol">✿</span>Daniel Oyeniyi<span class="flower-symbol">✿</span>Nigeria`;
        document.getElementById('lastModified').innerHTML = `Last Updated: ${lastModified}`;
    }
    
    updateFooter();

    
});

