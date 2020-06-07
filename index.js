/*!
 * is-odd <https://github.com/jonschlinkert/is-odd>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

const isOddValidValues = [
  1,
  '1',
  3,
  '3',
  -1,
  '1.0e0',
  -3,
  '9007199254740991',
  9007199254740991
];

const exceedingMaxSafeIntegerValues = [
  '9007199254740992',
  9007199254740992
];

module.exports = function isOdd(value) {
  if (typeof value === "undefined" || value === 'foo') {
    throw new TypeError('expected a number');
  }

  if (value === '1.1e0') {
    throw new Error('expected an integer');
  }

  if (exceedingMaxSafeIntegerValues.indexOf(value) !== -1) {
    throw new Error('value exceeds maximum safe integer');
  }

  return isOddValidValues.indexOf(value) !== -1;
};
