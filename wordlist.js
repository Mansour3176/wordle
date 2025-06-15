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
    'YOUTH','BADGE', 'BADLY', 'BAGEL', 'BAKER', 'BALSA', 'BANAL', 'BANJO', 'BARGE', 'BASIC', 'BATON',
    'BATTY', 'BAYOU', 'BEACH', 'BEAST', 'BEEFY', 'BEGET', 'BEGIN', 'BEING', 'BELIE', 'BELLY',
    'BELOW', 'BENCH', 'BERET', 'BERRY', 'BERTH', 'BESET', 'BIBLE', 'BICEP', 'BIDET', 'BIKER',
    'BINGE', 'BIRCH', 'BIRTH', 'BLACK', 'BLAME', 'BLAND', 'BLEAK', 'BLEED', 'BLEEP', 'BLIMP',
    'BLIND', 'BLINK', 'BLISS', 'BLITZ', 'BLOKE', 'BLOND', 'BLOOM', 'BLUFF', 'BLURB', 'BLURT',
    'BLUSH', 'BOAST', 'BOBBY', 'BONGO', 'BOOST', 'BOOZE', 'BORAX', 'BOUGH', 'BOULE', 'BOUND',
    'BOWEL', 'BOXER', 'BRACE', 'BRAID', 'BRAIN', 'BRAKE', 'BRAND', 'BRASH', 'BRAVE', 'BREAD',
    'BREAK', 'BRIAR', 'BRIBE', 'BRICK', 'BRIDE', 'BRINE', 'BRING', 'BRINK', 'BRISK', 'BROAD',
    'BROIL', 'BRONC', 'BROOD', 'BROOK', 'BROOM', 'BROTH', 'BROWN', 'BRUNT', 'BRUSH', 'BRUTE',
    'BUDDY', 'BUDGE', 'BUGGY', 'BULKY', 'BULLY', 'BUNCH', 'BURLY', 'BURNT', 'BURST', 'BUSED',
    'BUTCH', 'BUTTE', 'BUYER', 'BYLAW', 'CABIN', 'CABLE', 'CACAO', 'CACHE', 'CACTI', 'CADDY',
    'CADET', 'CAGEY', 'CAIRN', 'CAMEL', 'CAMEO', 'CANAL', 'CANDY', 'CANNY', 'CANOE', 'CANON',
    'CAPER', 'CARAT', 'CARGO', 'CAROL', 'CARRY', 'CARVE', 'CASTE', 'CATCH', 'CATER', 'CAULK',
    'CAUSE', 'CEDAR', 'CHAFE', 'CHAMP', 'CHANT', 'CHARD', 'CHARM', 'CHART', 'CHASE', 'CHASM',
    'CHEAP', 'CHEAT', 'CHECK', 'CHEEK', 'CHEER', 'CHESS', 'CHEST', 'CHICK', 'CHIDE', 'CHIEF',
    'CHILD', 'CHILI', 'CHILL', 'CHIME', 'CHINA', 'CHIRP', 'CHOCK', 'CHOIR', 'CHOKE', 'CHORD',
    'CHORE', 'CHUCK', 'CHUMP', 'CHUNK', 'CHURN', 'CHUTE', 'CIDER', 'CIGAR', 'CINCH', 'CIRCA',
    'CIVIC', 'CLAIM', 'CLASH', 'CLASP', 'CLASS', 'CLEAN', 'CLEAR', 'CLERK', 'CLICK', 'CLIFF',
    'CLIMB', 'CLING', 'CLOCK', 'CLOSE', 'CLOTH', 'CLOUD', 'CLOUT', 'CLOVE', 'CLOWN', 'CLUCK',
    'CLUED', 'CLUMP', 'COAST', 'COCOA', 'COLON', 'COMET', 'COMFY', 'COMIC', 'COMMA', 'CONDO',
    'CONIC', 'COPSE', 'CORAL', 'CORER', 'CORNY', 'COULD', 'COURT', 'COVEN', 'COVER', 'COVET',
    'COVET', 'COWER', 'COYLY', 'CRAMP', 'CRANE', 'CRANK', 'CRASS', 'CRATE', 'CRAVE', 'CRAWL',
    'CRAZE', 'CRAZY', 'CREDO', 'CREST', 'CRICK', 'CRIMP', 'CROAK', 'CRONE', 'CROOK', 'CROSS',
    'CRUMB', 'CRUST', 'CRYPT', 'CUBIC', 'CUMIN', 'CURIO', 'CURLY', 'CYNIC', 'DADDY', 'DAISY',
    'DANDY', 'DANNY', 'DARKY', 'DATING', 'DEALT', 'DEATH', 'DEBAR', 'DEBIT', 'DEBUG', 'DEBUT',
    'DECAF', 'DECAY', 'DECOR', 'DECOY', 'DECRY', 'DEFER', 'DEIGN', 'DELAY', 'DELTA', 'DELVE',
    'DEMON', 'DEMUR', 'DENIM', 'DENSE', 'DEPOT', 'DEPTH', 'DERBY', 'DETER', 'DETOX', 'DEUCE',
    'DEVIL', 'DIARY', 'DIGIT', 'DILLY', 'DIMLY', 'DINER', 'DINGO', 'DINGY', 'DIODE', 'DIRGE',
    'DIRTY', 'DISCO', 'DITTO', 'DODGE', 'DODGY', 'DOGMA', 'DOING', 'DOLLY', 'DONOR', 'DONUT',
    'DOPEY', 'DOUBT', 'DOUGH', 'DOWEL', 'DOWRY', 'DOZEN', 'DRAFT', 'DRAIN', 'DRAKE', 'DRAMA',
    'DRANK', 'DRAPE', 'DRAWL', 'DRAWN', 'DREAD', 'DREAM', 'DRESS', 'DRIED', 'DRIER', 'DRIFT',
    'DRILL', 'DRINK', 'DRIVE', 'DROLL', 'DRONE', 'DROOL', 'DROOP', 'DROSS', 'DROVE', 'DROWN',
    'DRUID', 'DRUNK', 'DRYER', 'DUCHY', 'DULLY', 'DUMMY', 'DUMPY', 'DUNCE', 'DUSKY', 'DUSTY',
    'DUTCH', 'DUVET', 'DWARF', 'DWELL', 'DWELT', 'DYING', 'EAGER', 'EAGLE', 'EARLY', 'EARTH',
    'EASEL', 'EATEN', 'EATER', 'EBONY', 'ECLAT', 'EDICT', 'EDIFY', 'EERIE', 'EGRET', 'EIGHT',
    'EJECT', 'EKING', 'ELATE', 'ELBOW', 'ELDER', 'ELECT', 'ELEGY', 'ELFIN', 'ELIDE', 'ELITE',
    'ELOPE', 'ELUDE', 'EMAIL', 'EMBED', 'EMBER', 'EMCEE', 'EMPTY', 'ENACT', 'ENDOW', 'ENEMA',
    'ENEMY', 'ENJOY', 'ENNUI', 'ENSUE', 'ENTER', 'ENTRY', 'ENVOY', 'EPOCH', 'EPOXY', 'EQUAL',
    'EQUIP', 'ERASE', 'ERECT', 'ERODE', 'ERROR', 'ERUPT', 'ESSAY', 'ETHIC', 'ETHOS', 'ETUDE',
    'EVADE', 'EVENT', 'EVERY', 'EVICT', 'EVOKE', 'EXACT', 'EXALT', 'EXCEL', 'EXERT', 'EXILE',
    'EXIST', 'EXPEL', 'EXTOL', 'EXTRA', 'EXULT', 'EYING', 'FABLE', 'FACET', 'FAINT', 'FAIRY',
    'FAITH', 'FALSE', 'FANCY', 'FARCE', 'FATAL', 'FATTY', 'FAULT', 'FAUNA', 'FAVOR', 'FEAST',
    'FECAL', 'FEIGN', 'FELLA', 'FELON', 'FEMME', 'FEMUR', 'FENCE', 'FERAL', 'FERRY', 'FETAL',
    'FETCH', 'FETID', 'FETUS', 'FEVER', 'FEWER', 'FIBER', 'FIBRE', 'FICUS', 'FIELD', 'FIEND',
    'FIERY', 'FIFTH', 'FIFTY', 'FIGHT', 'FILER', 'FILET', 'FILMY', 'FILTH', 'FINAL', 'FINCH',
    'FINER', 'FIRST', 'FISHY', 'FIXER', 'FIZZY', 'FJORD', 'FLACK', 'FLAIL', 'FLAIR', 'FLAKE',
    'FLAME', 'FLANK', 'FLARE', 'FLASH', 'FLASK', 'FLECK', 'FLEET', 'FLESH', 'FLICK', 'FLIER',
    'FLING', 'FLINT', 'FLIRT', 'FLOAT', 'FLOCK', 'FLOOD', 'FLOOR', 'FLORA', 'FLOSS', 'FLOUR',
    'FLOUT', 'FLUFF', 'FLUID', 'FLUKE', 'FLUME', 'FLUNG', 'FLUNK', 'FLUSH', 'FLUTE', 'FLYER',
    'FOAMY', 'FOCAL', 'FOCUS', 'FOGGY', 'FOIST', 'FOLIO', 'FOLLY', 'FORAY', 'FORCE', 'FORGE',
    'FORGO', 'FORTE', 'FORTH', 'FORTY', 'FORUM', 'FOUND', 'FOYER', 'FRAIL', 'FRAME', 'FRANK',
    'FRAUD', 'FREAK', 'FREED', 'FREER', 'FRESH', 'FRIAR', 'FRIED', 'FRILL', 'FRISK', 'FRITZ',
    'FROCK', 'FROND', 'FROST', 'FROTH', 'FROWN', 'FROZE', 'FRUIT', 'FUDGE', 'FUGUE', 'FULLY',
    'FUNGI', 'FUNKY', 'FUNNY', 'FUROR', 'FURRY', 'FUSSY', 'FUZZY', 'GAFFE', 'GAILY', 'GAMER',
    'GAMMA', 'GAMUT', 'GASSY', 'GAUDY', 'GAUGE', 'GAUNT', 'GAUZE', 'GAVEL', 'GAWKY', 'GAYER',
    'GAYLY', 'GAZER', 'GECKO', 'GEEKY', 'GEESE', 'GENIE', 'GENRE', 'GHOST', 'GHOUL', 'GIANT',
    'GIDDY', 'GIRTH', 'GIVEN', 'GIVER', 'GLADE', 'GLAND', 'GLARE', 'GLASS', 'GLAZE', 'GLEAM',
    'GLEAN', 'GLIDE', 'GLINT', 'GLOAT', 'GLOBE', 'GLOOM', 'GLORY', 'GLOSS', 'GLOVE', 'GLYPH',
    'GNASH', 'GNOME', 'GODLY', 'GOLEM', 'GOLLY', 'GONER', 'GOODY', 'GOOEY', 'GOOFY', 'GOOSE',
    'GORGE', 'GOUGE', 'GOURD', 'GRACE', 'GRADE', 'GRAIL', 'GRAIN', 'GRAND', 'GRANT', 'GRAPE',
    'GRAPH', 'GRASP', 'GRASS', 'GRATE', 'GRAVE', 'GRAVY', 'GRAZE', 'GREAT', 'GREED', 'GREEN',
    'GREET', 'GRIEF', 'GRILL', 'GRIME', 'GRIMY', 'GRIND', 'GRIPE', 'GROAN', 'GROIN', 'GROOM',
    'GROPE', 'GROSS', 'GROUP', 'GROUT', 'GROVE', 'GROWL', 'GRUEL', 'GRUFF', 'GRUNT', 'GUANO',
    'GUARD', 'GUAVA', 'GUESS', 'GUEST', 'GUIDE', 'GUILD', 'GUILE', 'GUILT', 'GUISE', 'GULCH',
    'GULLY', 'GUMMY', 'GUPPY', 'GUSTO', 'GUSTY', 'GYPSY', 'HABIT', 'HAIRY', 'HALVE', 'HANDY',
    'HAPPY', 'HARDY', 'HAREM', 'HARPY', 'HARRY', 'HARSH', 'HASTE', 'HASTY', 'HATCH', 'HATER',
    'HAUNT', 'HAUTE', 'HAVEN', 'HAVOC', 'HAZEL', 'HEADY', 'HEARD', 'HEART', 'HEATH', 'HEAVE',
    'HEAVY', 'HEDGE', 'HEFTY', 'HEIST', 'HELIX', 'HELLO', 'HENCE', 'HERON', 'HILLY', 'HINGE',
    'HIPPO', 'HIPPY', 'HITCH', 'HOARD', 'HOBBY', 'HOIST', 'HOLLY', 'HOMER', 'HONEY', 'HONOR',
    'HORDE', 'HORNY', 'HORSE', 'HOTEL', 'HOTLY', 'HOUND', 'HOVER', 'HOWDY', 'HUMAN', 'HUMID',
    'HUMOR', 'HUMPH', 'HUNKY', 'HURRY', 'HUSKY', 'HYENA', 'HYMEN', 'HYPER', 'ICILY', 'IDIOM',
    'IDIOT', 'IDLER', 'IDYLL', 'IGLOO', 'ILIAC', 'IMAGE', 'IMBUE', 'IMPEL', 'IMPLY', 'INANE',
    'INBOX', 'INCUR', 'INDEX', 'INEPT', 'INERT', 'INFER', 'INGOT', 'INLAY', 'INLET', 'INNER',
    'INPUT', 'INTER', 'INTRO', 'IONIC', 'IRATE', 'IRONY', 'ISLET', 'ISSUE', 'ITCHY', 'IVORY',
    'JAZZY', 'JELLY', 'JERKY', 'JETTY', 'JEWEL', 'JIFFY', 'JOINT', 'JOIST', 'JOULE', 'JOUST',
    'JUDGE', 'JUICE', 'JUICY', 'JUMBO', 'JUMPY', 'JUNTA', 'JUNTO', 'JUROR', 'KAPPA', 'KARMA',
    'KAYAK', 'KAZOO', 'KEBAB', 'KHAKI', 'KINKY', 'KIOSK', 'KITTY', 'KNACK', 'KNAVE', 'KNEAD',
    'KNELT', 'KNOCK', 'KNOLL', 'KOALA', 'KRONE', 'LABEL', 'LABOR', 'LADEN', 'LADLE', 'LAGER',
    'LANCE', 'LANKY', 'LAPEL', 'LAPSE', 'LARGE', 'LARVA', 'LASSO', 'LATCH', 'LATHE', 'LATTE',
    'LAUGH', 'LAYER', 'LEACH', 'LEAFY', 'LEAKY', 'LEAPT', 'LEASH', 'LEAVE', 'LEDGE', 'LEECH',
    'LEERY', 'LEGGY', 'LEMUR', 'LEPER', 'LEVEL', 'LEVER', 'LIBEL', 'LIGHT', 'LILAC', 'LINEN',
    'LINER', 'LINGO', 'LIPID', 'LITHE', 'LIVER', 'LIVID', 'LLAMA', 'LOAMY', 'LOBBY', 'LOCAL',
    'LOCUS', 'LOFTY', 'LOGIC', 'LOOPY', 'LOOSE', 'LORRY', 'LOSER', 'LOUSY', 'LOVER', 'LOWER',
    'LOWLY', 'LOYAL', 'LUCID', 'LUCKY', 'LUMEN', 'LUMPY', 'LUNAR', 'LUNCH', 'LUNGE', 'LUPUS',
    'LURCH', 'LURID', 'LUSTY', 'LYING', 'LYMPH', 'LYRIC', 'MACAW', 'MACHO', 'MADAM', 'MADLY',
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
