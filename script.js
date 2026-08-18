// ===== DATA CONSTANTS =====

const characters = [
    {
        name: "Monday",
        time: "Dawn — 5:30 AM",
        role: "Self-care helper",
        image: "assets/images/characters/monday.png",
        description: "Hi, I’m Monday, and I’m here to help you start your week with a positive mindset. I know it can be hard to get out of bed sometimes, especially when you feel anxious or sad. But I’m here to remind you that you are strong, capable, and worthy of happiness. I’ll help you practice some self-care habits, like saying affirmations, writing in a journal, and doing something you love. I’m your Monday, and I’m here to make you feel good about yourself."
    },
    {
        name: "Tuesday",
        time: "Midnight — 12:00 AM",
        role: "Therapist",
        image: "assets/images/characters/tuesday.png",
        description: "Hello, I’m Tuesday, and I’m here to help you cope with your emotions during the night. I know it can be hard to sleep sometimes, especially when you have a lot of worries or fears. But I’m here to tell you that you are not alone and that everything will be okay. I’ll help you practice some relaxation techniques, like breathing, listening to music, or reading a book. I’m your therapist, Tuesday, and I’m here to make you feel calm and safe."
    },
    {
        name: "Wednesday",
        time: "Afternoon — 3:30 PM",
        role: "Teacher",
        image: "assets/images/characters/wednesday.png",
        description: "Hola, I’m Wednesday, and I’m here to help you boost your mood during the afternoon. I know it can be hard to stay focused sometimes, especially when you feel bored or tired. But I’m here to show you that you can have fun and learn at the same time. I’ll help you practice some creativity skills, like drawing, making crafts, or solving puzzles. I’m your teacher, Wednesday, and I’m here to make you feel smart and curious."
    },
    {
        name: "Thursday",
        time: "Noon — 12:00 PM",
        role: "Coach",
        image: "assets/images/characters/thursday.png",
        description: "I’m Thursday, and I’m here to help you balance your needs and wants during the busy hours. Sometimes, it can be hard to say no, especially when you feel pressured or guilty. But I’m here to teach you that you have the right to set boundaries and take care of yourself. I’ll help you practice some assertiveness skills, like expressing your feelings, asking for help, or saying no. I’m your coach, Thursday, and I’m here to make you feel confident and respected."
    },
    {
        name: "Friday",
        time: "Evening — 7:00 PM",
        role: "Friend",
        image: "assets/images/characters/friday.png",
        description: "Hey, I’m Friday, and I’m here to help you connect with others and yourself after a long week. I know it can be hard to make friends sometimes, especially when you feel shy or different. But I’m here to show you that you are not alone and that you have something valuable to offer. I’ll help you practice some social skills, like starting a conversation, giving a compliment, or sharing a story. I’m your friend, Friday, and I’m here to make you feel loved and accepted."
    },
    {
        name: "Saturday",
        time: "Night — 9:00 PM",
        role: "Fan",
        image: "assets/images/characters/saturday.png",
        description: "What’s up, I’m Saturday, and I’m here to help you celebrate your achievements and strengths during the night. I know it can be hard to appreciate yourself sometimes, especially when you feel insecure or inadequate. But I’m here to remind you that you are amazing and that you have done so much. I’ll help you practice some gratitude skills, like listing your accomplishments, acknowledging your talents, or thanking someone. I’m your fan, Saturday, and I’m here to make you feel proud and grateful."
    },
    {
        name: "Sunday",
        time: "Morning — 8:30 PM",
        role: "Mentor",
        image: "assets/images/characters/sunday.png",
        description: "Aloha, I’m Sunday, and I’m here to help you prepare for the new week with a positive attitude. I know it can be hard to face the unknown sometimes, especially when you feel nervous or scared. But I’m here to encourage you that you can handle anything and that you have the power to change your life. I’ll help you practice some goal-setting skills, like making a plan, breaking it down into steps, or rewarding yourself. I’m your mentor, Sunday, and I’m here to make you feel hopeful and inspired."
    }
];

const peachSequence = [
    {
        letter: 'P',
        action: "P - Pop up high!",
        detail: "Jump high into the air!",
        characters: ["monday", "thursday"]
    },
    {
        letter: 'E',
        action: "E - Extend your arms!",
        detail: "Stretch like a peach tree!",
        characters: ["tuesday", "friday"]
    },
    {
        letter: 'A',
        action: "A - Airplane arms!",
        detail: "Balance and soar!",
        characters: ["wednesday", "sunday"]
    },
    {
        letter: 'C',
        action: "C - Clap your hands!",
        detail: "Clap to the rhythm!",
        characters: ["friday", "saturday"]
    },
    {
        letter: 'H',
        action: "H - Hop, hop, hop!",
        detail: "Hop like a happy bunny!",
        characters: ["sunday", "monday"]
    }
];

// ===== STATE & DOM ELEMENTS =====

