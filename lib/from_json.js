/**
 * Create instance from json
 * @function fromJSON
 * @param {string|Object} value
 * @returns {ClayId} Clay id instance
 */
'use strict'

const ClayId = require('./clay_id')

/** @lends fromJSON */
function fromJSON (value) {
  return new ClayId(value)
}

module.exports = fromJSON
