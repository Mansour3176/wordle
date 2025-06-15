// Game configuration
const ROWS = 6;
const COLS = 5;
let currentRow = 0;
let currentCol = 0;
let gameOver = false;
let currentGuess = [];
let allGuesses = [];
let letterStates = {}; // To track the state of each letter in the keyboard

// DOM elements
const board = document.getElementById('board');
const messageEl = document.querySelector('.message');
const keyboard = document.querySelector('.keyboard');

// Initialize the game board
function initBoard() {
    board.innerHTML = '';
    for (let row = 0; row < ROWS; row++) {
        const rowEl = document.createElement('div');
        rowEl.className = 'row';
        for (let col = 0; col < COLS; col++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.dataset.state = 'empty';
            rowEl.appendChild(tile);
        }
        board.appendChild(rowEl);
    }
}

// Get the current row element
function getCurrentRowEl() {
    return board.children[currentRow];
}

// Get all tile elements for the current row
function getCurrentTiles() {
    return Array.from(getCurrentRowEl().children);
}

// Add a letter to the current guess
function addLetter(letter) {
    if (currentCol < COLS && !gameOver) {
        const tiles = getCurrentTiles();
        tiles[currentCol].textContent = letter;
        tiles[currentCol].dataset.state = 'active';
        currentGuess.push(letter);
        currentCol++;
    }
}

// Remove the last letter from the current guess
function removeLetter() {
    if (currentCol > 0 && !gameOver) {
        currentCol--;
        const tiles = getCurrentTiles();
        tiles[currentCol].textContent = '';
        tiles[currentCol].dataset.state = 'empty';
        currentGuess.pop();
    }
}

// Check if the guess is valid
function isValidWord(word) {
    return VALID_WORDS.includes(word);
}

// Save the current game state
function saveGameState() {
    const gameState = {
        currentRow,
        currentCol,
        currentGuess,
        allGuesses: [...allGuesses],
        letterStates: {...letterStates},
        gameOver
    };
    localStorage.setItem('gameState', JSON.stringify(gameState));
}

// Load the saved game state
function loadGameState() {
    const savedState = localStorage.getItem('gameState');
    if (!savedState) return;
    
    try {
        const state = JSON.parse(savedState);
        currentRow = state.currentRow || 0;
        currentCol = state.currentCol || 0;
        currentGuess = state.currentGuess || [];
        allGuesses = state.allGuesses || [];
        letterStates = state.letterStates || {};
        gameOver = state.gameOver || false;
        
        // Rebuild the board based on saved state
        rebuildBoard();
        updateKeyboardStateFromSaved();
    } catch (e) {
        console.error('Failed to load game state:', e);
    }
}

// Rebuild the board from saved state
function rebuildBoard() {
    // Clear the board
    const board = document.getElementById('board');
    board.innerHTML = '';
    
    // Rebuild all rows and tiles
    for (let row = 0; row < ROWS; row++) {
        const rowEl = document.createElement('div');
        rowEl.className = 'row';
        
        for (let col = 0; col < COLS; col++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            
            // If this tile was part of a previous guess, show it
            if (row < currentRow || (row === currentRow && col < currentCol)) {
                const guessIndex = row < currentRow ? row : currentRow;
                const guess = allGuesses[guessIndex] || [];
                if (guess[col]) {
                    tile.textContent = guess[col];
                    tile.dataset.state = getTileState(guess[col], col, guess.join(''));
                }
            } else if (row === currentRow && col < currentCol) {
                // Current guess in progress
                tile.textContent = currentGuess[col];
                tile.dataset.state = 'active';
            } else {
                tile.dataset.state = 'empty';
            }
            
            rowEl.appendChild(tile);
        }
        
        board.appendChild(rowEl);
    }
}

// Get the state of a tile based on the guess
function getTileState(letter, position, guess) {
    if (!letter) return 'empty';
    
    if (TARGET_WORD[position] === letter) {
        return 'correct';
    } else if (TARGET_WORD.includes(letter)) {
        // Count how many times this letter appears in the target word
        const targetCount = TARGET_WORD.split('').filter(l => l === letter).length;
        // Count how many times we've marked this letter as correct
        const correctCount = Array.from({length: COLS})
            .map((_, i) => TARGET_WORD[i] === letter && guess[i] === letter ? 1 : 0)
            .reduce((a, b) => a + b, 0);
        // Count how many times this letter appears before current position
        const beforeCount = guess.slice(0, position).filter(l => l === letter).length;
        
        // Only mark as present if we haven't exceeded the number of this letter in the target
        if (beforeCount < targetCount - correctCount) {
            return 'present';
        }
    }
    
    return 'absent';
}

// Update keyboard state from saved state
function updateKeyboardStateFromSaved() {
    Object.entries(letterStates).forEach(([letter, state]) => {
        updateKeyboardState(letter, state);
    });
}

