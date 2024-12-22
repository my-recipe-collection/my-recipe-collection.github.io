// components.js

const headerComponent = `
    <header class="header">
        <h1>🍳 Shai's Recipes | המתכונים של שי 👨‍🍳</h1>
    </header>

    <nav class="nav">
        <ul>
            <li><a href="index.html">Home | בית</a></li>
            <li><a href="breakfast.html">Breakfast | ארוחת בוקר</a></li>
            <li><a href="mains.html">Main Dishes | מנות עיקריות</a></li>
            <li><a href="sides.html">Side Dishes | תוספות</a></li>
            <li><a href="baking.html">Baking | אפיה</a></li>
            <li><a href="all-recipes.html">All Recipes | כל המתכונים</a></li>
        </ul>
    </nav>
`;

const footerComponent = `
    <footer class="footer">
        <p>Shai | שי | Copyright © 2024</p>
    </footer>
`;

// Print Recipe
function addPrintButton() {
    const recipeHeader = document.querySelector('.recipe-header');
    if (!recipeHeader) return;

    const printButton = document.createElement('button');
    printButton.className = 'print-button';
    printButton.innerHTML = '🖨️ Print Recipe | הדפס מתכון';
    printButton.onclick = () => window.print();
    
    recipeHeader.appendChild(printButton);
}

// Initialize Components
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

    // Add print button if on recipe page
    if (document.querySelector('.recipe-header')) {
        addPrintButton();
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadComponents);