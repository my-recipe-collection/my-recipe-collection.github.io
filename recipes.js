// recipes.js
const recipes = [
    {
    id: "homemade-donuts",
    category: "baking",
    dateAdded: "2024-12-22",
    image: "/api/placeholder/400/300",
    title: {
        en: "Homemade Donuts",
        he: "סופגניות ביתיות"
    },
    description: {
        en: "Fluffy, homemade donuts with a perfect golden crust!",
        he: "סופגניות ביתיות אווריריות עם קראסט זהוב מושלם!"
    }
    },
    {
        id: "sriracha-honey-chicken",
        category: "dinner",
        dateAdded: "2024-12-22",
        image: "/api/placeholder/400/300",
        title: {
            en: "Mild Sriracha Honey Chicken",
            he: "עוף בסריראצ'ה ודבש עדין"
        },
        description: {
            en: "Kid-friendly sweet chicken with a hint of sriracha - perfect for the whole family!",
            he: "עוף מתוק עם נגיעה של סריראצ'ה - מושלם לכל המשפחה!"
        }
    },
    {
    id: "simple-cheesecake",
    category: "baking",
    dateAdded: "2024-12-22",
    image: "/api/placeholder/400/300",
    title: {
        en: "Simple Israeli Cheesecake",
        he: "עוגת גבינה פשוטה"
    },
    description: {
        en: "Classic Israeli-style cheesecake made with white cheese - perfect for any occasion!",
        he: "עוגת גבינה קלאסית בסגנון ישראלי - מושלמת לכל אירוע!"
    }
    },
    {
    id: "powdered-sugar-cookies",
    category: "baking",
    dateAdded: "2024-12-13",
    image: "/api/placeholder/400/300",
    title: {
        en: "Easy Powdered Sugar Cookies",
        he: "עוגיות אבקת סוכר קלות"
    },
    description: {
        en: "Simple, delicious cookies made with powdered sugar - no margarine needed!",
        he: "עוגיות פשוטות וטעימות עם אבקת סוכר - ללא מרגרינה!"
    }
},
    {
        id: "white-chocolate-cookies",
        category: "baking",
        dateAdded: "2024-12-20",
        image: "/api/placeholder/400/300",
        title: {
            en: "White Chocolate Chip Cookies",
            he: "עוגיות שוקולד צ׳פס לבן"
        },
        description: {
            en: "White chocolate chip cookies that melt in your mouth!",
            he: "עוגיות שוקולד צ׳יפס לבן שנמסות בפה!"
        }
    }
];

// Recipe Data Management
function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

function createRecipeCard(recipe) {
    const avgRating = calculateAverageRating(recipe.ratings || []);
    const ratingStars = '⭐'.repeat(Math.round(avgRating));
    
    return `
    <article class="recipe-card">
        <a href="${recipe.id}.html">
            <img src="${recipe.image}" alt="${recipe.title.en}">
            <div class="recipe-date">${formatDate(recipe.dateAdded)}</div>
            <div class="bilingual-grid">
                <div class="english-content">
                    <h3>${recipe.title.en}</h3>
                    <p>${recipe.description.en}</p>
                </div>
                <div class="hebrew-content">
                    <h3>${recipe.title.he}</h3>
                    <p>${recipe.description.he}</p>
                </div>
            </div>
            <div class="recipe-rating" data-recipe-id="${recipe.id}">
                ${ratingStars || '☆☆☆☆☆'}
                <span class="rating-count">${recipe.ratings?.length || 0} ratings</span>
            </div>
        </a>
    </article>
    `;
}

// Page Population Functions
function populateRecentRecipes() {
    const recentRecipesContainer = document.querySelector('.recipe-grid');
    if (!recentRecipesContainer) return;

    const recentRecipes = [...recipes]
        .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
        .slice(0, 6);

    recentRecipesContainer.innerHTML = recentRecipes
        .map(recipe => createRecipeCard(recipe))
        .join('');
    
    initializeInteractiveFeatures();
}

function populateCategoryPage(category) {
    const categoryContainer = document.querySelector('.recipe-grid');
    if (!categoryContainer) return;
    
    const categoryRecipes = recipes
        .filter(recipe => recipe.category === category)
        .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    
    categoryContainer.innerHTML = categoryRecipes
        .map(recipe => createRecipeCard(recipe))
        .join('');
    
    initializeInteractiveFeatures();
}

