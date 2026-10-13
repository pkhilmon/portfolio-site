export interface AboutContent {
    heading: string
    paragraph: string
    games: {
        intro: string
        links: { title: string; url: string }[]
    }
}

export const aboutContent: AboutContent = {
    heading: "About",
    paragraph: "I've been writing software for over ten years: Flash animations and games, then HTML5 and Unity, then Java enterprise systems. Today I build web products end to end with Next.js and TypeScript, covering UI, API, database and deployment. That range is why one person can own your whole stack: I don't need to hand off the backend, and I don't have to guess where a bottleneck is.",
    games: {
        intro: "Before web, I shipped HTML5 games that are still playable:",
        links: [
            { title: "Bubble Burst", url: "https://www.funnygames.org/game/bubble_burst.html" },
            { title: "Jelly Madness", url: "https://www.funnygames.org/game/jelly_madness.html" },
            { title: "Jelly Madness 2", url: "https://www.funnygames.org/game/jelly_madness_2.html" },
            { title: "Jewel Burst", url: "https://www.funnygames.org/game/jewel_burst.html" },
        ]
    }
}
