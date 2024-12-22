// recipes.js
const recipes = [
    {
        id: "shakshuka",
        category: "breakfast",
        dateAdded: "2024-12-20",
        image: "/api/placeholder/400/300",
        title: {
            en: "Classic Shakshuka",
            he: "שקשוקה קלאסית"
        },
        description: {
            en: "A delicious Israeli breakfast with eggs poached in tomato sauce!",
            he: "ארוחת בוקר ישראלית טעימה עם ביצים מבושלות ברוטב עגבניות!"
        }
    },
    {
        id: "hummus",
        category: "snacks",
        dateAdded: "2024-12-19",
        image: "/api/placeholder/400/300",
        title: {
            en: "Creamy Hummus",
            he: "חומוס קרמי"
        },
        description: {
            en: "The perfect hummus recipe - smooth, creamy, and delicious!",
            he: "מתכון לחומוס מושלם - חלק, קרמי וטעים!"
        }
    },
    {
        id: "chocolate-chip-cookies",
        category: "cakes-cookies",
        dateAdded: "2024-12-18",
        image: "/api/placeholder/400/300",
        title: {
            en: "Chocolate Chip Cookies",
            he: "עוגיות שוקולד צ׳יפס"
        },
        description: {
            en: "Classic chewy chocolate chip cookies that melt in your mouth!",
            he: "עוגיות שוקולד צ׳יפס קלאסיות ונימוחות שנמסות בפה!"
        }
    }
];

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const enDate = date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    const heDate = date.toLocaleDateString('he-IL', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    return `${enDate} | ${heDate}`;
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

    // Sort recipes by date and take the 6 most recent
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

    const categoryRecipes = recipes.filter(recipe => recipe.category === category);
    categoryContainer.innerHTML = categoryRecipes
        .map(recipe => createRecipeCard(recipe))
        .join('');
}
