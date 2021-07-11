export default function shuffle<T>(collection: T[]): T[] {
    const shuffledColleciton: T[] = [...collection]
    for (let i = shuffledColleciton.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledColleciton[i], shuffledColleciton[j]] = [shuffledColleciton[j], shuffledColleciton[i]];
    }
    return shuffledColleciton
}