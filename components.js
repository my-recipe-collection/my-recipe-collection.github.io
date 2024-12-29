// components.js

const headerComponent = `
<header class="header">
        <h1>🍳 My Recipe Collection | אוסף המתכונים שלי 👨‍🍳</h1>
        <p class="subtitle"> Recipes that kids like to make and eat | מתכונים שילדים אוהבים להכין ולאכול </p>
    </header>

    <nav class="nav">
        <ul>
            <li><a href="index.html"><span>Home</span><span>בית</span></a></li>
            <li><a href="breakfast.html"><span>Breakfast</span><span>ארוחת בוקר</span></a></li>
            <li><a href="mains.html"><span>Main Dishes</span><span>מנות עיקריות</span></a></li>
            <li><a href="sides.html"><span>Side Dishes</span><span>תוספות</span></a></li>
            <li><a href="baking.html"><span>Baking</span><span>אפיה</span></a></li>
            <li><a href="all-recipes.html"><span>All Recipes</span><span>כל המתכונים</span></a></li>
        </ul>
    </nav>
`;

const footerComponent = `
    <footer class="footer">
        <p>Rivka Teller et al. | Copyright © 2024</p>
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

function addQuantityToggle() {
    const ingredientsSection = document.querySelector('.ingredients-section');
    if (!ingredientsSection) return;

    // Create toggle container
    const toggleContainer = document.createElement('div');
    toggleContainer.className = 'recipe-quantity-toggle';
    
    // Create toggle button
    const toggle = document.createElement('button');
    toggle.className = 'quantity-toggle-button';
    toggle.innerHTML = '2️⃣ Double Recipe | מתכון כפול';
    toggle.setAttribute('aria-pressed', 'false');

    toggleContainer.appendChild(toggle);
    ingredientsSection.insertBefore(toggleContainer, ingredientsSection.firstChild);

    // Store original values
    const ingredients = document.querySelectorAll('.ingredient-list li');
    const originalAmounts = Array.from(ingredients).map(ing => ing.textContent);
    let originalServings = '';
    
    // Get original serving size
    const metaItems = document.querySelectorAll('.meta-item');
    metaItems.forEach(item => {
        if (item.textContent.includes('Makes') || item.textContent.includes('Serves')) {
            originalServings = item.textContent;
        }
    });

    // Toggle handler
    toggle.addEventListener('click', () => {
        const isDouble = toggle.getAttribute('aria-pressed') === 'false';
        toggle.setAttribute('aria-pressed', isDouble);
        
        if (isDouble) {
            toggle.innerHTML = '1️⃣ Original Recipe | מתכון מקורי';
            // Double the amounts
            ingredients.forEach((ing, index) => {
                const text = originalAmounts[index];
                const newText = text.replace(/\d+(\.\d+)?/g, match => {
                    const num = parseFloat(match);
                    return (num * 2).toFixed(1).replace(/\.0$/, '');
                });
                ing.textContent = newText;
            });
            
            // Update serving size
            metaItems.forEach(item => {
                if (item.textContent.includes('Makes') || item.textContent.includes('Serves')) {
                    item.textContent = item.textContent.replace(/\d+/, match => parseInt(match) * 2);
                }
            });
        } else {
            toggle.innerHTML = '2️⃣ Double Recipe | מתכון כפול';
            // Restore original amounts
            ingredients.forEach((ing, index) => {
                ing.textContent = originalAmounts[index];
            });
            
            // Restore original serving size
            metaItems.forEach(item => {
                if (item.textContent.includes('Makes') || item.textContent.includes('Serves')) {
                    item.textContent = originalServings;
                }
            });
        }
    });
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
        addQuantityToggle();
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadComponents);
