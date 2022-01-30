const _ = require('lodash');
const cities = require('/data.json');

const output = _(cities)
	.filter(c => c.population > 5000000)
	.countBy(c => country)
	.toPairs()
	.map(c => _.zipObject(["country", "ciities"], c))
	.orderBy(c => c.cities, 'desc')
	.take(5)
	.value()
console.log('output', output);
//================================================================
const greaterThan = _.curryRight(_.gte)
const populationGreaterThan = num => _.conforms({ population: greaterThan(num) })