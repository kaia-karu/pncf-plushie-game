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
        instruction: "A friend asks to copy your homework, but you don't feel comfortable. What's the best response?",
        type: "choice",
        choices: ["I'm not comfortable with that, but I can help explain it to you!",
                "Okay fine, but don't tell anyone.",
                "Ignore them and walk away without saying anything."],
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
        title: "Celebrate Your Effort",
        instruction: "When you work hard on a challenging goal, what is a great way to celebrate yourself?",
        type: "choice",
        choices: [
            "Ignore my progress and complain because I didn't do it perfectly.",
            "Acknowledge my effort and give myself credit for my hard work!",
            "Wait for someone else to notice my effort before feeling happy."
        ],
        correct: 1
    },
    {
        character: "sunday",
        letter: "S",
        title: "Make a Goal",
        instruction: "You want to start a new project but it feels overwhelming. What do you do?",
        type: "choice",
        choices: ["Break it into small steps, like sketching a quick design first.",
                 "Try to complete the project in one night without stopping.", 
                 "Give up because it feels too hard."],
        correct: 0
    },

    // --- AND ---
    {
        character: "friday",
        letter: "A",
        title: "Make a Connection",
        instruction: "You see someone wearing a shirt from your favorite game. How do you start a friendly chat?",
        type: "choice",
        choices: ["Wait for them to talk to you.", 
                 "Tell them you're probably much better at the game than they are.",
                 "Hey! I love your shirt, that's one of my favorite games too!"],
        correct: 2
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
        title: "Reframing a Tough Day",
        instruction: "You had a frustrating day where things didn't go as planned. What helps before going to bed?",
        type: "choice",
        choices: ["Reflect on at least one small thing that went well today.",
                    "Replay the worst part of the day over and over.",
                    "Assume that tomorrow will go poorly too."],
        correct: 0
    },

    // --- CREAM ---
    {
        character: "monday",
        letter: "C",
        title: "Positive Thought",
        instruction: "Choose a positive thought to carry with you.",
        type: "choice",
        choices: ["I am growing and learning every single day.", 
                "I have the strength to handle whatever comes my way.", 
                "My effort matters, and I am proud of trying my best."],
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
        choices: ["Keep everything to myself and try to figure it out.", 
                 "Give up immediately.",
                 "Take a breathe and ask someone I trust for help."],
        correct: 2
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
        title: "Final Peach Pop!",
        instruction: "Pop the bouncing peaches to finish your journey!",
        type: "tap",
        goal: 10
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
    
    if (activity.type === "exercise") {
        
        createExerciseGame(area, activity);
    }

    showScreen("activity");

}

/* =========================================
   exercise GAME
========================================= */

function createExerciseGame(area, activity) {
    let done = 0;
    const counter = document.createElement("div");
    counter.className = "tap-counter";
    counter.textContent = `Completed: 0 / ${activity.goal}`;

    const btn = document.createElement("button");
    btn.className = "btn btn-green";
    btn.textContent = "I did one! 🏃";

    btn.addEventListener("click", () => {
        done++;
        counter.textContent = `Completed: ${done} / ${activity.goal}`;
        if (done >= activity.goal) {
            btn.style.display = "none";
            showActivityDone();
        }
    });

    area.appendChild(counter);
    area.appendChild(btn);
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
        const counterRect = counter.getBoundingClientRect();

        // Ensure peach bounces above the counter with a 10px buffer
        const maxX = areaRect.width - peachRect.width;
        const maxY = areaRect.height - peachRect.height - (counterRect.height + 10);

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
    let activeFlowerIndex = 0;
    const flowerEmojis = ["🌸", "🌺", "🌼"];
    let holdInterval = null;

    const container = document.createElement("div");
    container.className = "grow-game-container-row";

    const flowerBoxes = [];
    const flowerElements = [];

    // Create 3 individual flower elements side-by-side
    flowerEmojis.forEach((emoji, index) => {
        const flowerBox = document.createElement("div");
        flowerBox.className = "grow-flower-box";
        if (index === 0) flowerBox.classList.add("active-target");

        const ring = document.createElement("div");
        ring.className = "grow-target-ring-sm";

        const flower = document.createElement("div");
        flower.className = "grow-flower-icon";
        flower.textContent = emoji;

        flowerBox.appendChild(ring);
        flowerBox.appendChild(flower);
        container.appendChild(flowerBox);

        flowerBoxes.push(flowerBox);
        flowerElements.push(flower);
    });

    const instruction = document.createElement("div");
    instruction.className = "tap-counter";
    instruction.textContent = "Press and hold Flower 1 to make it bloom!";

    area.appendChild(container);
    area.appendChild(instruction);

    function startGrowing(index) {
        // Only allow growing the current active flower
        if (index !== activeFlowerIndex || holdInterval) return;

        holdInterval = setInterval(() => {
            progress += 4;
            const currentScale = 0.2 + (progress / 100) * 0.8;
            const currentOpacity = 0.3 + (progress / 100) * 0.7;

            const activeFlower = flowerElements[activeFlowerIndex];
            activeFlower.style.transform = `scale(${currentScale})`;
            activeFlower.style.opacity = currentOpacity;

            if (progress >= 100) {
                stopGrowing();
                activeFlower.style.transform = "scale(1)";
                activeFlower.style.opacity = "1";
                activeFlower.classList.add("bloomed");

                flowerBoxes[activeFlowerIndex].classList.remove("active-target");
                activeFlowerIndex++;
                progress = 0;

                if (activeFlowerIndex < flowerEmojis.length) {
                    flowerBoxes[activeFlowerIndex].classList.add("active-target");
                    instruction.textContent = `Great job! Now hold Flower ${activeFlowerIndex + 1}!`;
                } else {
                    instruction.textContent = "All 3 flowers bloomed beautifully! 🌸🌺🌼";
                    showActivityDone();
                }
            }
        }, 50);
    }

    function stopGrowing() {
        clearInterval(holdInterval);
        holdInterval = null;
    }

    // Attach touch/mouse listeners directly to each flower box
    flowerBoxes.forEach((box, index) => {
        box.addEventListener("mousedown", () => startGrowing(index));
        box.addEventListener("mouseup", stopGrowing);
        box.addEventListener("mouseleave", stopGrowing);

        box.addEventListener("touchstart", (e) => {
            e.preventDefault();
            startGrowing(index);
        });
        box.addEventListener("touchend", stopGrowing);
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