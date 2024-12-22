// components.js

const headerComponent = `
    <header class="header">
        <h1>🍳 Shai's Recipes | המתכונים של שי 👨‍🍳</h1>
    </header>

    <nav class="nav">
        <ul>
            <li><a href="index.html">Home | בית</a></li>
            <li><a href="breakfast.html">Breakfast | ארוחת בוקר</a></li>
            <li><a href="lunch.html">Lunch | ארוחת צהריים</a></li>
            <li><a href="dinner.html">Dinner | ארוחת ערב</a></li>
            <li><a href="cakes-cookies.html">Cakes & Cookies | עוגות ועוגיות</a></li>
            <li><a href="snacks.html">Snacks | חטיפים</a></li>
            <li><a href="all-recipes.html">All Recipes | כל המתכונים</a></li>
        </ul>
    </nav>
`;

const footerComponent = `
    <footer class="footer">
        <p>Shai | שי | Copyright © 2024</p>
    </footer>
`;

function loadComponents() {
    // Load header
    const headerPlaceholder = document.querySelector('#header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerComponent;
    }

    // Load footer
    const footerPlaceholder = document.querySelector('#footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerComponent;
    }

    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.backgroundColor = 'var(--accent-color)';
            link.style.color = 'var(--text-color)';
        }
    });
}

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { headerComponent, footerComponent, loadComponents };
}
