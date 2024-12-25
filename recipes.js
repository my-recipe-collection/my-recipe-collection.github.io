// recipes.js
const recipes = [
    {
    id: "gingersnap-cookies",
    category: "baking",
    dateAdded: "2024-12-25",
    image: "/api/placeholder/400/300",
    title: {
        en: "Gingersnap Cookies",
        he: "עוגיות ג'ינג'ר פריכות"
    },
    description: {
        en: "Crispy, spicy cookies with the perfect blend of ginger and cinnamon!",
        he: "עוגיות פריכות עם שילוב מושלם של ג'ינג'ר וקינמון!"
    }
},
    {
    id: "potato-latkes",
    category: "sides",
    dateAdded: "2024-12-25",
    image: "/api/placeholder/400/300",
    title: {
        en: "Classic Potato Latkes",
        he: "לביבות תפוחי אדמה קלאסיות"
    },
    description: {
        en: "Crispy, golden potato pancakes - perfect as a side dish!",
        he: "לביבות תפוחי אדמה פריכות וזהובות - מושלמות כתוספת!"
    }
},
    {
    id: "whole-wheat-pancakes",
    category: "breakfast",
    dateAdded: "2024-12-23",
    image: "/api/placeholder/400/300",
    title: {
        en: "100% Whole Wheat Pancakes",
        he: "פנקייק מקמח מלא"
    },
    description: {
        en: "Healthy and delicious whole wheat pancakes - perfect for breakfast!",
        he: "פנקייק בריא וטעים מקמח מלא - מושלם לארוחת בוקר!"
    }
    },
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
        category: "mains",
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
        en: "Cheesecake with Fruit Topping",
        he: "עוגת גבינה עם ציפוי פירות"
    },
    description: {
        en: "Creamy cheesecake topped with fresh berry compote - perfect for any occasion!",
        he: "עוגת גבינה קרמית עם ציפוי פירות יער - מושלמת לכל אירוע!"
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

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    populateRecentRecipes();
});