// Check the current guess against the target word
function checkGuess() {
    if (currentCol !== COLS) return false;
    
    const guess = currentGuess.join('');
    
    if (!isValidWord(guess)) {
        showMessage('Not in word list');
        shakeRow();
        return false;
    }
    
    // Save the game state after each valid guess
    allGuesses.push([...currentGuess]);
    saveGameState();
    
    const target = TARGET_WORD;
    const result = [];
    const targetLetters = target.split('');
    const guessLetters = guess.split('');
    
    // First pass: mark correct letters
    for (let i = 0; i < COLS; i++) {
        if (guessLetters[i] === targetLetters[i]) {
            result[i] = 'correct';
            targetLetters[i] = null; // Mark as used
            updateKeyboardState(guessLetters[i], 'correct');
        }
    }
    
    // Second pass: mark present and absent letters
    for (let i = 0; i < COLS; i++) {
        if (result[i]) continue; // Skip already marked as correct
        
        const index = targetLetters.indexOf(guessLetters[i]);
        if (index !== -1) {
            result[i] = 'present';
            targetLetters[index] = null; // Mark as used
            updateKeyboardState(guessLetters[i], 'present');
        } else {
            result[i] = 'absent';
            updateKeyboardState(guessLetters[i], 'absent');
        }
    }
    
    // Update the UI with the results
    updateTiles(result);
    
    // Check for win
    if (result.every(state => state === 'correct')) {
        gameOver = true;
        showMessage('You won! 🎉', 3000);
        return true;
    }
    
    // Move to next row
    currentRow++;
    currentCol = 0;
    currentGuess = [];
    
    // Check for game over
    if (currentRow === ROWS) {
        gameOver = true;
        showMessage(`Game Over! The word was ${TARGET_WORD}`, 3000);
    }
    
    return false;
}

// Update the keyboard state based on the current guess
function updateKeyboardState(letter, state) {
    const key = document.querySelector(`button[data-key="${letter}"]`);
    if (!key) return;
    
    // Don't override correct state with present/absent
    if (letterStates[letter] === 'correct') return;
    if (letterStates[letter] === 'present' && state === 'absent') return;
    
    letterStates[letter] = state;
    key.dataset.state = state;
}

// Update the tiles with the results
function updateTiles(result) {
    const tiles = getCurrentTiles();
    tiles.forEach((tile, index) => {
        setTimeout(() => {
            tile.dataset.state = result[index];
            tile.classList.add('flip');
        }, 100 * index);
    });
}

// Shake the current row to indicate invalid input
function shakeRow() {
    const row = getCurrentRowEl();
    row.classList.add('shake');
    setTimeout(() => row.classList.remove('shake'), 500);
}

// Show a message to the user
function showMessage(text, duration = 2000) {
    messageEl.textContent = text;
    if (duration) {
        setTimeout(() => {
            if (messageEl.textContent === text) {
                messageEl.textContent = '';
            }
        }, duration);
    }
}

// Handle keyboard input
document.addEventListener('keydown', (e) => {
    if (gameOver) return;
    
    const key = e.key.toUpperCase();
    
    if (key === 'ENTER') {
        checkGuess();
    } else if (key === 'BACKSPACE' || key === 'DELETE') {
        removeLetter();
    } else if (/^[A-Z]$/.test(key) && key.length === 1) {
        addLetter(key);
    }
});

// Handle virtual keyboard clicks
keyboard.addEventListener('click', (e) => {
    if (gameOver) return;
    
    const target = e.target;
    
    if (target.dataset.key) {
        addLetter(target.dataset.key);
    } else if (target.dataset.action === 'enter') {
        checkGuess();
    } else if (target.dataset.action === 'delete') {
        removeLetter();
    }
});

// Theme handling
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeIcon.textContent = savedTheme === 'dark' ? '🌞' : '🌙';
    } else if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '🌞';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.textContent = '🌙';
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeIcon.textContent = newTheme === 'dark' ? '🌞' : '🌙';
    });
    
    // Listen for system theme changes
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            themeIcon.textContent = newTheme === 'dark' ? '🌞' : '🌙';
        }
    });
}

// Update the countdown timer
function updateCountdown() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0); // Next midnight
    
    const diff = tomorrow - now;
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    const countdownEl = document.getElementById('countdown');
    if (countdownEl) {
        countdownEl.textContent = `Next word in: ${hours}h ${minutes}m ${seconds}s`;
    }
    
    return diff;
}

// Initialize the game
function initGame() {
    initBoard();
    initTheme();
    currentRow = 0;
    currentCol = 0;
    currentGuess = [];
    allGuesses = [];
    letterStates = {}; // To track the state of each letter in the keyboard
    gameOver = false;
    
    // Start the countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Check if we need to clear the game state for a new day
    const lastPlayed = localStorage.getItem('lastPlayed');
    const today = new Date().toDateString();
    
    if (lastPlayed !== today) {
        // Clear the game state for a new day
        localStorage.removeItem('gameState');
        localStorage.setItem('lastPlayed', today);
    }
    
    // Load saved game state if available
    loadGameState();
}

// Start the game
initGame();

// Add event listener for the restart button (if you add one)
// document.getElementById('restart-btn').addEventListener('click', initGame);
