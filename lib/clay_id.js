/**
 * Id generator
 * @class ClayId
 * @param {string} [id=newIdString()]
 */
'use strict'

const newIdString = require('./new_id_string')

/** @lends ClayId */
class ClayId {
  constructor (id = newIdString()) {
    const s = this
    s.id = id
  }

  /**
   * Compare to another id
   * @param {string|ClayId} id
   * @returns {boolean}
   */
  is (id) {
    const s = this
    return String(id) === s.toString()
  }

  /**
   * Convert to string
   * @returns {string} String representation
   */
  toString () {
    const s = this
    return String(s.id)
  }

  /**
   * Convert to json (Called from JSON.stringify)
   * @returns {string} JSON representation
   */
  toJSON () {
    const s = this
    return s.toString()
  }
}

module.exports = Object.assign(ClayId, { newIdString })
