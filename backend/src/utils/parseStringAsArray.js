module.exports = function parseStringAsArray(arrayAsString) {
    // trim - remove espaçamento no começo e final da string
    return arrayAsString.split(',').map(arrayAsString => arrayAsString.trim())
}