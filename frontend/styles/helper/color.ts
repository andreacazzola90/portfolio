/**
 * @param {string} id - key of colors object in /styles/theme.ts eg. one of ['red', 'green', ...]
 * @param {string} shade - color variant key of colors[id][shade]
 * @example ${color('red', 50)}
 */
const color = (id: string, shade: number = 100) => ({ theme }) => {
    if (!theme.colors[id][shade]) {
        throw new Error(`theme.colors[${id}][${shade}] must be defined`)
    }

    return theme.colors[id][shade]
}

export default color;