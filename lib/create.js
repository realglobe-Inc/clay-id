/**
 * Create a ClayId instance
 * @function create
 * @param {...*} args
 * @returns {ClayId}
 */
'use strict'

const ClayId = require('./clay_id')

/** @lends create */
function create (...args) {
  return new ClayId(...args)
}

module.exports = create
