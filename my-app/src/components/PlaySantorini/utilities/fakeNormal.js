const fakeNormal = () => {
    const rand = Math.random()
    if (rand <= 0.05) {
        return 0
    }
    if (0.05 < rand && rand <= 0.25) {
        return 1
    }
    if (0.25 < rand && rand <= 0.75) {
        return 2
    }
    if (0.75 < rand && rand <= 0.95) {
        return 3
    }
    return 4
}

export default fakeNormal