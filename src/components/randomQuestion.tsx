export const getRandomQuestion = (numOfSet: number) => {
    const randomIndex = Math.floor(Math.random() * numOfSet) + 1;
    return randomIndex;
}