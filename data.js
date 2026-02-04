/**
 * Content Database for "What Should I Watch?" Quiz
 *
 * HOW TO ADD NEW CONTENT:
 * 1. Add a new object to the CONTENT array
 * 2. Include: title, type, platform, description, tags
 * 3. Tags should match the scoring system in app.js
 *
 * AVAILABLE TAGS:
 * Mood: "chill", "intense", "funny", "emotional", "mindless"
 * Genre: "thriller", "comedy", "drama", "documentary", "romance", "scifi", "crime"
 * Length: "short" (< 45min episodes or < 2hr movie), "medium", "long" (multi-season)
 * Energy: "lowkey", "engaging", "wild"
 */

const CONTENT = [
    // === NETFLIX GERMANY ===
    {
        title: "Dark",
        type: "Series",
        platform: "Netflix Germany",
        description: "Time travel, family secrets, and enough plot twists to make your brain do yoga. Perfect for when you want to feel smart and confused simultaneously.",
        tags: ["intense", "thriller", "scifi", "long", "engaging", "wild"],
        year: 2020
    },
    {
        title: "How to Sell Drugs Online (Fast)",
        type: "Series",
        platform: "Netflix Germany",
        description: "A nerdy German teen accidentally becomes a drug kingpin. It's Breaking Bad if Walter White had a TikTok account.",
        tags: ["funny", "comedy", "drama", "medium", "engaging"],
        year: 2022
    },
    {
        title: "Barbarians",
        type: "Series",
        platform: "Netflix Germany",
        description: "Romans vs. Germanic tribes with lots of mud, battle cries, and questionable life choices. History class never looked this intense.",
        tags: ["intense", "drama", "long", "engaging", "wild"],
        year: 2022
    },
    {
        title: "The Queen's Gambit",
        type: "Limited Series",
        platform: "Netflix Germany",
        description: "Chess has never been this sexy or dramatic. You'll want to learn how to play and look brooding in turtlenecks.",
        tags: ["emotional", "drama", "medium", "engaging"],
        year: 2020
    },
    {
        title: "Squid Game",
        type: "Series",
        platform: "Netflix Germany",
        description: "Childhood games but make it deadly. You'll never look at Red Light, Green Light the same way again.",
        tags: ["intense", "thriller", "drama", "medium", "wild"],
        year: 2024
    },
    {
        title: "Bridgerton",
        type: "Series",
        platform: "Netflix Germany",
        description: "Regency-era romance with modern vibes and classical covers of pop songs. Your grandma and your best friend can both enjoy this.",
        tags: ["chill", "romance", "drama", "long", "engaging"],
        year: 2024
    },
    {
        title: "Wednesday",
        type: "Series",
        platform: "Netflix Germany",
        description: "The Addams Family's daughter goes to murder school and solves mysteries with maximum deadpan energy. Iconic.",
        tags: ["funny", "comedy", "thriller", "medium", "engaging"],
        year: 2022
    },
    {
        title: "Lupin",
        type: "Series",
        platform: "Netflix Germany",
        description: "A gentleman thief in modern Paris being extremely cool and French. You'll want to wear a flat cap afterwards.",
        tags: ["intense", "thriller", "crime", "medium", "engaging"],
        year: 2024
    },
    {
        title: "Emily in Paris",
        type: "Series",
        platform: "Netflix Germany",
        description: "An American in Paris having main character energy and questionable French. Perfect for when you want pretty visuals and zero stress.",
        tags: ["chill", "comedy", "romance", "long", "mindless", "lowkey"],
        year: 2024
    },
    {
        title: "Our Planet",
        type: "Documentary",
        platform: "Netflix Germany",
        description: "David Attenborough whispering about nature will either relax you or make you cry about polar bears. Possibly both.",
        tags: ["chill", "documentary", "emotional", "medium", "lowkey"],
        year: 2019
    },
    {
        title: "Glass Onion: A Knives Out Mystery",
        type: "Movie",
        platform: "Netflix Germany",
        description: "A murder mystery on a billionaire's private island with Daniel Craig being delightfully Southern. Chef's kiss.",
        tags: ["funny", "thriller", "comedy", "short", "engaging"],
        year: 2022
    },
    {
        title: "Don't Look Up",
        type: "Movie",
        platform: "Netflix Germany",
        description: "Scientists try to warn people about a comet and nobody listens. It's satire that hits a little too close to home.",
        tags: ["funny", "comedy", "drama", "short", "engaging"],
        year: 2021
    },
    {
        title: "The Adam Project",
        type: "Movie",
        platform: "Netflix Germany",
        description: "Ryan Reynolds time travels to team up with his younger self. It's fun, it's heartwarming, it's Ryan Reynolds being Ryan Reynolds.",
        tags: ["chill", "scifi", "comedy", "short", "engaging"],
        year: 2022
    },
    {
        title: "All Quiet on the Western Front",
        type: "Movie",
        platform: "Netflix Germany",
        description: "A devastating anti-war film that will make you appreciate your couch more than ever. Beautifully made, emotionally brutal.",
        tags: ["intense", "emotional", "drama", "short", "engaging"],
        year: 2022
    },
    {
        title: "Heartstopper",
        type: "Series",
        platform: "Netflix Germany",
        description: "A sweet British teen romance that will make your heart so warm you might need to check if it's still beating.",
        tags: ["chill", "emotional", "romance", "short", "lowkey"],
        year: 2024
    },
    {
        title: "Black Mirror",
        type: "Series",
        platform: "Netflix Germany",
        description: "Technology-themed horror stories that will make you side-eye your smartphone. Each episode is its own nightmare.",
        tags: ["intense", "thriller", "scifi", "medium", "wild", "engaging"],
        year: 2025
    },
    {
        title: "The Diplomat",
        type: "Series",
        platform: "Netflix Germany",
        description: "Political drama with a stressed diplomat solving international crises while having relationship problems. Relatable chaos.",
        tags: ["intense", "drama", "thriller", "medium", "engaging"],
        year: 2024
    },
    {
        title: "Beef",
        type: "Series",
        platform: "Netflix Germany",
        description: "A road rage incident spirals into absolute mayhem. It's dark comedy gold that keeps escalating beautifully.",
        tags: ["intense", "funny", "comedy", "drama", "short", "wild", "engaging"],
        year: 2023
    },

    // === ARD MEDIATHEK ===
    {
        title: "Tatort",
        type: "Series",
        platform: "ARD Mediathek",
        description: "Germany's favorite Sunday crime ritual. Pick a city, pick a detective, enjoy the murder mystery with your Abendbrot.",
        tags: ["chill", "crime", "drama", "short", "lowkey"],
        year: 2026
    },
    {
        title: "Babylon Berlin",
        type: "Series",
        platform: "ARD Mediathek",
        description: "1920s Berlin with jazz, crime, and stunning aesthetics. It's history class but with sequins and intrigue.",
        tags: ["intense", "crime", "drama", "long", "engaging"],
        year: 2022
    },
    {
        title: "Charité",
        type: "Series",
        platform: "ARD Mediathek",
        description: "Medical drama through German history at Berlin's famous hospital. Educational and dramatic - your teachers would be proud.",
        tags: ["emotional", "drama", "documentary", "medium", "engaging"],
        year: 2023
    },
    {
        title: "Deutschland 83",
        type: "Series",
        platform: "ARD Mediathek",
        description: "A young East German spy infiltrates the West during the Cold War. Retro vibes, spy thrills, and an killer 80s soundtrack.",
        tags: ["intense", "thriller", "drama", "medium", "engaging"],
        year: 2018
    },
    {
        title: "Terra X",
        type: "Documentary",
        platform: "ARD Mediathek",
        description: "German documentaries about history, science, and nature. Like YouTube rabbit holes but actually educational.",
        tags: ["chill", "documentary", "short", "lowkey", "mindless"],
        year: 2026
    },
    {
        title: "Mord mit Aussicht",
        type: "Series",
        platform: "ARD Mediathek",
        description: "Crime comedy in a tiny German village where everyone knows everyone. Cozy murders, if that's a genre.",
        tags: ["chill", "funny", "comedy", "crime", "medium", "lowkey"],
        year: 2023
    },
    {
        title: "Die Carolin Kebekus Show",
        type: "Show",
        platform: "ARD Mediathek",
        description: "Germany's sharpest comedy queen roasting everything and everyone. Perfect for when you want to laugh at the state of the world.",
        tags: ["funny", "comedy", "short", "lowkey", "mindless"],
        year: 2026
    },
    {
        title: "Wer weiß denn sowas?",
        type: "Show",
        platform: "ARD Mediathek",
        description: "Trivia show with delightfully useless knowledge. Great for feeling either very smart or very dumb.",
        tags: ["chill", "funny", "comedy", "short", "lowkey", "mindless"],
        year: 2026
    },
    {
        title: "Eldorado KaDeWe",
        type: "Series",
        platform: "ARD Mediathek",
        description: "1920s Berlin department store drama. Fashion, forbidden love, and the birth of modern shopping. Retail therapy as art.",
        tags: ["emotional", "drama", "romance", "medium", "engaging"],
        year: 2022
    },
    {
        title: "Die Eifelpraxis",
        type: "Series",
        platform: "ARD Mediathek",
        description: "A country doctor in the beautiful Eifel region. Heartwarming medical stories and gorgeous German countryside.",
        tags: ["chill", "emotional", "drama", "short", "lowkey"],
        year: 2024
    },
    {
        title: "Polizeiruf 110",
        type: "Series",
        platform: "ARD Mediathek",
        description: "The other German crime classic. Different cities, different detectives, same Sunday evening comfort.",
        tags: ["chill", "crime", "drama", "short", "lowkey"],
        year: 2025
    },
    {
        title: "Die Toten vom Bodensee",
        type: "Series",
        platform: "ARD Mediathek",
        description: "Murder mysteries at beautiful Lake Constance. The scenery is stunning, the corpses are plentiful. A classic combo.",
        tags: ["chill", "crime", "thriller", "medium", "engaging"],
        year: 2024
    }
];

