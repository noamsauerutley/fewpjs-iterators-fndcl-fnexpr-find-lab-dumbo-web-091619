const testVar = {}

// Write a function called `superbowlWin()` in `index.js` that:
//  * Receives 1 argument, an `Array` of JavaScript `Object`s
//  * Each object has two properties: `year` and `result`
//  * Use `find()` to test each `Object` to see if the `result` is `"W"` &mdash; a
//    win!
//  * `superbowlWin()` should return the `year` when the win occurred (if it
//    occurred at all!). If no win is found, it should return, sadly, `undefined`

let superbowlWin = objectsArray => {

let win = objectsArray.find(object => object.result === "W")

return !!win? win.year : undefined
}


function testFunc() {
  return "hi"
}


