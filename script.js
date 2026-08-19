/* =========================================
   PNCF PEACHES & CREAM FUN
========================================= */


/* =========================================
   GAME DATA
========================================= */

const characters = {

    monday: {
        name: "Monday",
        image: "assets/images/characters/monday.png",
        time: "Monday — Dawn, 5:30 AM",
        role: "Your Self-Care Friend",
        intro:
            "Let's start the week by remembering how strong and capable you are!",
        description:
            "Monday helps you practice self-care, positive affirmations, journaling, and doing things you enjoy."
    },

    tuesday: {
        name: "Tuesday",
        image: "assets/images/characters/tuesday.png",
        time: "Tuesday — Midnight, 12:00 AM",
        role: "Your Calm Friend",
        intro:
            "Sometimes our minds feel busy. Let's take a moment to slow down together.",
        description:
            "Tuesday helps you practice relaxation techniques like breathing, listening to music, and reading."
    },

    wednesday: {
        name: "Wednesday",
        image: "assets/images/characters/wednesday.png",
        time: "Wednesday — Afternoon, 3:30 PM",
        role: "Your Creativity Friend",
        intro:
            "Let's have some fun and use our imagination!",
        description:
            "Wednesday helps you practice creativity through drawing, crafts, puzzles, and learning."
    },

    thursday: {
        name: "Thursday",
        image: "assets/images/characters/thursday.png",
        time: "Thursday — Noon, 12:00 PM",
        role: "Your Confidence Friend",
        intro:
            "You are allowed to take care of yourself and set boundaries.",
        description:
            "Thursday helps you practice assertiveness, expressing feelings, asking for help, and saying no."
    },

    friday: {
        name: "Friday",
        image: "assets/images/characters/friday.png",
        time: "Friday — Evening, 7:00 PM",
        role: "Your Social Friend",
        intro:
            "You have something special to share with the world!",
        description:
            "Friday helps you practice social skills like starting conversations, giving compliments, and sharing stories."
    },

    saturday: {
        name: "Saturday",
        image: "assets/images/characters/saturday.png",
        time: "Saturday — Night, 9:00 PM",
        role: "Your Cheerleader",
        intro:
            "Let's celebrate something awesome about YOU!",
        description:
            "Saturday helps you practice gratitude by recognizing accomplishments, talents, and people you appreciate."
    },

    sunday: {
        name: "Sunday",
        image: "assets/images/characters/sunday.png",
        time: "Sunday — Morning",
        role: "Your Mentor",
        intro:
            "Let's think about where you want to go next!",
        description:
            "Sunday helps you practice goal-setting by making plans, breaking goals into steps, and rewarding yourself."
    }

};


/* =========================================
   ACTIVITIES
========================================= */

