// list of useful handlebars helpers we can bundle
// credit goes to https://stackoverflow.com/a/31632215 & https://stackoverflow.com/a/50427569
//
// TODO: maybe make this extensible via another CR field?

const objectPath = require('object-path');

const helpers = {
  assign: function (varName, varValue, options) {
    if (!objectPath.has(options, 'data.root')) {
      objectPath.set(options, 'data.root', {});
    }
    objectPath.set(options, ['data', 'root', varName], varValue);
  },
  eq: (v1, v2) => v1 === v2,
  ne: (v1, v2) => v1 !== v2,
  lt: (v1, v2) => v1 < v2,
  gt: (v1, v2) => v1 > v2,
  lte: (v1, v2) => v1 <= v2,
  gte: (v1, v2) => v1 >= v2,
  and() {
    return Array.prototype.every.call(arguments, Boolean);
  },
  or() {
    return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
  },
  split: function (data, delimiter) {
    if (typeof data === 'string' && typeof delimiter === 'string') {
      return data.split(delimiter);
    }
    return [data];
  },
  divide: function (x, y) {
    if ( typeof x === 'number' && typeof y === 'number' && y !== 0) {
      return parseInt(x / y);
    } else {
      return -1;
    }
  },
  add: function(x, y) {
    if ( typeof x === 'number' && typeof y === 'number') {
      return x + y;
    }
    return -1;
  },
  substring: function (data, startIndex, endIndex) {
    if ( typeof data  === 'string' && typeof startIndex === 'number' && typeof endIndex === 'number') {
      return data.substring(startIndex, endIndex);
    }
    if ( typeof data  === 'string' && typeof startIndex === 'number') {
      return data.substring(startIndex);
    }
    return ''
  },
  includes: function (arr, valueToFind, fromIndex) {
    if ( Array.isArray(arr) && valueToFind !== 'undefined' && typeof fromIndex === 'number') {
        return arr.includes(valueToFind, fromIndex)
    }
    if ( Array.isArray(arr) && typeof valueToFind !== 'undefined') {
        return arr.includes(valueToFind)
    }
    return false
  }  
};

module.exports = helpers;