// Search Functionality
function searchRecipes(query) {
    const searchTerm = query.toLowerCase();
    const results = recipes.filter(recipe => 
        recipe.title.en.toLowerCase().includes(searchTerm) ||
        recipe.title.he.toLowerCase().includes(searchTerm) ||
        recipe.description.en.toLowerCase().includes(searchTerm) ||
        recipe.description.he.toLowerCase().includes(searchTerm)
    );
    
    const container = document.querySelector('.recipe-grid');
    if (container) {
        container.innerHTML = results
            .map(recipe => createRecipeCard(recipe))
            .join('') || '<p>No recipes found | לא נמצאו מתכונים</p>';
    }
    
    initializeInteractiveFeatures();
}

// Rating System
function calculateAverageRating(ratings) {
    if (!ratings || ratings.length === 0) return 0;
    return ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
}

function rateRecipe(recipeId, rating) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (recipe) {
        if (!recipe.ratings) recipe.ratings = [];
        recipe.ratings.push(rating);
        
        // Update local storage
        localStorage.setItem('recipeRatings', JSON.stringify(
            recipes.reduce((acc, r) => ({
                ...acc,
                [r.id]: r.ratings
            }), {})
        ));
        
        // Update UI
        const ratingElement = document.querySelector(`[data-recipe-id="${recipeId}"]`);
        if (ratingElement) {
            const avgRating = calculateAverageRating(recipe.ratings);
            ratingElement.innerHTML = `
                ${'⭐'.repeat(Math.round(avgRating))}
                <span class="rating-count">${recipe.ratings.length} ratings</span>
            `;
        }
    }
}

// Serving Size Adjustment
let servingMultiplier = 1;

function adjustServings(change) {
    const newServings = Math.max(1, servingMultiplier + change);
    if (newServings === servingMultiplier) return;
    
    servingMultiplier = newServings;
    document.getElementById('servingCount').textContent = servingMultiplier;
    
    // Update ingredient quantities
    document.querySelectorAll('.ingredient-list li').forEach(item => {
        const originalText = item.getAttribute('data-original') || item.textContent;
        if (!item.getAttribute('data-original')) {
            item.setAttribute('data-original', originalText);
        }
        
        const quantity = originalText.match(/^([\d./]+)/);
        if (quantity) {
            const originalQuantity = eval(quantity[1]);
            const newQuantity = (originalQuantity * servingMultiplier).toFixed(2);
            item.textContent = originalText.replace(/^[\d./]+/, newQuantity);
        }
    });
}

// Initialize Interactive Features
function initializeInteractiveFeatures() {
    // Add search if not exists
    if (!document.getElementById('recipe-search')) {
        const searchContainer = document.querySelector('.main-content');
        if (searchContainer) {
            const searchBox = document.createElement('div');
            searchBox.className = 'search-box';
            searchBox.innerHTML = `
                <input type="text" id="recipe-search" 
                    placeholder="Search recipes | חיפוש מתכונים"
                    oninput="searchRecipes(this.value)">
            `;
            searchContainer.insertBefore(searchBox, searchContainer.firstChild);
        }
    }
    
    // Initialize ratings
    document.querySelectorAll('.recipe-rating').forEach(ratingElement => {
        const recipeId = ratingElement.dataset.recipeId;
        ratingElement.onclick = (e) => {
            e.preventDefault();
            const rating = prompt('Rate this recipe (1-5) | דרג מתכון זה (1-5)', '5');
            if (rating && !isNaN(rating) && rating >= 1 && rating <= 5) {
                rateRecipe(recipeId, Number(rating));
            }
        };
    });
}

// Load saved ratings from localStorage
function loadSavedRatings() {
    const savedRatings = JSON.parse(localStorage.getItem('recipeRatings') || '{}');
    Object.entries(savedRatings).forEach(([recipeId, ratings]) => {
        const recipe = recipes.find(r => r.id === recipeId);
        if (recipe) recipe.ratings = ratings;
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadSavedRatings();
    if (document.querySelector('.recipe-grid')) {
        initializeInteractiveFeatures();
    }
});