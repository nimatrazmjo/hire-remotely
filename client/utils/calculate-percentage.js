const calculatePercenTage = (takenPercentage = 0, totalPercentage = 100) => {
    return Math.round((takenPercentage / totalPercentage) * 100).toFixed();
}

export { calculatePercenTage };