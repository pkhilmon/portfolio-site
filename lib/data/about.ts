export interface AboutContent {
    heading: string
    paragraphs: string[]
}

export const aboutContent: AboutContent = {
    heading: "About",
    paragraphs: [
        "I started my engineering career building games — writing C# in Unity, designing real-time game loops, and debugging performance problems that couldn't hide behind abstractions. From there, I worked in Java enterprise systems and embedded Python, always chasing constraints that forced clear thinking. Each domain had its own rules, its own failure modes.",
        "The move to frontend web wasn't a detour — it was the convergence point. Web development puts every layer on the table at once: UI polish, state management, API contracts, database design, deployment pipelines, and performance optimisation. After working across the stack in other domains, web felt like the place where everything I'd learned mattered in the same afternoon.",
        "What that background buys you: when I build a React component, I'm not guessing why it re-renders or where the bottleneck lives. When I talk to a backend engineer, I'm not translating — I've been on that side. Breadth isn't a liability when the person who has it can articulate exactly how it applies.",
    ]
}