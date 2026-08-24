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
    // --- PEACHES ---
    {
        character: "monday",
        letter: "P",
        title: "Pop the Peaches!",
        instruction: "Tap 10 bouncing peaches to start your week with energy!",
        type: "tap",
        goal: 10
    },
    {
        character: "tuesday",
        letter: "E",
        title: "Breathe and Relax",
        instruction: "Take three slow breaths with Tuesday.",
        type: "breathing",
        goal: 3
    },
    {
        character: "wednesday",
        letter: "A",
        title: "Catch the Sunshine!",
        instruction: "Move the basket to catch 10 falling sunshines!",
        type: "catch"
    },
    {
        character: "thursday",
        letter: "C",
        title: "Practice Your Boundaries",
        instruction: "Someone asks you to do something you don't want to do. What could you say?",
        type: "choice",
        choices: ["No, thank you.", "Okay, I guess.", "I don't know."],
        correct: 0
    },
    {
        character: "friday",
        letter: "H",
        title: "Grow Your Mindset",
        instruction: "Press and hold the button to grow the peach blossom!",
        type: "grow"
    },
    {
        character: "saturday",
        letter: "E",
        title: "Celebrate Yourself",
        instruction: "Which is something you can be proud of?",
        type: "choice",
        choices: ["Something I worked hard on", "Nothing I've done", "I don't have anything"],
        correct: 0
    },
    {
        character: "sunday",
        letter: "S",
        title: "Make a Goal",
        instruction: "Choose something you'd like to work toward.",
        type: "choice",
        choices: ["Learn something new", "Try a new activity", "Help someone"]
    },

    // --- AND ---
    {
        character: "friday",
        letter: "A",
        title: "Make a Connection",
        instruction: "Which would be a friendly way to start a conversation?",
        type: "choice",
        choices: ["Hi! What's your name?", "Don't talk to me.", "I don't want to meet anyone."],
        correct: 0
    },
    {
        character: "saturday",
        letter: "N",
        title: "Gather Inspiration!",
        instruction: "Catch 10 sunshines to spark your imagination!",
        type: "catch"
    },
    {
        character: "wednesday",
        letter: "D",
        title: "Notice the Good",
        instruction: "Which is a way to notice something good about your day?",
        type: "choice",
        choices: ["Think of one thing that went well", "Only think about what went wrong", "Ignore how the day went"],
        correct: 0
    },

    // --- CREAM ---
    {
        character: "monday",
        letter: "C",
        title: "Positive Thought",
        instruction: "Choose a positive thought to carry with you.",
        type: "choice",
        choices: ["I can try my best.", "I can't do anything.", "Nothing will work."],
        correct: 0
    },
    {
        character: "tuesday",
        letter: "R",
        title: "Bloom and Unwind",
        instruction: "Hold the button down to expand your calm energy!",
        type: "grow"
    },
    {
        character: "wednesday",
        letter: "E",
        title: "Ask for Help",
        instruction: "What can you do when something feels too difficult?",
        type: "choice",
        choices: ["Ask someone I trust for help.", "Keep everything to myself.", "Give up immediately."],
        correct: 0
    },
    {
        character: "thursday",
        letter: "A",
        title: "Catch More Joy!",
        instruction: "Catch 10 falling sunshines to power up your tree!",
        type: "catch"
    },
    {
        character: "sunday",
        letter: "M",
        title: "One Step at a Time",
        instruction: "Pick one small step toward a goal.",
        type: "choice",
        choices: ["Make a small plan", "Do everything at once", "Forget about it"],
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
   TREE & GROWTH STAGES
========================================= */

function getStageData() {
    // 15 total activities progression
    if (peachPoints <= 0) {
        return { emoji: "🌰", msg: "A tiny seed is planted in the soil..." };
    } else if (peachPoints <= 3) {
        return { emoji: "🌱", msg: "Look! A little sprout is taking root!" };
    } else if (peachPoints <= 7) {
        return { emoji: "🌿", msg: "Your plant is growing strong stem and leaves!" };
    } else if (peachPoints <= 14) {
        return { emoji: "🌳", msg: "Your tree is growing big and tall!" };
    } else {
        return { emoji: "🍑", msg: "Congratulations! Your tree grew a sweet peach reward!" };
    }
}

function updateTree() {
    const tree = document.getElementById("tree-stage");
    const message = document.getElementById("tree-message");
    const stage = getStageData();

    tree.textContent = stage.emoji;
    message.textContent = stage.msg;

    // Trigger growth animation on update
    tree.classList.remove("grow-pop");
    void tree.offsetWidth; // Force CSS reflow
    tree.classList.add("grow-pop");
}

function getTreeEmoji() {
    return getStageData().emoji;
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


const wordTrackers = [

    { containerId: "peaches-tracker", length: 7 },

    { containerId: "and-tracker", length: 3 },

    { containerId: "cream-tracker", length: 5 }

];


function updateWordTracker() {

    const completed =
        currentActivity;

    let lettersUsed = 0;


    wordTrackers.forEach(tracker => {

        const lettersEarned =
            Math.max(
                0,
                Math.min(
                    tracker.length,
                    completed - lettersUsed
                )
            );


        for (let i = 0; i < tracker.length; i++) {

            const letter =
                document.getElementById(
                    `${tracker.containerId}-${i}`
                );

            if (i < lettersEarned) {

                letter.classList.add("completed");

            }
            else {

                letter.classList.remove("completed");

            }

        }


        lettersUsed += tracker.length;

    });

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

    if (activity.type === "catch") {

        createCatchGame(area);

    }

    if (activity.type === "slider") {

        createSliderGame(area);

    }

    if (activity.type === "grow") {

        createGrowGame(area);

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
   BOUNCING TAP GAME
========================================= */

function createTapGame(area) {
    tapCount = 0;

    const peach = document.createElement("button");
    peach.className = "tap-peach bouncing";
    peach.textContent = "🍑";

    const counter = document.createElement("div");
    counter.className = "tap-counter";
    counter.textContent = "Peaches: 0 / 10";

    area.appendChild(peach);
    area.appendChild(counter);

    // Physics state
    let posX = 50;
    let posY = 50;
    let speedX = 2.5;
    let speedY = 2;
    let animId;

    function movePeach() {
        const areaRect = area.getBoundingClientRect();
        const peachRect = peach.getBoundingClientRect();

        const maxX = areaRect.width - peachRect.width;
        const maxY = areaRect.height - peachRect.height - 40; // leave room for counter

        posX += speedX;
        posY += speedY;

        if (posX <= 0 || posX >= maxX) speedX *= -1;
        if (posY <= 0 || posY >= maxY) speedY *= -1;

        // Keep inside bounds
        posX = Math.max(0, Math.min(posX, maxX));
        posY = Math.max(0, Math.min(posY, maxY));

        peach.style.left = `${posX}px`;
        peach.style.top = `${posY}px`;

        animId = requestAnimationFrame(movePeach);
    }

    peach.addEventListener("click", () => {
        tapCount++;
        counter.textContent = `Peaches: ${tapCount} / 10`;

        // Increase speed slightly per hit for extra fun
        speedX *= 1.05;
        speedY *= 1.05;

        if (tapCount >= 10) {
            cancelAnimationFrame(animId);
            peach.style.display = "none";
            showActivityDone();
        }
    });

    animId = requestAnimationFrame(movePeach);
}


/* =========================================
   BREATHING GAME
========================================= */

function createBreathingGame(area) {

    breathingCount = 0;


    const wrapper =
        document.createElement("div");

    wrapper.className =
        "breathing-wrapper";


    const circle =
        document.createElement("div");

    circle.className =
        "breathing-circle";

    circle.textContent =
        "Breathe";


    wrapper.appendChild(circle);


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


    area.appendChild(wrapper);

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
   ENHANCED CATCH GAME
========================================= */

function createCatchGame(area) {
    let caught = 0;
    const target = 10; // Increased goal length

    const gameBox = document.createElement("div");
    gameBox.className = "catch-game-area large";

    const basket = document.createElement("div");
    basket.className = "catch-basket";
    basket.textContent = "🧺";

    const counter = document.createElement("div");
    counter.className = "tap-counter";
    counter.textContent = `Caught: 0 / ${target}`;

    gameBox.appendChild(basket);
    area.appendChild(gameBox);
    area.appendChild(counter);

    const moveBasket = (clientX) => {
        const rect = gameBox.getBoundingClientRect();
        const x = clientX - rect.left - 35;
        basket.style.left = `${Math.max(0, Math.min(x, rect.width - 70))}px`;
    };

    gameBox.addEventListener("mousemove", (e) => moveBasket(e.clientX));
    gameBox.addEventListener("touchmove", (e) => moveBasket(e.touches[0].clientX));

    function spawnItem() {
        if (caught >= target) return;

        const item = document.createElement("div");
        item.className = "falling-item";
        item.textContent = "☀️";
        item.style.left = `${Math.random() * (gameBox.clientWidth - 40)}px`;
        gameBox.appendChild(item);

        let top = 0;
        const dropInterval = setInterval(() => {
            top += 5; // Faster drop pace
            item.style.top = `${top}px`;

            const itemRect = item.getBoundingClientRect();
            const basketRect = basket.getBoundingClientRect();

            if (
                itemRect.bottom >= basketRect.top &&
                itemRect.left < basketRect.right &&
                itemRect.right > basketRect.left
            ) {
                clearInterval(dropInterval);
                item.remove();
                caught++;
                counter.textContent = `Caught: ${caught} / ${target}`;

                if (caught >= target) {
                    showActivityDone();
                } else {
                    setTimeout(spawnItem, 300);
                }
            } else if (top > gameBox.clientHeight) {
                clearInterval(dropInterval);
                item.remove();
                setTimeout(spawnItem, 200);
            }
        }, 20);
    }

    spawnItem();
}

/* =========================================
   SLIDER BALANCE GAME
========================================= */

function createSliderGame(area) {
    const container = document.createElement("div");
    container.className = "slider-game-container";

    const track = document.createElement("div");
    track.className = "slider-track";

    const targetZone = document.createElement("div");
    targetZone.className = "target-zone";
    track.appendChild(targetZone);

    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = "0";
    slider.max = "100";
    slider.value = "10";
    slider.className = "balance-slider";

    const statusMsg = document.createElement("div");
    statusMsg.className = "tap-counter";
    statusMsg.textContent = "Slide into the green zone!";

    container.appendChild(track);
    container.appendChild(slider);
    area.appendChild(container);
    area.appendChild(statusMsg);

    let holdTimer = null;
    let holdTime = 0;

    slider.addEventListener("input", () => {
        const val = parseInt(slider.value, 10);
        
        // Target zone is set between 40% and 60%
        if (val >= 40 && val <= 60) {
            if (!holdTimer) {
                statusMsg.textContent = "Hold it right there... 🧘";
                holdTimer = setInterval(() => {
                    holdTime++;
                    if (holdTime >= 3) {
                        clearInterval(holdTimer);
                        statusMsg.textContent = "Balanced & Calmed!";
                        showActivityDone();
                    }
                }, 1000);
            }
        } else {
            clearInterval(holdTimer);
            holdTimer = null;
            holdTime = 0;
            statusMsg.textContent = "Slide into the green zone!";
        }
    });
}

/* =========================================
   GROW / BREATH HOLD GAME
========================================= */

function createGrowGame(area) {
    let progress = 0;
    let holdInterval = null;

    const container = document.createElement("div");
    container.className = "grow-game-container";

    const bubble = document.createElement("div");
    bubble.className = "grow-bubble";
    bubble.textContent = "🌸";

    const targetRing = document.createElement("div");
    targetRing.className = "grow-target-ring";

    const instruction = document.createElement("div");
    instruction.className = "tap-counter";
    instruction.textContent = "Press & Hold to grow the blossom!";

    const button = document.createElement("button");
    button.className = "btn btn-green hold-btn";
    button.textContent = "Hold to Grow";

    container.appendChild(targetRing);
    container.appendChild(bubble);
    area.appendChild(container);
    area.appendChild(instruction);
    area.appendChild(button);

    function startGrowing() {
        if (holdInterval) return;
        holdInterval = setInterval(() => {
            if (progress < 100) {
                progress += 2;
                const scale = 0.8 + (progress / 100) * 1.2;
                bubble.style.transform = `scale(${scale})`;
                instruction.textContent = `Growing... ${Math.floor(progress)}%`;

                if (progress >= 100) {
                    stopGrowing();
                    button.style.display = "none";
                    instruction.textContent = "Fully Bloomed! 🌸";
                    showActivityDone();
                }
            }
        }, 50);
    }

    function stopGrowing() {
        clearInterval(holdInterval);
        holdInterval = null;
    }

    // Mouse & Touch events for holding
    button.addEventListener("mousedown", startGrowing);
    button.addEventListener("mouseup", stopGrowing);
    button.addEventListener("mouseleave", stopGrowing);

    button.addEventListener("touchstart", (e) => {
        e.preventDefault();
        startGrowing();
    });
    button.addEventListener("touchend", stopGrowing);
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
    "AND",
    "and-tracker"
);

createWordTracker(
    "CREAM",
    "cream-tracker"
);

buildCharacterGallery();

updateTree();