const activities = [

    {
        character: "monday",

        letter: "P",

        title: "Pop the Peaches!",

        instruction:
            "Tap 10 peaches to start your week with some positive energy!",

        type: "tap",

        goal: 10
    },


    {
        character: "tuesday",

        letter: "E",

        title: "Breathe and Relax",

        instruction:
            "Take three slow breaths with Tuesday.",

        type: "breathing",

        goal: 3
    },


    {
        character: "wednesday",

        letter: "A",

        title: "Choose Your Creativity",

        instruction:
            "Which activity sounds fun to you?",

        type: "choice",

        choices: [
            "🎨 Draw something",
            "🧩 Solve a puzzle",
            "✂️ Make something"
        ]
    },


    {
        character: "thursday",

        letter: "C",

        title: "Practice Your Boundaries",

        instruction:
            "Someone asks you to do something you don't want to do. What could you say?",

        type: "choice",

        choices: [
            "No, thank you.",
            "Okay, I guess.",
            "I don't know."
        ],

        correct: 0
    },


    {
        character: "friday",

        letter: "H",

        title: "Make a Connection",

        instruction:
            "Which would be a friendly way to start a conversation?",

        type: "choice",

        choices: [
            "Hi! What's your name?",
            "Don't talk to me.",
            "I don't want to meet anyone."
        ],

        correct: 0
    },


    {
        character: "saturday",

        letter: "E",

        title: "Celebrate Yourself",

        instruction:
            "Which is something you can be proud of?",

        type: "choice",

        choices: [
            "Something I worked hard on",
            "Nothing I've done",
            "I don't have anything"
        ],

        correct: 0
    },


    {
        character: "sunday",

        letter: "S",

        title: "Make a Goal",

        instruction:
            "Choose something you'd like to work toward.",

        type: "choice",

        choices: [
            "Learn something new",
            "Try a new activity",
            "Help someone"
        ]
    },


    /* ================================
       CREAM ACTIVITIES
    ================================= */

    {
        character: "monday",

        letter: "C",

        title: "Positive Thought",

        instruction:
            "Choose a positive thought to carry with you.",

        type: "choice",

        choices: [
            "I can try my best.",
            "I can't do anything.",
            "Nothing will work."
        ],

        correct: 0
    },


    {
        character: "tuesday",

        letter: "R",

        title: "Relax Your Body",

        instruction:
            "Take another slow breath and relax your shoulders.",

        type: "breathing",

        goal: 3
    },


    {
        character: "wednesday",

        letter: "E",

        title: "Creative Choice",

        instruction:
            "Pick something creative to do today.",

        type: "choice",

        choices: [
            "Draw",
            "Write",
            "Build"
        ]
    },


    {
        character: "thursday",

        letter: "A",

        title: "Ask for Help",

        instruction:
            "What can you do when something feels too difficult?",

        type: "choice",

        choices: [
            "Ask someone I trust for help.",
            "Keep everything to myself.",
            "Give up immediately."
        ],

        correct: 0
    },


    {
        character: "sunday",

        letter: "M",

        title: "One Step at a Time",

        instruction:
            "Pick one small step toward a goal.",

        type: "choice",

        choices: [
            "Make a small plan",
            "Do everything at once",
            "Forget about it"
        ],

        correct: 0
    }

];


/* =========================================
   GAME STATE
========================================= */

let currentActivity = 0;

let peachPoints = 0;

let tapCount = 0;

let breathingCount = 0;


/* =========================================
   SCREEN REFERENCES
========================================= */

const screens = {

    intro: document.getElementById("intro-screen"),

    greeting: document.getElementById("greeting-screen"),

    tree: document.getElementById("tree-screen"),

    characterIntro:
        document.getElementById("character-intro-screen"),

    activity:
        document.getElementById("activity-screen"),

    reward:
        document.getElementById("reward-screen"),

    celebration:
        document.getElementById("celebration-screen"),

    characters:
        document.getElementById("characters-screen")

};


/* =========================================
   SCREEN SWITCHING
========================================= */

function showScreen(name) {

    Object.values(screens).forEach(screen => {

        screen.classList.remove("active");

    });

    screens[name].classList.add("active");

}


/* =========================================
   TREE
========================================= */

function updateTree() {

    const tree = document.getElementById("tree-stage");

    const message = document.getElementById("tree-message");


    if (peachPoints < 3) {

        tree.textContent = "🌱";

        message.textContent =
            "Your peach tree is just getting started!";

    }

    else if (peachPoints < 6) {

        tree.textContent = "🌿";

        message.textContent =
            "Your little sprout is growing!";

    }

    else if (peachPoints < 10) {

        tree.textContent = "🌳";

        message.textContent =
            "Look how big your tree is getting!";

    }

    else {

        tree.textContent = "🍑";

        message.textContent =
            "Your tree is growing beautiful peaches!";

    }

}


/* =========================================
   WORD TRACKERS
========================================= */

function createWordTracker(word, containerId) {

    const container =
        document.getElementById(containerId);

    container.innerHTML = "";

    for (let i = 0; i < word.length; i++) {

        const letter =
            document.createElement("span");

        letter.className = "word-letter";

        letter.id =
            `${containerId}-${i}`;

        letter.textContent = word[i];

        container.appendChild(letter);

    }

}


function updateWordTracker() {

    const completed =
        currentActivity;

    const peachLetters =
        Math.min(completed, 7);

    const creamLetters =
        Math.max(0, completed - 7);


    for (let i = 0; i < 7; i++) {

        const letter =
            document.getElementById(
                `peaches-tracker-${i}`
            );

        if (i < peachLetters) {

            letter.classList.add("completed");

        }

    }


    for (let i = 0; i < 5; i++) {

        const letter =
            document.getElementById(
                `cream-tracker-${i}`
            );

        if (i < creamLetters) {

            letter.classList.add("completed");

        }

    }

}


