module.exports = function mlstr(strParts, ...argParts)
{
	return argParts.reduce(
			(aggregation, argPart, i) =>
			{
				aggregation.push(argPart, strParts[i + 1]);
				return aggregation;
			},
			[strParts[0]],
		)
		.join('')
		.trim()
		.split(/[\t ]*(?:(?:\r|\n|\r\n)[\t ]*)+(?:\r|\n|\r\n)[\t ]*/g)
		.map(str => str.replace(/[\t ]*(?:\r|\n|\r\n)[\t ]*/g, ' '))
		.join('\n');
}
