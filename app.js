/**
 * Quiz Application Logic
 *
 * How the recommendation system works:
 * 1. User answers questions, each answer adds tags to their profile
 * 2. We count how many times each tag appears (their "score")
 * 3. We compare user's tag profile against each content item
 * 4. Content with the most matching tags wins!
 *
 * This is intentionally simple - no AI, no complex algorithms.
 * Just tag matching with a bit of randomness for variety.
 */

// === State Management ===
const state = {
    currentQuestion: 0,
    userTags: [],  // All tags collected from answers
    answers: []    // Store which answers were selected (for debugging)
};

// === DOM Elements ===
// We'll cache these after DOM loads
let elements = {};

// === Initialize App ===
function initApp() {
    // Cache DOM elements for performance
    elements = {
        startScreen: document.getElementById('start-screen'),
        quizScreen: document.getElementById('quiz-screen'),
        resultsScreen: document.getElementById('results-screen'),
        startBtn: document.getElementById('start-btn'),
        restartBtn: document.getElementById('restart-btn'),
        questionEmoji: document.getElementById('question-emoji'),
        questionText: document.getElementById('question-text'),
        answersContainer: document.getElementById('answers-container'),
        progressFill: document.getElementById('progress-fill'),
        progressCurrent: document.getElementById('progress-current'),
        progressTotal: document.getElementById('progress-total'),
        recommendationsContainer: document.getElementById('recommendations-container')
    };

    // Set up event listeners
    elements.startBtn.addEventListener('click', startQuiz);
    elements.restartBtn.addEventListener('click', restartQuiz);

    // Set total questions
    elements.progressTotal.textContent = QUESTIONS.length;

    // Show start screen
    showScreen('start');
}

// === Screen Management ===
function showScreen(screenName) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // Show the requested screen
    const screenId = `${screenName}-screen`;
    document.getElementById(screenId).classList.add('active');

    // Scroll to top when changing screens
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// === Quiz Flow ===
function startQuiz() {
    // Reset state
    state.currentQuestion = 0;
    state.userTags = [];
    state.answers = [];

    // Show quiz screen and first question
    showScreen('quiz');
    showQuestion(0);
}

function showQuestion(index) {
    const question = QUESTIONS[index];

    // Update progress
    elements.progressCurrent.textContent = index + 1;
    const progressPercent = ((index) / QUESTIONS.length) * 100;
    elements.progressFill.style.width = `${progressPercent}%`;

    // Update question display
    elements.questionEmoji.textContent = question.emoji;
    elements.questionText.textContent = question.question;

    // Clear and rebuild answers
    elements.answersContainer.innerHTML = '';

    question.answers.forEach((answer, answerIndex) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer.text;
        button.setAttribute('data-index', answerIndex);

        // Handle answer selection
        button.addEventListener('click', () => selectAnswer(answerIndex));

        elements.answersContainer.appendChild(button);
    });
}

function selectAnswer(answerIndex) {
    const question = QUESTIONS[state.currentQuestion];
    const answer = question.answers[answerIndex];

    // Add tags from this answer to user's profile
    state.userTags.push(...answer.tags);
    state.answers.push({
        question: question.id,
        answer: answer.text,
        tags: answer.tags
    });

    // Visual feedback - briefly highlight selected answer
    const buttons = elements.answersContainer.querySelectorAll('.answer-btn');
    buttons[answerIndex].classList.add('selected');

    // Disable all buttons to prevent double-clicking
    buttons.forEach(btn => btn.disabled = true);

    // Move to next question after a short delay (for visual feedback)
    setTimeout(() => {
        state.currentQuestion++;

        if (state.currentQuestion < QUESTIONS.length) {
            showQuestion(state.currentQuestion);
        } else {
            // Quiz complete! Show results
            elements.progressFill.style.width = '100%';
            showResults();
        }
    }, 300);
}

// === Recommendation Logic ===
/**
 * Calculate how well a content item matches the user's tags
 * Returns a score (higher = better match)
 */
