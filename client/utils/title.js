const filterTitle = (str) => {
    if (!str) return 'Question';
    const data = str.split(/[##\n]/).filter(Boolean);
    return {title: data[0], description: data[1]};
}

export { filterTitle }