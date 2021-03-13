// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    const arr = [];
    matrix.forEach((item, index) => {
        if (index % 2 === 0) {
            arr.push(...item);
        } else {
            arr.push(...item.reverse());
        }
    })
    return arr;
}
