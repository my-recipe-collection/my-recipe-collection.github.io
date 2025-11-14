// recipes.js 
const recipes = [
    {
    id: "courgettes-tomato-sauce",
    category: "sides",
    dateAdded: "2025-11-14",
    image: "/api/placeholder/400/300",
    title: {
        en: "Courgettes in Tomato Sauce with Olives",
        he: "קישואים ברוטב עגבניות עם זיתים"
    },
    description: {
        en: "Tender courgettes in a flavorful tomato sauce with olives - perfect hot or cold!",
        he: "קישואים רכים ברוטב עגבניות עם זיתים - מושלם חם או קר!"
    }
},
    {
    id: "unstuffed-cabbage",
    category: "mains",
    dateAdded: "2025-10-06",
    image: "/api/placeholder/400/300",
    title: {
        en: "Unstuffed Cabbage",
        he: "כרוב ממולא לא ממולא"
    },
    description: {
        en: "All the flavors of stuffed cabbage without the work!",
        he: "כל הטעמים של כרוב ממולא בלי העבודה!"
    }
    },
    {
    id: "bagels",
    category: "baking",
    dateAdded: "2025-10-01",
    image: "/api/placeholder/400/300",
    title: {
        en: "Bagels",
        he: "בייגלס"
    },
    description: {
        en: "Homemade bagels with the classic boil-then-bake method!",
        he: "בייגלס ביתיים בשיטה הקלאסית של הרתחה ואפייה!"
    }
    },
    {
    id: "one-bowl-cinnamon-swirl-cake",
    category: "baking",
    dateAdded: "2025-09-19",
    image: "/api/placeholder/400/300",
    title: {
        en: "One-Bowl Cinnamon Swirl Cake",
        he: "עוגת קינמון בקערה אחת"
    },
    description: {
        en: "Simple and delicious cinnamon swirl cake made in one bowl!",
        he: "עוגת קינמון פשוטה וטעימה הנעשית בקערה אחת!"
    }
    },
    { id: "apple-crumb-pie",
    category: "baking",
    dateAdded: "2025-09-18",
    image: "/api/placeholder/400/300",
    title: {
        en: "Apple Crumb Pie",
        he: "פאי תפוחים עם פירורים"
    },
    description: {
        en: "Delicious dairy-free apple pie with a perfect crumbly topping - no butter or margarine needed!",
        he: "פאי תפוחים טעים פרווה עם ציפוי פירורים מושלם - ללא חמאה או מרגרינה!"
    }
},
{
    id: "honey-cake",
    category: "baking", 
    dateAdded: "2025-09-18",
    image: "/api/placeholder/400/300",
    title: {
        en: "Majestic and Moist Honey Cake",
        he: "עוגת דבש לחה ומושלמת"
    },
    description: {
        en: "A traditional honey cake that's incredibly moist and flavorful - perfect for holidays!",
        he: "עוגת דבש מסורתית שהיא לחה ומלאת טעם במיוחד - מושלמת לחגים!"
    }
},
    {
    id: "honey-carrot-basmati-rice",
    category: "sides",
    dateAdded: "2025-09-16",
    image: "/api/placeholder/400/300",
    title: {
        en: "Honey Carrot Basmati Rice Pilaf",
        he: "פילאף אורז בסמטי עם גזר ודבש"
    },
    description: {
        en: "Fragrant basmati rice pilaf with sweet shredded carrots, honey, and optional raisins - a perfect side dish!",
        he: "פילאף אורז בסמטי ארומטי עם גזר מגורד מתוק, דבש וצימוקים לא חובה - תוספת מושלמת!"
    }
    },

    {
    id: "lasagna",
    category: "mains",
    dateAdded: "2025-09-15",
    image: "/api/placeholder/400/300",
    title: {
        en: "Fresh Cherry Tomato Lasagna",
        he: "לזניה עם עגבניות שרי טריות"
    },
    description: {
        en: "Delicious vegetarian lasagna with fresh cherry tomatoes and red peppers!",
        he: "לזניה צמחונית טעימה עם עגבניות שרי טריות ופלפלים אדומים!"
    }
    },
    
    {
    id: "hershey-chocolate-cake",
    category: "baking",
    dateAdded: "2025-08-15",
    image: "/api/placeholder/400/300",
    title: {
        en: "Hershey's Perfect Chocolate Cake",
        he: "עוגת שוקולד מושלמת של הרשי"
    },
    description: {
        en: "Rich, moist chocolate cake that's perfect for any celebration!",
        he: "עוגת שוקולד עשירה ולחה שמושלמת לכל חגיגה!"
    }
    },
    {
    id: "pizza-dough",
    category: "mains",
    dateAdded: "2025-07-28",
    image: "/api/placeholder/400/300",
    title: {
        en: "Pizza Dough",
        he: "בצק לפיצה"
    },
    description: {
        en: "Perfect homemade pizza dough recipe for individual pizzas - makes 10-12 personal pies!",
        he: "מתכון מושלם לבצק פיצה ביתי לפיצות אישיות - מספיק ל-10-12 פיצות!"
    }
},
    {
    id: "sushi-rice",
    category: "sides",
    dateAdded: "2025-07-25",
    image: "/api/placeholder/400/300",
    title: {
        en: "Simple Sushi Rice",
        he: "אורז סושי פשוט"
    },
    description: {
        en: "Perfect sushi rice with the right balance of sweetness and acidity!",
        he: "אורז סושי מושלם עם איזון נכון של מתיקות וחומציות!"
    }
    },
    {
    id: "bbq-chicken-rice",
    category: "mains",
    dateAdded: "2025-07-04",
    image: "/api/placeholder/400/300",
    title: {
        en: "BBQ Chicken and Rice",
        he: "עוף בברביקיו עם אורז"
    },
    description: {
        en: "One-pan BBQ chicken and rice with homemade sauce - perfect family dinner!",
        he: "עוף בברביקיו עם אורז בתבנית אחת עם רוטב ביתי - ארוחת משפחה מושלמת!"
    }
},
    {
    id: "potato-kugel",
    category: "sides",
    dateAdded: "2025-07-04",
    image: "/api/placeholder/400/300",
    title: {
        en: "Potato Kugel",
        he: "קוגל תפוחי אדמה"
    },
    description: {
        en: "Traditional golden potato kugel that's crispy outside and tender inside!",
        he: "קוגל תפוחי אדמה מסורתי וזהוב שקריספי מבחוץ ורך מבפנים!"
    }
},
    {
    id: "classic-chicken-soup",
    category: "mains",
    dateAdded: "2025-07-04",
    image: "/api/placeholder/400/300",
    title: {
        en: "Classic Chicken Soup",
        he: "מרק עוף קלאסי"
    },
    description: {
        en: "Comforting homemade chicken soup that's perfect for any season!",
        he: "מרק עוף ביתי מנחם שמושלם לכל עונה!"
    }
},
    {
    id: "shepherds-pie",
    category: "mains",
    dateAdded: "2025-06-25",
    image: "/api/placeholder/400/300",
    title: {
        en: "Shepherd's Pie",
        he: "פאי רועים"
    },
    description: {
        en: "Classic comfort food with seasoned ground beef and creamy mashed potatoes!",
        he: "אוכל נוחות קלאסי עם בשר טחון מתובל ופירה קרמית!"
    }
    },
{
    id: "kneidelach",
    category: "sides",
    dateAdded: "2025-06-20",
    image: "/api/placeholder/400/300",
    title: {
        en: "Kneidelach",
        he: "קניידלך"
    },
    description: {
        en: "Traditional matzo ball soup dumplings - perfect for any soup!",
        he: "קניידלך מסורתיים - מושלמים לכל מרק!"
    }
},
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
    category: "baking",
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
    category: "baking",
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
