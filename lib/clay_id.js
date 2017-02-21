/**
 * Id generator
 * @class ClayId
 */
'use strict'

const uuid = require('uuid')

/** @lends ClayId */
class ClayId {
  /**
   * Generate a new id string
   * @returns {string}
   */
  generate () {
    return uuid.v4()
  }
}

module.exports = ClayId
