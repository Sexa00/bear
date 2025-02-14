document.addEventListener('DOMContentLoaded', () => {
    let noCount = 0;
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const mainContent = document.getElementById('mainContent');
    const celebrationContent = document.getElementById('celebrationContent');
    const heartsBackground = document.getElementById('heartsBackground');

    // Create floating hearts
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('span');
        heart.className = 'floating-heart';
        heart.textContent = '❤️';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        heartsBackground.appendChild(heart);
    }

    const phrases = [
        "No",
        "Are you sure?",
        "Really sure?",
        "Think again!",
        "Last chance!",
        "Surely not?",
        "You might regret this!",
        "Give it another thought!",
        "Are you absolutely certain?",
        "This could be a mistake!",
        "Have a heart!",
        "Don't be so cold!",
        "Change of heart?",
        "Wouldn't you reconsider?",
        "Is that your final answer?",
        "You're breaking my heart ;(",
        "Plsss? :( You're breaking my heart",
    ];

    noButton.addEventListener('click', () => {
        noCount++;
        const phraseIndex = Math.min(noCount, phrases.length - 1);
        noButton.textContent = phrases[phraseIndex];
        
        // Increase yes button size
        const newYesButtonSize = noCount * 20 + 16;
        yesButton.style.fontSize = `${newYesButtonSize}px`;
    });

    yesButton.addEventListener('click', () => {
        mainContent.style.display = 'none';
        celebrationContent.style.display = 'block';
    });
});