/* =========================================
   START ACTIVITY
========================================= */

function startActivity() {

    const activity =
        activities[currentActivity];

    const character =
        characters[activity.character];


    document.getElementById(
        "activity-character-image"
    ).src = character.image;


    document.getElementById(
        "activity-character-image"
    ).alt = character.name;


    document.getElementById(
        "character-intro-name"
    ).textContent =
        `Meet ${character.name}!`;


    document.getElementById(
        "character-intro-message"
    ).textContent =
        character.intro;


    showScreen("characterIntro");

}


/* =========================================
   LOAD ACTIVITY
========================================= */

function loadActivity() {

    const activity =
        activities[currentActivity];

    const character =
        characters[activity.character];


    document.getElementById(
        "activity-character-label"
    ).textContent =
        character.name;


    document.getElementById(
        "activity-number"
    ).textContent =
        `${currentActivity + 1} / ${activities.length}`;


    document.getElementById(
        "activity-title"
    ).textContent =
        activity.title;


    document.getElementById(
        "activity-instruction"
    ).textContent =
        activity.instruction;


    const area =
        document.getElementById("activity-area");

    area.innerHTML = "";


    document.getElementById(
        "activity-action-btn"
    ).style.display = "none";


    if (activity.type === "tap") {

        createTapGame(area);

    }


    if (activity.type === "breathing") {

        createBreathingGame(area);

    }


    if (activity.type === "choice") {

        createChoiceGame(area, activity);

    }


    showScreen("activity");

}


/* =========================================
   TAP GAME
========================================= */

function createTapGame(area) {

    tapCount = 0;


    const peach =
        document.createElement("button");

    peach.className = "tap-peach";

    peach.textContent = "🍑";


    const counter =
        document.createElement("div");

    counter.className = "tap-counter";

    counter.textContent =
        "Peaches: 0 / 10";


    peach.addEventListener("click", () => {

        tapCount++;

        counter.textContent =
            `Peaches: ${tapCount} / 10`;


        if (tapCount >= 10) {

            peach.style.display = "none";

            showActivityDone();

        }

    });


    area.appendChild(peach);

    area.appendChild(counter);

}


/* =========================================
   BREATHING GAME
========================================= */

function createBreathingGame(area) {

    breathingCount = 0;


    const circle =
        document.createElement("div");

    circle.className =
        "breathing-circle";

    circle.textContent =
        "Breathe";


    const counter =
        document.createElement("div");

    counter.className =
        "tap-counter";

    counter.textContent =
        "Breaths: 0 / 3";


    const button =
        document.createElement("button");

    button.className =
        "btn btn-green";

    button.textContent =
        "I finished a breath";


    button.addEventListener("click", () => {

        breathingCount++;

        counter.textContent =
            `Breaths: ${breathingCount} / 3`;


        if (breathingCount >= 3) {

            button.style.display = "none";

            showActivityDone();

        }

    });


    area.appendChild(circle);

    area.appendChild(counter);

    area.appendChild(button);

}


/* =========================================
   CHOICE GAME
========================================= */

function createChoiceGame(area, activity) {

    activity.choices.forEach((choice, index) => {

        const button =
            document.createElement("button");

        button.className =
            "activity-choice";

        button.textContent =
            choice;


        button.addEventListener("click", () => {

            const buttons =
                area.querySelectorAll(
                    ".activity-choice"
                );


            buttons.forEach(btn => {

                btn.disabled = true;

            });


            if (
                activity.correct === undefined ||
                index === activity.correct
            ) {

                button.classList.add("correct");

                setTimeout(() => {

                    showActivityDone();

                }, 500);

            }

            else {

                button.classList.add("incorrect");

                setTimeout(() => {

                    buttons.forEach(btn => {

                        btn.disabled = false;

                    });

                    button.classList.remove(
                        "incorrect"
                    );

                }, 600);

            }

        });


        area.appendChild(button);

    });

}


/* =========================================
   ACTIVITY COMPLETE
========================================= */

