/**
 * Id generator
 * @class ClayId
 * @param {string} [id=newIdString()] - Id string
 * @param {Object} [options={}] - Optional settings
 * @param {string} [options.scope] - Id scope name
 */
'use strict'

const newIdString = require('./new_id_string')
const ID_PATTERN = /^[a-z0-9_\-]+$/
const SCOPE_PATTERN = /^[a-z0-9_\-]+$/

/** @lends ClayId */
class ClayId {
  constructor (id = newIdString(), options = {}) {
    const s = this
    let { scope = null } = options

    // Parse scoped expression like "@foo/bar"
    let asScoped = id.match(/^@(.*)\/(.*)/)
    if (asScoped) {
      let invalidScope = scope && asScoped[ 1 ]
      if (invalidScope) {
        throw new Error(`Invalid scope: ${scope}`)
      }
      Object.assign(s, {
        id: asScoped[ 2 ],
        scope: asScoped[ 1 ]
      })
    } else {
      Object.assign(s, { id, scope })
    }
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
    if (scope) {
      return `@${scope}/${id}`
    } else {
      return String(id)
    }
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
}

module.exports = Object.assign(ClayId, { newIdString })
