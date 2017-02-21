/**
 * Generate a new id string
 * @function newIdString
 * @returns {string} Generated string
 */
'use strict'

const uuid = require('uuid')

/** @lends newIdString */
function newIdString () {
  return uuid.v4().replace(/-/g, '')
}

module.exports = newIdString
