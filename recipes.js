// recipes.js 
const recipes = [ 
    {
    id: "ultimate-oreo-cake",
    category: "baking",
    dateAdded: "2025-06-19",
    image: "/api/placeholder/400/300",
    title: {
        en: "Ultimate Oreo Cake",
        he: "עוגת אוריאו מושלמת"
    },
    description: {
        en: "Rich, moist chocolate cake packed with Oreo cookies and topped with creamy Oreo buttercream!",
        he: "עוגת שוקולד עשירה ולחה עם עוגיות אוריאו וקרם חמאה אוריאו!"
    }
    },
    {
    id: "quick-focaccia",
    category: "baking", 
    dateAdded: "2025-06-03",
    image: "/api/placeholder/400/300",
    title: {
        en: "Quick Focaccia",
        he: "פוקצ'ה מהירה"
    },
    description: {
        en: "Delicious homemade focaccia ready in just 90 minutes!",
        he: "פוקצ'ה ביתית טעימה מוכנה תוך 90 דקות בלבד!"
    }
    },
    {
    id: "brownie-hamantaschen",
    category: "baking",
    dateAdded: "2025-03-05",
    image: "/api/placeholder/400/300",
    title: {
        en: "Brownie Hamantaschen",
        he: "אוזני המן בראוניז"
    },
    description: {
        en: "Delicious three-cornered cookies filled with rich brownie mixture and drizzled with chocolate!",
        he: "עוגיות משולשות טעימות במילוי בראוניז עשיר ומקושטות בשוקולד!"
    }
},
    {
    id: "hamburger-soup",
    category: "mains",
    dateAdded: "2025-01-21",
    image: "/api/placeholder/400/300",
    title: {
        en: "Hamburger Soup",
        he: "מרק המבורגר"
    },
    description: {
        en: "A hearty and warming soup loaded with ground beef and vegetables!",
        he: "מרק מחמם ומשביע עם בשר טחון וירקות!"
    }
    },
    {
    id: "rustic-bread",
    category: "baking",
    dateAdded: "2025-01-19",
    image: "/api/placeholder/400/300",
    title: {
        en: "Easy No-Knead Rustic Bread",
        he: "לחם כפרי קל ללא לישה"
    },
    description: {
        en: "Simple, rustic bread that requires no kneading - perfect for beginners!",
        he: "לחם כפרי פשוט שלא דורש לישה - מושלם למתחילים!"
    }
    },
    {
    id: "sprinkle-cookies",
    category: "baking",
    dateAdded: "2025-01-16",
    image: "/api/placeholder/400/300",
    title: {
        en: "Sprinkle Cookies",
        he: "עוגיות עם סוכריות צבעוניות"
    },
    description: {
        en: "Simple and fun cookies topped with colorful sprinkles - perfect for kids!",
        he: "עוגיות פשוטות וכיפיות עם סוכריות צבעוניות - מושלמות לילדים!"
    }
},
    {
    id: "lemon-pound-cake",
    category: "baking",
    dateAdded: "2025-01-10",
    image: "/api/placeholder/400/300",
    title: {
        en: "Glazed Lemon Pound Cake",
        he: "עוגת לימון"
    },
    description: {
        en: "Moist, lemony pound cake with a sweet-tart glaze - makes two loaves!",
        he: "עוגת לימון עסיסית עם ציפוי מתוק-חמצמץ - מתכון לשתי עוגות!"
    }
    },
    {
    id: "easy-spicy-maple-wings",
    category: "mains",
    dateAdded: "2025-01-10",
    image: "/api/placeholder/400/300",
    title: {
        en: "Easy Spicy Maple Wings",
        he: "כנפיים חריפות במייפל - הכי קל שיש"
    },
    description: {
        en: "Super easy one-pan spicy wings - just pour and bake!",
        he: "כנפיים חריפות בתבנית אחת - פשוט שופכים ואופים!"
    }
    },
    {
    id: "tastiest-spelt-challah",
    category: "baking",
    dateAdded: "2024-12-27",
    image: "/api/placeholder/400/300",
    title: {
        en: "The Tastiest Spelt Challah",
        he: "חלת הכוסמין הכי טעימה"
    },
    description: {
        en: "Delicious challah made with 80% spelt flour",
        he: "חלת כוסמין טעימה במיוחד"
    }
},
    {
    id: "chocolate-babka",
    category: "baking",
    dateAdded: "2025-01-09",
    image: "/api/placeholder/400/300",
    title: {
        en: "Chocolate Babka with Crumble",
        he: "בבקה שוקולד עם שטרויזל"
    },
    description: {
        en: "Rich chocolate-filled babka topped with a delicious crumble - perfect for any occasion!",
        he: "בבקה עשירה במלית שוקולד ושטרויזל מפנק - מושלמת לכל אירוע!"
    }
    },
    {
        id: "grape-juice-chicken",
    category: "mains",
    dateAdded: "2024-12-27",
    image: "/api/placeholder/400/300",
    title: {
        en: "Sweet and Tangy Grape Juice Chicken",
        he: "עוף במיץ ענבים"
    },
    description: {
        en: "An easy one-pan chicken dish with grape juice and vinegar!",
        he: "מתכון קל להכנה בתבנית אחת עם מיץ ענבים וחומץ!"
    },
    },
    {
    id: "sugar-cookies", 
    category: "baking",
    dateAdded: "2024-12-26",
    image: "/api/placeholder/400/300",
    title: {
        en: "Easy Sugar Cookies",
        he: "עוגיות סוכר קלות"
    },
    description: {
        en: "No margarine, no chilling time needed! Perfect for Chanukah or any occasion.",
        he: "ללא מרגרינה, ללא צורך בקירור! מושלמות לחנוכה או לכל אירוע."
    }
},
    {
    id: "chicken-curry",
    category: "mains",
    dateAdded: "2024-12-25",
    image: "/api/placeholder/400/300",
    title: {
        en: "Easy Chicken or Turkey Curry",
        he: "קארי עוף או הודו"
    },
    description: {
        en: "A simple and delicious curry with chicken or turkey - perfect with rice!",
        he: "קארי פשוט וטעים עם עוף או הודו - מושלם עם אורז!"
    }
},
    {
    id: "yemenite-meat-soup",
    category: "mains",
    dateAdded: "2024-12-25",
    image: "/api/placeholder/400/300",
    title: {
        en: "Yemenite Meat Soup",
        he: "מרק בשר תימני"
    },
    description: {
        en: "Traditional Yemenite soup with beef, vegetables and aromatic hawaij spices",
        he: "מרק תימני מסורתי עם בשר בקר, ירקות ותבלין חוויאג' ארומטי"
    }
},
    {
    id: "whole-wheat-crepes",
    category: "breakfast",
    dateAdded: "2024-12-25",
    image: "/api/placeholder/400/300",
    title: {
        en: "Whole Wheat Crepes",
        he: "קרפ מקמח מלא"
    },
    description: {
        en: "Healthy and delicious whole wheat crepes - perfect for breakfast or brunch!",
        he: "קרפ מקמח מלא בריא וטעים - מושלם לארוחת בוקר או בראנץ'!"
    }
},
    {
    id: "resek-tomato-dip",
    category: "sides",
    dateAdded: "2024-12-25",
    image: "/api/placeholder/400/300",
    title: {
        en: "Resek (Tomato Dip)",
        he: "רסק עגבניות ביתי"
    },
    description: {
        en: "Homemade tomato dip - perfect for eating with challah!",
        he: "ממרח עגבניות ביתי - מצוין עם חלה!"
    }
},
    {
    id: "honey-garlic-green-beans",
    category: "sides",
    dateAdded: "2024-12-25",
    image: "/api/placeholder/400/300",
    title: {
        en: "Honey Garlic Green Beans",
        he: "שעועית ירוקה ברוטב דבש ושום"
    },
    description: {
        en: "Quick and flavorful side dish with a perfect balance of sweet and savory!",
        he: "תוספת מהירה וטעימה עם איזון מושלם בין מתוק למלוח!"
    }
},
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
                </div>
                <div class="hebrew-content">
                    <h3>${recipe.title.he}</h3>
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
