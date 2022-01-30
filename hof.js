const _ = require('lodash')

function multiply(a, b) {
	return a * b
}

// function double(num) {
// 	return multiply(num, 2)
// }
// function partial(fn) {
// 	const fixed = _.tail(_.toArray(arguments))
// 	return function () {
// 		return fn.apply(this, _.concat(fixed, arguments))
// 	}
// }
function divide(a, b) {
	return a / b
}

const double = _.partial(multiply, 2)

//==============================================
const curriedDivide = _.curry(divide)
const e = curriedDivide(10, 2)
const ex = curriedDivide(10)(2)


const noFlatArray = [1, 2, 3, [4, 5]]
const sumFlat = _.flow([_.concat, _.flattenDeep, _.sum])
const exa = sumFlat(noFlatArray)
