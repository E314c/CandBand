
// Generate a small, random-ish id for cards (simulating some unique ID from elsewhere in system)
const generateCardId = () => Math.random().toString(36).slice(2);

const SWIMLANES = [
    "Application Received",
    "CV reviewed",
    "Assessment passed",
    "Hired"
]

export default () => ({
    swimlanes: JSON.parse(JSON.stringify(SWIMLANES)),
    cards: [
        {
            id: generateCardId(),
            status: SWIMLANES[0],
            name: "First Steps McGee",
            subtitle: "26 y/o - Male - Place",
            rating: 2
        },
        {
            id: generateCardId(),
            status: SWIMLANES[0],
            name: "High Potential Person",
            subtitle: "32 y/o - Female - Place",
            rating: 5
        },
        {
            id: generateCardId(),
            status: SWIMLANES[0],
            name: "Generic Person",
            subtitle: "23 y/o - Male - Place",
            rating: 3
        },
        {
            id: generateCardId(),
            status: SWIMLANES[2],
            name: "Interesting Person",
            subtitle: "42 y/o - Female - Place",
            rating: 4
        },
        {
            id: generateCardId(),
            status: SWIMLANES[3],
            name: "Rael Sasiak-Rushby",
            subtitle: "25 y/o - Male - UK",
            rating: 5
        }
    ]
});