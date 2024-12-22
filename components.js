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
            <li><a href="baking.html">Baking | אפיה </a></li>
            <li><a href="all-recipes.html">All Recipes | כל המתכונים</a></li>
        </ul>
    </nav>
`;

const footerComponent = `
    <footer class="footer">
        <p>Shai | שי | Copyright © 2024</p>
    </footer>
`;

// Recipe Timer
class RecipeTimer {
    constructor(minutes, onComplete) {
        this.totalSeconds = minutes * 60;
        this.remainingSeconds = this.totalSeconds;
        this.onComplete = onComplete;
        this.interval = null;
        this.element = this.createTimerElement();
    }

    createTimerElement() {
        const timerDiv = document.createElement('div');
        timerDiv.className = 'recipe-timer';
        
        const display = document.createElement('span');
        display.className = 'timer-display';
        
        const controls = document.createElement('div');
        controls.className = 'timer-controls';
        
        const startPauseBtn = document.createElement('button');
        startPauseBtn.textContent = '▶️';
        startPauseBtn.onclick = () => this.toggleTimer();
        
        const resetBtn = document.createElement('button');
        resetBtn.textContent = '🔄';
        resetBtn.onclick = () => this.resetTimer();
        
        controls.appendChild(startPauseBtn);
        controls.appendChild(resetBtn);
        
        timerDiv.appendChild(display);
        timerDiv.appendChild(controls);
        
        this.display = display;
        this.startPauseBtn = startPauseBtn;
        this.updateDisplay();
        
        return timerDiv;
    }

    updateDisplay() {
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;
        this.display.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    toggleTimer() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
            this.startPauseBtn.textContent = '▶️';
        } else {
            this.interval = setInterval(() => {
                this.remainingSeconds--;
                this.updateDisplay();
                
                if (this.remainingSeconds <= 0) {
                    clearInterval(this.interval);
                    this.interval = null;
                    this.onComplete?.();
                    this.startPauseBtn.textContent = '▶️';
                }
            }, 1000);
            this.startPauseBtn.textContent = '⏸️';
        }
    }

    resetTimer() {
        clearInterval(this.interval);
        this.interval = null;
        this.remainingSeconds = this.totalSeconds;
        this.updateDisplay();
        this.startPauseBtn.textContent = '▶️';
    }
}

// Cooking Mode
function enableCookingMode() {
    const recipeContent = document.querySelector('.main-content');
    if (!recipeContent) return;

    const toggle = document.createElement('button');
    toggle.className = 'cooking-mode-toggle';
    toggle.innerHTML = '👨‍🍳 Cooking Mode | מצב בישול';
    
    toggle.onclick = () => {
        document.body.classList.toggle('cooking-mode');
        if (document.body.classList.contains('cooking-mode')) {
            const steps = document.querySelectorAll('.instruction-step');
            steps.forEach((step, index) => {
                if (index === 0) step.classList.add('active-step');
                
                // Add navigation buttons
                const navButtons = document.createElement('div');
                navButtons.className = 'step-navigation';
                
                if (index > 0) {
                    const prevBtn = document.createElement('button');
                    prevBtn.textContent = '⬅️ Previous | הקודם';
                    prevBtn.onclick = () => navigateSteps(index - 1);
                    navButtons.appendChild(prevBtn);
                }
                
                if (index < steps.length - 1) {
                    const nextBtn = document.createElement('button');
                    nextBtn.textContent = 'Next | הבא ➡️';
                    nextBtn.onclick = () => navigateSteps(index + 1);
                    navButtons.appendChild(nextBtn);
                }
                
                step.appendChild(navButtons);
            });
        } else {
            // Clean up navigation when exiting cooking mode
            document.querySelectorAll('.step-navigation').forEach(nav => nav.remove());
            document.querySelectorAll('.active-step').forEach(step => 
                step.classList.remove('active-step'));
        }
    };
    
    document.querySelector('.recipe-meta')?.appendChild(toggle);
}

function navigateSteps(targetIndex) {
    document.querySelectorAll('.instruction-step').forEach((step, index) => {
        step.classList.toggle('active-step', index === targetIndex);
    });
}

// Print Recipe
function addPrintButton() {
    const recipeHeader = document.querySelector('.recipe-header');
    if (!recipeHeader) return;

    const printButton = document.createElement('button');
    printButton.className = 'print-button';
    printButton.innerHTML = '🖨️ Print Recipe | הדפס מתכון';
    printButton.onclick = () => {
        document.body.classList.add('print-mode');
        window.print();
        document.body.classList.remove('print-mode');
    };
    
    recipeHeader.appendChild(printButton);
}

// Initialize Components
function loadComponents() {
    // Load header
    const headerPlaceholder = document.querySelector('#header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerComponent;
    }