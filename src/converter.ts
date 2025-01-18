/**
 * Converts temperature, weight, and distance with a precision of 2 decimal places.
 * @param {number} value - The value to be converted.
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from - The unit of the input value.
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to - The unit to convert the value to.
 * @returns {number} - The converted value, rounded to 2 decimal places.
 */
module.exports.converter = function (value: number, from: 'm' | 'mi' | 'gr' | 'pound' | 'C' | 'K', to: 'm' | 'mi' | 'gr' | 'pound' | 'C' | 'K'): number {
  if (typeof value !== 'number' || isNaN(value)) {
    throw new Error('Value must be a valid number');
  }

  if (from === to) {
    return parseFloat(value.toFixed(2));
  }

  let result;

  if (from === 'm' && to === 'mi') {
    result = value / 1609.34;
  } else if (from === 'mi' && to === 'm') {
    result = value * 1609.34;
  }
  else if (from === 'gr' && to === 'pound') {
    result = value / 453.592;
  } else if (from === 'pound' && to === 'gr') {
    result = value * 453.592;
  }
  else if (from === 'C' && to === 'K') {
    result = value + 273.15;
  } else if (from === 'K' && to === 'C') {
    result = value - 273.15;
  }
  else {
    throw new Error('Conversion from ' + from + ' to ' + to + ' is not supported');
  }

  return parseFloat(result.toFixed(2));
};`