function calculateMatchScore(content) {
    let score = 0;

    // Count matching tags
    content.tags.forEach(tag => {
        // Each time this tag appears in user's answers, add to score
        const tagCount = state.userTags.filter(t => t === tag).length;
        score += tagCount;
    });

    // Add small random factor to mix things up (0-0.5)
    // This prevents always getting the same results
    score += Math.random() * 0.5;

    return score;
}

/**
 * Get the best content recommendations based on user's answers
 * Returns top 3 matches
 */
function getRecommendations() {
    // Calculate scores for all content
    const scored = CONTENT.map(content => ({
        ...content,
        score: calculateMatchScore(content)
    }));

    // Sort by score (highest first)
    scored.sort((a, b) => b.score - a.score);

    // Return top 3 (or fewer if we don't have enough content)
    return scored.slice(0, 3);
}

/**
 * Generate a fun "why this matches" reason based on tags
 */
function generateMatchReason(content) {
    // Find which of the user's top tags match this content
    const tagCounts = {};
    state.userTags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });

    // Sort tags by count
    const sortedTags = Object.entries(tagCounts)
        .sort((a, b) => b[1] - a[1])
        .map(entry => entry[0]);

    // Find matching tags
    const matchingTags = sortedTags.filter(tag => content.tags.includes(tag));

    // Generate reason based on top matching tags
    const reasons = {
        'chill': "Perfect for your low-key mood",
        'intense': "Matches your 'ready for anything' energy",
        'funny': "You wanted laughs, you got 'em",
        'emotional': "Prepared tissues not included",
        'mindless': "Zero brain cells required",
        'thriller': "For your thriller-seeking soul",
        'comedy': "Comedy goldmine incoming",
        'drama': "Drama delivered as requested",
        'documentary': "Real-world goodness for the curious mind",
        'romance': "Love is in the algorithm",
        'scifi': "Sci-fi vibes activated",
        'crime': "Crime time is the right time",
        'short': "Respects your precious time",
        'medium': "Just the right length",
        'long': "For your 'I have time' energy",
        'engaging': "Will definitely keep you hooked",
        'wild': "Chaos level: chef's kiss",
        'lowkey': "Chill vibes guaranteed"
    };

    // Pick the best reason from matching tags
    for (const tag of matchingTags) {
        if (reasons[tag]) {
            return reasons[tag];
        }
    }

    return "The algorithm gods have spoken";
}

// === Display Results ===
function showResults() {
    const recommendations = getRecommendations();

    // Clear previous results
    elements.recommendationsContainer.innerHTML = '';

    // Create cards for each recommendation
    recommendations.forEach((rec, index) => {
        const card = createRecommendationCard(rec, index);
        elements.recommendationsContainer.appendChild(card);
    });

    // Show results screen
    showScreen('results');
}

/**
 * Create a recommendation card element
 */
function createRecommendationCard(rec, index) {
    const card = document.createElement('div');
    card.className = 'recommendation-card';

    // Badge text based on position
    const badges = ['Top Pick', 'Great Match', 'Also Try'];
    const badge = badges[index] || 'Recommended';

    // Platform emoji
    const platformEmoji = rec.platform.includes('Netflix') ? '🔴' : '📺';

    const matchReason = generateMatchReason(rec);

    card.innerHTML = `
        <div class="rec-header">
            <h3 class="rec-title">${rec.title}</h3>
            <span class="rec-badge">${badge}</span>
        </div>
        <div class="rec-meta">
            <span>📺 ${rec.type}</span>
            <span>${platformEmoji} ${rec.platform}</span>
        </div>
        <p class="rec-description">${rec.description}</p>
        <p class="match-reason">✨ ${matchReason}</p>
    `;

    return card;
}

// === Restart Quiz ===
function restartQuiz() {
    startQuiz();
}

// === Start the app when DOM is ready ===
document.addEventListener('DOMContentLoaded', initApp);
