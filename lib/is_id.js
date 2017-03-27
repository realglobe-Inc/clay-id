/**
 * Detect id or not
 * @function isId
 * @param {*} obj
 * @returns {boolean}
 */
'use strict'

const ClayId = require('./clay_id')

/** @lends isId */
function isId (obj) {
  if (!obj) {
    return false
  }
  return (obj instanceof ClayId) || Boolean(obj.$$id)
}

module.exports = isId
