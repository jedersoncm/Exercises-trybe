const assert = require('assert')

const myList = [1, 2, 3]

// escreva swap abaixo
const swap = ([p1, p2, p3]) => [p3, p2, p1];  

const swappedList = swap(myList)

assert.equal(swappedList[0], 3)
assert.equal(swappedList[1], 2)
assert.equal(swappedList[2], 1)