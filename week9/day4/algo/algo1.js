const openBrac = '([{'
const closingBrac = '}])'
const hashTable = {
    "}":"{",
    ")":"(",
    "]":"[",
}

const stack = []

for (const character of string) {
    if (openBrac.includes(character)) {
        stack.push(character)
    } else if (closingBrac.includes(character)) {
       if (stack[stack.length() -1] === hashTable[character]) {
        stack.pop()
       } else {
        return false
       }
    }
    return stack.length === 0
}