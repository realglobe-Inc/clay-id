/**
 * Id generator
 * @class ClayId
 * @param {string|object} [id=newIdString()] - Id string
 */
'use strict'

const newIdString = require('./new_id_string')
const { LogPrefixes, IdSpec } = require('clay-constants')
const { ID_PREFIX } = LogPrefixes
const { ID_PATTERN, SCOPE_PATTERN } = IdSpec

/** @lends ClayId */
class ClayId {
  get $$id () {
    return true
  }

  constructor (idString = newIdString()) {
    if (idString === null) {
      throw new Error(`${ID_PREFIX} idString cannot to be null`)
    }
    switch (typeof idString) {
      case 'object':
        idString = ClayId.idStringWithValues(idString)
        break
      default:
        idString = String(idString)
        break
    }

    // Parse scoped expression like "@foo/bar"
    let asScoped = idString.match(/^@(.*)\/(.*)/)
    if (asScoped) {
      let [ , scope, id ] = asScoped
      Object.assign(this, {
        id,
        scope
      })
    } else {
      Object.assign(this, { id: idString })
    }
    this.assert()
  }

  /**
   * Compare to another id
   * @param {string|ClayId} id
   * @returns {boolean}
   */
  is (id) {
    return String(id) === this.toString()
  }

  /**
   * Convert to string
   * @returns {string} String representation
   */
  toString () {
    let { id, scope } = this
    return ClayId.idStringWithValues({ id, scope })
  }

  /**
   * Convert to json (Called from JSON.stringify)
   * @returns {string} JSON representation
   */
  toJSON () {
    return this.toString()
  }

  assert () {
    let { id, scope } = this
    let invalidScope = scope && !SCOPE_PATTERN.test(id)
    if (invalidScope) {
      throw new Error(`${ID_PREFIX} Invalid scope: "${scope}" (Should be matched to ${SCOPE_PATTERN})`)
    }
    let invalidId = id && !ID_PATTERN.test(id)
    if (invalidId) {
      throw new Error(`${ID_PREFIX} Invalid id: "${id}" (Should be matched to ${ID_PATTERN})`)
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