function showActivityDone() {

    const button =
        document.getElementById(
            "activity-action-btn"
        );

    button.textContent =
        "Continue!";

    button.style.display =
        "inline-block";

}


/* =========================================
   REWARD
========================================= */

function giveReward() {

    const activity =
        activities[currentActivity];


    peachPoints++;


    document.getElementById(
        "points"
    ).textContent =
        peachPoints;


    document.getElementById(
        "earned-letter"
    ).textContent =
        activity.letter;


    document.getElementById(
        "reward-message"
    ).textContent =
        `You completed ${activity.title}!`;


    updateTree();


    document.getElementById(
        "reward-tree"
    ).textContent =
        getTreeEmoji();


    showScreen("reward");

}


function getTreeEmoji() {

    if (peachPoints < 3) {

        return "🌱";

    }

    if (peachPoints < 6) {

        return "🌿";

    }

    if (peachPoints < 10) {

        return "🌳";

    }

    return "🍑";

}


/* =========================================
   NEXT ACTIVITY
========================================= */

function continueAfterReward() {

    currentActivity++;

    updateWordTracker();


    if (
        currentActivity >=
        activities.length
    ) {

        showScreen("celebration");

        return;

    }


    showScreen("tree");

}


/* =========================================
   CHARACTER GALLERY
========================================= */

function buildCharacterGallery() {

    const gallery =
        document.getElementById(
            "character-gallery"
        );


    gallery.innerHTML = "";


    Object.entries(characters).forEach(
        ([key, character]) => {

            const item =
                document.createElement("button");

            item.className =
                "character-item";


            item.innerHTML = `

                <img
                    src="${character.image}"
                    alt="${character.name}"
                >

                <h3>
                    ${character.name}
                </h3>

            `;


            item.addEventListener(
                "click",
                () => {

                    showCharacterCard(character);

                }
            );


            gallery.appendChild(item);

        }
    );

}


function showCharacterCard(character) {

    document.getElementById(
        "character-card-image"
    ).src =
        character.image;


    document.getElementById(
        "character-card-name"
    ).textContent =
        character.name;


    document.getElementById(
        "character-card-time"
    ).textContent =
        character.time;


    document.getElementById(
        "character-card-role"
    ).textContent =
        character.role;


    document.getElementById(
        "character-card-description"
    ).textContent =
        character.description;


    document.getElementById(
        "character-card"
    ).classList.remove("hidden");

}


/* =========================================
   EVENT LISTENERS
========================================= */


/* Intro */

document.getElementById(
    "start-button"
).addEventListener(
    "click",
    () => {

        showScreen("greeting");

    }
);


/* Plushy intro */

document.getElementById(
    "greeting-next-btn"
).addEventListener(
    "click",
    () => {

        updateTree();

        showScreen("tree");

    }
);


/* Start activity */

document.getElementById(
    "start-activity-btn"
).addEventListener(
    "click",
    startActivity
);


/* Character intro -> game */

document.getElementById(
    "character-next-btn"
).addEventListener(
    "click",
    loadActivity
);


/* Activity -> reward */

document.getElementById(
    "activity-action-btn"
).addEventListener(
    "click",
    giveReward
);


/* Reward -> next */

document.getElementById(
    "reward-next-btn"
).addEventListener(
    "click",
    continueAfterReward
);


/* Friends */

document.getElementById(
    "friends-button"
).addEventListener(
    "click",
    () => {

        showScreen("characters");

    }
);


/* Close character card */

document.getElementById(
    "close-character-card"
).addEventListener(
    "click",
    () => {

        document.getElementById(
            "character-card"
        ).classList.add("hidden");

    }
);


/* Back from character gallery */

document.getElementById(
    "characters-back-btn"
).addEventListener(
    "click",
    () => {

        showScreen("celebration");

    }
);


/* Play again */

document.getElementById(
    "play-again-button"
).addEventListener(
    "click",
    () => {

        currentActivity = 0;

        peachPoints = 0;

        updateWordTracker();

        updateTree();

        showScreen("tree");

    }
);


/* =========================================
   INITIALIZE
========================================= */

createWordTracker(
    "PEACHES",
    "peaches-tracker"
);

createWordTracker(
    "CREAM",
    "cream-tracker"
);

buildCharacterGallery();

updateTree();