/**
 * Quiz Questions Configuration
 * Each question has:
 * - id: unique identifier
 * - question: the text shown to the user
 * - emoji: a fun emoji for the question
 * - answers: array of possible answers, each with text and tags
 */
const QUESTIONS = [
    {
        id: "energy",
        question: "What's your energy level right now?",
        emoji: "⚡",
        answers: [
            { text: "Horizontal and proud of it", tags: ["chill", "lowkey", "mindless"] },
            { text: "Functioning... barely", tags: ["chill", "engaging"] },
            { text: "Could focus on something good", tags: ["engaging"] },
            { text: "Wired and ready to be entertained", tags: ["intense", "wild", "engaging"] }
        ]
    },
    {
        id: "attention",
        question: "How's your attention span tonight?",
        emoji: "🧠",
        answers: [
            { text: "A goldfish could outfocus me", tags: ["short", "mindless", "lowkey"] },
            { text: "I can commit for about 2 hours", tags: ["short", "medium"] },
            { text: "Ready for a proper series", tags: ["medium", "long"] },
            { text: "I want to get INVESTED", tags: ["long", "engaging"] }
        ]
    },
    {
        id: "feelings",
        question: "Do you want to feel feelings?",
        emoji: "💭",
        answers: [
            { text: "Make me ugly cry", tags: ["emotional", "drama"] },
            { text: "Give me ALL the warm fuzzies", tags: ["emotional", "romance", "chill"] },
            { text: "Light feelings only please", tags: ["funny", "comedy", "chill"] },
            { text: "Feelings are cancelled tonight", tags: ["mindless", "comedy", "funny"] }
        ]
    },
    {
        id: "chaos",
        question: "How much chaos can you handle?",
        emoji: "🌀",
        answers: [
            { text: "Plot twist me into oblivion", tags: ["wild", "thriller", "intense"] },
            { text: "Some spice is nice", tags: ["engaging", "thriller", "drama"] },
            { text: "Mildly interesting things happening", tags: ["drama", "engaging"] },
            { text: "Predictable comfort please", tags: ["chill", "lowkey", "romance"] }
        ]
    },
    {
        id: "reality",
        question: "Real world or escape?",
        emoji: "🌍",
        answers: [
            { text: "Show me the real stuff", tags: ["documentary", "drama"] },
            { text: "Reality but make it dramatic", tags: ["drama", "crime", "engaging"] },
            { text: "A little bit of both", tags: ["drama", "comedy"] },
            { text: "Full fantasy escape mode", tags: ["scifi", "romance", "wild"] }
        ]
    },
    {
        id: "vibe",
        question: "Pick a vibe:",
        emoji: "✨",
        answers: [
            { text: "Cozy blanket energy", tags: ["chill", "lowkey", "romance"] },
            { text: "Edge of my seat", tags: ["thriller", "intense", "wild"] },
            { text: "Laughing out loud", tags: ["comedy", "funny"] },
            { text: "Learn something new", tags: ["documentary", "drama", "engaging"] }
        ]
    }
];

// Make available globally
window.CONTENT = CONTENT;
window.QUESTIONS = QUESTIONS;
