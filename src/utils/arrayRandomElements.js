function arrayRandomElements(arr, numElements) {
    const shuffled = arr.slice(0).sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numElements);
}

export default arrayRandomElements