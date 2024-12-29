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

    // Helper function to convert mixed number or fraction to decimal
    function toDecimal(amount) {
        // Check if it's a mixed number (e.g., "1 1/2")
        if (amount.includes(' ')) {
            const [whole, fraction] = amount.split(' ');
            const [numerator, denominator] = fraction.split('/').map(Number);
            return parseInt(whole) + (numerator / denominator);
        }
        // Check if it's a fraction (e.g., "1/2")
        if (amount.includes('/')) {
            const [numerator, denominator] = amount.split('/').map(Number);
            return numerator / denominator;
        }
        // Regular number
        return parseFloat(amount);
    }

    // Helper function to convert decimal to mixed number or fraction
    function toFraction(decimal) {
        // Common fractions we want to preserve
        const commonFractions = {
            0.25: '1/4',
            0.5: '1/2',
            0.75: '3/4',
            0.125: '1/8',
            0.375: '3/8',
            0.625: '5/8',
            0.875: '7/8',
            0.333: '1/3',
            0.667: '2/3'
        };

        // Get the whole number part
        const whole = Math.floor(decimal);
        const fraction = decimal - whole;

        // If it's a whole number, return it
        if (fraction === 0) return whole.toString();

        // Check if the fraction part matches a common fraction
        for (let [dec, frac] of Object.entries(commonFractions)) {
            if (Math.abs(fraction - parseFloat(dec)) < 0.01) {
                return whole > 0 ? `${whole} ${frac}` : frac;
            }
        }

        // If not a common fraction, return as decimal
        return decimal.toFixed(1).replace(/\.0$/, '');
    }

    // Toggle handler
    toggle.addEventListener('click', () => {
        const isDouble = toggle.getAttribute('aria-pressed') === 'false';
        toggle.setAttribute('aria-pressed', isDouble);
        
if (isDouble) {
    toggle.innerHTML = `
        <div class="toggle-status">
            <div>Recipe × 2 | מתכון × 2</div>
            <div class="toggle-action">Click to halve | לחץ לחצי ⬇️</div>
        </div>
    `;
} else {
    toggle.innerHTML = `
        <div class="toggle-status">
            <div>Recipe × 1 | מתכון × 1</div>
            <div class="toggle-action">Click to double | לחץ להכפלה ⬇️</div>
        </div>
    `;
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
