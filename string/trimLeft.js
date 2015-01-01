var charsLeftIndex = require('../internal/charsLeftIndex'),
    isIterateeCall = require('../internal/isIterateeCall'),
    toString = require('../internal/toString'),
    trimmedLeftIndex = require('../internal/trimmedLeftIndex');

/**
 * Removes leading whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trimLeft('  abc  ');
 * // => 'abc  '
 *
 * _.trimLeft('-_-abc-_-', '_-');
 * // => 'abc-_-'
 */
function trimLeft(string, chars, guard) {
  var value = string;
  string = toString(string);
  if (!string) {
    return string;
  }
  if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
    return string.slice(trimmedLeftIndex(string))
  }
  return string.slice(charsLeftIndex(string, (chars + '')));
}

module.exports = trimLeft;
