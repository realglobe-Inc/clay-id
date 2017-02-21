/**
 * Id generator
 * @class ClayId
 * @param {string|object} [id=newIdString()] - Id string
 */
'use strict'

const newIdString = require('./new_id_string')
const ID_PATTERN = /^[a-z0-9_\-]+$/
const SCOPE_PATTERN = /^[a-z0-9_\-]+$/

/** @lends ClayId */
class ClayId {
  constructor (idString = newIdString()) {
    const s = this
    let fromObject = idString && (typeof idString === 'object')
    if (fromObject) {
      idString = ClayId.idStringWithValues(idString)
    }
    // Parse scoped expression like "@foo/bar"
    let [ , scope, id ] = idString.match(/^@(.*)\/(.*)/)
    Object.assign(s, {
      id,
      scope
    })
    s.assert()
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
    let { id, scope } = s
    return ClayId.idStringWithValues({ id, scope })
  }

  /**
   * Convert to json (Called from JSON.stringify)
   * @returns {string} JSON representation
   */
  toJSON () {
    const s = this
    return s.toString()
  }

  assert () {
    const s = this
    let { id, scope } = s
    let invalidScope = scope && !SCOPE_PATTERN.test(id)
    if (invalidScope) {
      throw new Error(`Invalid scope: "${scope}"`)
    }
    let invalidId = id && !ID_PATTERN.test(id)
    if (invalidId) {
      throw new Error(`Invalid id: "${id}"`)
    }
  }

  static idStringWithValues ({ id, scope }) {
    if (scope) {
      return `@${scope}/${id}`
    } else {
      return String(id)
    }
  }
}

module.exports = Object.assign(ClayId, { newIdString })
