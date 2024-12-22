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

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

function createRecipeCard(recipe) {
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
        </a>
    </article>
    `;
}

function populateRecentRecipes() {
    const recentRecipesContainer = document.querySelector('.recipe-grid');
    if (!recentRecipesContainer) return;

    const recentRecipes = [...recipes]
        .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
        .slice(0, 6);

    recentRecipesContainer.innerHTML = recentRecipes
        .map(recipe => createRecipeCard(recipe))
        .join('');
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
}

// Search functionality for all-recipes page
function initializeSearch() {
    if (window.location.pathname.includes('all-recipes.html')) {
        const mainContent = document.querySelector('.main-content');
        const searchBox = document.createElement('div');
        searchBox.className = 'search-container';
        searchBox.innerHTML = `
            <input type="text" 
                   id="recipe-search" 
                   placeholder="Search recipes | חיפוש מתכונים"
                   class="recipe-search">
        `;
        
        const recipeGrid = document.querySelector('.recipe-grid');
        mainContent.insertBefore(searchBox, recipeGrid);

        const searchInput = document.getElementById('recipe-search');
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredRecipes = recipes
                .filter(recipe => 
                    recipe.title.en.toLowerCase().includes(searchTerm) ||
                    recipe.title.he.toLowerCase().includes(searchTerm) ||
                    recipe.description.en.toLowerCase().includes(searchTerm) ||
                    recipe.description.he.toLowerCase().includes(searchTerm)
                )
                .sort((a, b) => a.title.en.localeCompare(b.title.en));

            recipeGrid.innerHTML = filteredRecipes
                .map(recipe => createRecipeCard(recipe))
                .join('');
        });

        // Initial population of all recipes in alphabetical order
        const sortedRecipes = [...recipes].sort((a, b) => 
            a.title.en.localeCompare(b.title.en));
        recipeGrid.innerHTML = sortedRecipes
            .map(recipe => createRecipeCard(recipe))
            .join('');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeSearch();
    populateRecentRecipes();
});