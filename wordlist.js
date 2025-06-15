// List of valid 5-letter words for the game
const VALID_WORDS = [
    'ABOUT', 'ABOVE', 'ABUSE', 'ACTOR', 'ACUTE', 'ADMIT', 'ADOPT', 'ADULT', 'AFTER', 'AGAIN',
    'AGENT', 'AGREE', 'AHEAD', 'ALARM', 'ALBUM', 'ALERT', 'ALIKE', 'ALIVE', 'ALLOW', 'ALONE',
    'ALONG', 'ALTER', 'AMONG', 'ANGER', 'ANGLE', 'ANGRY', 'APART', 'APPLE', 'APPLY', 'ARISE',
    'ARRAY', 'ASIDE', 'ASSET', 'AUDIO', 'AUDIT', 'AVOID', 'AWARD', 'AWARE', 'BADLY', 'BAKER',
    'BASES', 'BASIC', 'BASIS', 'BEACH', 'BEGAN', 'BEGIN', 'BEGUN', 'BEING', 'BELOW', 'BENCH',
    'BILLY', 'BIRTH', 'BLACK', 'BLAME', 'BLIND', 'BLOCK', 'BLOOD', 'BOARD', 'BOOST', 'BRAIN',
    'BRAND', 'BREAD', 'BREAK', 'BREED', 'BRIEF', 'BRING', 'BROAD', 'BROKE', 'BROWN', 'BUILD',
    'BUILT', 'BUYER', 'CABLE', 'CALIF', 'CARRY', 'CATCH', 'CAUSE', 'CHAIN', 'CHAIR', 'CHART',
    'CHASE', 'CHEAP', 'CHECK', 'CHEST', 'CHIEF', 'CHILD', 'CHINA', 'CHOSE', 'CIVIL', 'CLAIM',
    'CLASS', 'CLEAN', 'CLEAR', 'CLICK', 'CLOCK', 'CLOSE', 'COACH', 'COAST', 'COULD', 'COUNT',
    'COURT', 'COVER', 'CRACK', 'CRAFT', 'CRASH', 'CRAZY', 'CREAM', 'CRIME', 'CROSS', 'CROWD',
    'CROWN', 'CURVE', 'CYCLE', 'DAILY', 'DANCE', 'DATED', 'DEALT', 'DEATH', 'DEBUT', 'DELAY',
    'DEPTH', 'DOING', 'DOUBT', 'DOZEN', 'DRAFT', 'DRAMA', 'DRAWN', 'DREAM', 'DRESS', 'DRILL',
    'DRINK', 'DRIVE', 'DROVE', 'DYING', 'EAGER', 'EARLY', 'EARTH', 'EIGHT', 'ELITE', 'EMPTY',
    'ENEMY', 'ENJOY', 'ENTER', 'ENTRY', 'EQUAL', 'ERROR', 'EVENT', 'EVERY', 'EXACT', 'EXIST',
    'EXTRA', 'FAITH', 'FALSE', 'FAULT', 'FAVOR', 'FIBER', 'FIELD', 'FIFTH', 'FIFTY', 'FIGHT',
    'FINAL', 'FIRST', 'FIXED', 'FLASH', 'FLEET', 'FLOOR', 'FLUID', 'FOCUS', 'FORCE', 'FORTH',
    'FORTY', 'FORUM', 'FOUND', 'FRAME', 'FRANK', 'FRAUD', 'FRESH', 'FRONT', 'FRUIT', 'FULLY',
    'FUNNY', 'GIANT', 'GIVEN', 'GLASS', 'GLOBE', 'GOING', 'GRACE', 'GRADE', 'GRAND', 'GRANT',
    'GRASS', 'GREAT', 'GREEN', 'GROSS', 'GROUP', 'GROWN', 'GUEST', 'GUIDE', 'HAPPY', 'HARRY',
    'HEART', 'HEAVY', 'HENCE', 'HENRY', 'HORSE', 'HOTEL', 'HOUSE', 'HUMAN', 'IDEAL', 'IMAGE',
    'INDEX', 'INNER', 'INPUT', 'ISSUE', 'JAPAN', 'JIMMY', 'JOINT', 'JONES', 'JUDGE', 'KNIFE',
    'KNOCK', 'KNOWN', 'LABEL', 'LARGE', 'LASER', 'LATER', 'LAUGH', 'LAYER', 'LEARN', 'LEAST',
    'LEAVE', 'LEGAL', 'LEVEL', 'LIGHT', 'LIMIT', 'LINKS', 'LIVES', 'LOCAL', 'LOGIC', 'LOOSE',
    'LUCKY', 'LUNCH', 'LYING', 'MAGIC', 'MAJOR', 'MAKER', 'MARCH', 'MARRY', 'MATCH', 'MAYBE',
    'MAYOR', 'MEANT', 'MEDIA', 'METAL', 'MIGHT', 'MINOR', 'MINUS', 'MIXED', 'MODEL', 'MONEY',
    'MONTH', 'MORAL', 'MOTOR', 'MOUNT', 'MOUSE', 'MOUTH', 'MOVIE', 'MUSIC', 'NEEDS', 'NEVER',
    'NIGHT', 'NOISE', 'NORTH', 'NOTED', 'NOVEL', 'NURSE', 'OCCUR', 'OCEAN', 'OFFER', 'OFTEN',
    'ORDER', 'OTHER', 'OUGHT', 'PAINT', 'PANEL', 'PAPER', 'PARTY', 'PEACE', 'PETER', 'PHASE',
    'PHONE', 'PHOTO', 'PIECE', 'PILOT', 'PITCH', 'PLACE', 'PLAIN', 'PLANE', 'PLANT', 'PLATE',
    'POINT', 'POUND', 'POWER', 'PRESS', 'PRICE', 'PRIDE', 'PRIME', 'PRINT', 'PRIOR', 'PRIZE',
    'PROOF', 'PROUD', 'PROVE', 'QUEEN', 'QUICK', 'QUIET', 'QUITE', 'RADIO', 'RAISE', 'RANGE',
    'RAPID', 'RATIO', 'REACH', 'READY', 'REFER', 'RIGHT', 'RIVAL', 'RIVER', 'ROBIN', 'ROGER',
    'ROMAN', 'ROUGH', 'ROUND', 'ROUTE', 'ROYAL', 'RURAL', 'SCALE', 'SCENE', 'SCOPE', 'SCORE',
    'SENSE', 'SERVE', 'SEVEN', 'SHALL', 'SHAPE', 'SHARE', 'SHARP', 'SHEET', 'SHELF', 'SHELL',
    'SHIFT', 'SHIRT', 'SHOCK', 'SHOOT', 'SHORT', 'SHOWN', 'SIGHT', 'SINCE', 'SIXTH', 'SIXTY',
    'SIZED', 'SKILL', 'SLEEP', 'SLIDE', 'SMALL', 'SMART', 'SMILE', 'SMITH', 'SMOKE', 'SOLAR',
    'SOLID', 'SOLVE', 'SORRY', 'SOUND', 'SOUTH', 'SPACE', 'SPEAK', 'SPEED', 'SPEND', 'SPENT',
    'SPLIT', 'SPOKE', 'SPORT', 'STAFF', 'STAGE', 'STAKE', 'STAND', 'START', 'STATE', 'STEAM',
    'STEEL', 'STICK', 'STILL', 'STOCK', 'STONE', 'STOOD', 'STORE', 'STORM', 'STORY', 'STRIP',
    'STUCK', 'STUDY', 'STUFF', 'STYLE', 'SUGAR', 'SUITE', 'SUPER', 'SWEET', 'TABLE', 'TAKEN',
    'TASTE', 'TAXES', 'TEACH', 'TEETH', 'TERRY', 'TEXAS', 'THANK', 'THEFT', 'THEIR', 'THEME',
    'THERE', 'THESE', 'THICK', 'THING', 'THINK', 'THIRD', 'THOSE', 'THREE', 'THREW', 'THROW',
    'TIGHT', 'TIMES', 'TIRED', 'TITLE', 'TODAY', 'TOPIC', 'TOTAL', 'TOUCH', 'TOWER', 'TRACK',
    'TRADE', 'TRAIN', 'TREAT', 'TREND', 'TRIAL', 'TRIED', 'TRIES', 'TRUCK', 'TRULY', 'TRUST',
    'TWICE', 'UNDER', 'UNDUE', 'UNION', 'UNITY', 'UNTIL', 'UPPER', 'UPSET', 'URBAN', 'USAGE',
    'USUAL', 'VALID', 'VALUE', 'VIDEO', 'VIRUS', 'VISIT', 'VITAL', 'VOICE', 'WASTE', 'WATCH',
    'WATER', 'WHEEL', 'WHERE', 'WHICH', 'WHILE', 'WHITE', 'WHOLE', 'WHOSE', 'WOMAN', 'WOMEN',
    'WORLD', 'WORRY', 'WORTH', 'WOULD', 'WOUND', 'WRITE', 'WRONG', 'WROTE', 'YIELD', 'YOUNG',
    'YOUTH'
];

// Get today's date in YYYY-MM-DD format
function getDayId() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Generate a consistent daily word based on the date
function getDailyWord() {
    const dayId = getDayId();
    
    // Check if we already have a word for today in localStorage
    const storedWord = localStorage.getItem(`word_${dayId}`);
    if (storedWord) {
        return storedWord;
    }
    
    // Clear previous day's word
    localStorage.removeItem(`word_${getDayId(-1)}`);
    
    // Generate a new word for today
    const seed = parseInt(dayId.replace(/-/g, ''), 10);
    const index = seed % VALID_WORDS.length;
    const dailyWord = VALID_WORDS[index];
    
    // Store the word for today
    localStorage.setItem(`word_${dayId}`, dailyWord);
    
    return dailyWord;
}

// Get the target word for the current day
const TARGET_WORD = getDailyWord();

// For debugging - show the target word in console
console.log(`Today's word (${getDayId()}):`, TARGET_WORD);
