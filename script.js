// Sequence definition based on PNCF Script
const peachSequence = [
    { letter: 'P', action: "P - Pop up high!", detail: "Jump high into the air!" },
    { letter: 'E', action: "E - Extend your arms!", detail: "Stretch like a peach tree!" },
    { letter: 'A', action: "A - Airplane arms!", detail: "Balance and soar!" },
    { letter: 'C', action: "C - Clap your hands!", detail: "Clap to the rhythm!" },
    { letter: 'H', action: "H - Hop, hop, hop!", detail: "Hop like a happy bunny!" }
];

let currentStep = 0;

// Screen elements
const screens = {
    intro: document.getElementById('intro-screen'),
    greeting: document.getElementById('greeting-screen'),
    engagement: document.getElementById('engagement-screen'),
    game: document.getElementById('game-screen'),
    celebration: document.getElementById('celebration-screen'),
    end: document.getElementById('end-screen')
};

// Function to switch screens
function showScreen(screenKey) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenKey].classList.add('active');
}

// Update UI for the active P-E-A-C-H step
function updateGameStep() {
    const stepData = peachSequence[currentStep];

    document.getElementById('action-instruction').innerText = stepData.action;
    document.getElementById('action-subtext').innerText = stepData.detail;

    // Highlight active badges
    peachSequence.forEach(item => {
        const badge = document.getElementById(`track-${item.letter}`);
        badge.classList.remove('active-letter', 'completed-letter');

        if (item.letter === stepData.letter) {
            badge.classList.add('active-letter');
        } else if (peachSequence.indexOf(item) < currentStep) {
            badge.classList.add('completed-letter');
        }
    });
}

// --- Event Listeners for Button Taps/Clicks ---

// Intro -> Greeting
document.getElementById('start-button').addEventListener('click', () => {
    showScreen('greeting');
});

// Greeting -> Engagement
document.getElementById('greeting-next-btn').addEventListener('click', () => {
    showScreen('engagement');
});

// Engagement -> Start Game Loop
document.getElementById('ready-btn').addEventListener('click', () => {
    currentStep = 0;
    updateGameStep();
    showScreen('game');
});

// Game Loop Progress
document.getElementById('next-action-btn').addEventListener('click', () => {
    currentStep++;
    if (currentStep < peachSequence.length) {
        updateGameStep();
    } else {
        showScreen('celebration');
    }
});

// Celebration -> End Screen
document.getElementById('celebration-next-btn').addEventListener('click', () => {
    showScreen('end');
});

// Replay Game
document.getElementById('replay-btn').addEventListener('click', () => {
    showScreen('intro');
});