let currentStep = 0;

const screens = {
    intro: document.getElementById('intro-screen'),
    greeting: document.getElementById('greeting-screen'),
    engagement: document.getElementById('engagement-screen'),
    game: document.getElementById('game-screen'),
    celebration: document.getElementById('celebration-screen'),
    end: document.getElementById('end-screen'),
    characters: document.getElementById('characters-screen'),
    motorcycle: document.getElementById('motorcycle-screen')
};

const characterGallery = document.getElementById('character-gallery');
const characterCard = document.getElementById('character-card');
const characterCardImage = document.getElementById('character-card-image');
const characterCardName = document.getElementById('character-card-name');
const characterCardTime = document.getElementById('character-card-time');
const characterCardRole = document.getElementById('character-card-role');
const characterCardDescription = document.getElementById('character-card-description');

// ===== UI RENDER & CONTROLLER FUNCTIONS =====

function showScreen(screenKey) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    if (screens[screenKey]) {
        screens[screenKey].classList.add('active');
    }
}

function updateGameStep() {
    const stepData = peachSequence[currentStep];

    document.getElementById('action-instruction').innerText = stepData.action;
    document.getElementById('action-subtext').innerText = stepData.detail;

    // Update progress tracker badges
    peachSequence.forEach(item => {
        const badge = document.getElementById(`track-${item.letter}`);
        if (!badge) return;

        badge.classList.remove('active-letter', 'completed-letter');

        if (item.letter === stepData.letter) {
            badge.classList.add('active-letter');
        } else if (peachSequence.indexOf(item) < currentStep) {
            badge.classList.add('completed-letter');
        }
    });

    updateGameCharacters();
}

function updateGameCharacters() {
    const stage = document.querySelector('.gameplay-stage');
    const currentActivity = peachSequence[currentStep];

    // Clear stage
    stage.innerHTML = "";

    const activeChars = currentActivity.characters.map(name => 
        characters.find(c => c.name.toLowerCase() === name)
    ).filter(Boolean);

    // Left character
    if (activeChars[0]) {
        const char1 = document.createElement('div');
        char1.classList.add('game-character');
        char1.innerHTML = `<img src="${activeChars[0].image}" alt="${activeChars[0].name}">`;
        stage.appendChild(char1);
    }

    // Motorcycle in the middle
    const mascotImg = document.createElement('img');
    mascotImg.id = "game-plushie-img";
    mascotImg.src = "assets/images/motorcycle.jpg";
    mascotImg.alt = "PNCF Mascot Action";
    mascotImg.className = "game-image bounce-anim";
    stage.appendChild(mascotImg);

    // Right character
    if (activeChars[1]) {
        const char2 = document.createElement('div');
        char2.classList.add('game-character');
        char2.innerHTML = `<img src="${activeChars[1].image}" alt="${activeChars[1].name}">`;
        stage.appendChild(char2);
    }
}

function createCharacterGallery() {
    characterGallery.innerHTML = "";

    characters.forEach(character => {
        const characterButton = document.createElement('button');
        characterButton.classList.add('character-item');
        characterButton.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
        `;

        characterButton.addEventListener('click', () => showCharacterCard(character));
        characterGallery.appendChild(characterButton);
    });
}

function showCharacterCard(character) {
    characterCardImage.src = character.image;
    characterCardImage.alt = character.name;
    characterCardName.innerText = character.name;
    characterCardTime.innerText = character.time;
    characterCardRole.innerText = `Your ${character.role}`;
    characterCardDescription.innerText = character.description;

    characterCard.classList.remove('hidden');
}

// ===== EVENT LISTENERS =====

document.getElementById('start-button').addEventListener('click', () => showScreen('greeting'));
document.getElementById('greeting-next-btn').addEventListener('click', () => showScreen('engagement'));

document.getElementById('ready-btn').addEventListener('click', () => {
    currentStep = 0;
    updateGameStep();
    showScreen('game');
});

document.getElementById('next-action-btn').addEventListener('click', () => {
    currentStep++;
    if (currentStep < peachSequence.length) {
        updateGameStep();
    } else {
        showScreen('celebration');
    }
});

document.getElementById('celebration-next-btn').addEventListener('click', () => showScreen('end'));
document.getElementById('replay-btn').addEventListener('click', () => showScreen('intro'));
document.getElementById('characters-btn').addEventListener('click', () => showScreen('characters'));

document.getElementById('characters-back-btn').addEventListener('click', () => {
    characterCard.classList.add('hidden');
    showScreen('end');
});

document.getElementById('close-character-card').addEventListener('click', () => {
    characterCard.classList.add('hidden');
});

document.getElementById('motorcycle-btn').addEventListener('click', () => {
    showScreen('motorcycle');
});

document.getElementById('motorcycle-back-btn').addEventListener('click', () => {
    showScreen('end');
});

// Initialize Gallery on Load
createCharacterGallery();