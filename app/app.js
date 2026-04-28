// Application JavaScript

document.addEventListener('DOMContentLoaded', () => {
    console.log('DevPulse loaded!');

    // CTA Button interaction
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('Merci de votre intérêt pour DevPulse ! 🚀');
        });
    }

    // Smooth scroll for navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Update footer with build info
    updateFooter();
});

function updateFooter() {
    const footerContent = document.getElementById('footer-content');
    if (footerContent && window.buildInfo) {
        const { version, buildNumber, commitHash } = window.buildInfo;
        footerContent.innerHTML = `⚡ DevPulse | CI/CD avec GitHub Actions | build #${buildNumber} (${commitHash})`;
    } else if (footerContent) {
        footerContent.textContent = '⚡ DevPulse | CI/CD avec GitHub Actions';
    }
}