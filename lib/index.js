/**
 * Id generator for ClayDB
 * @module clay-id
 */

'use strict'

const create = require('./create')
const ClayId = require('./clay_id')
const newIdString = require('./new_id_string.js')

let lib = create.bind(this)

Object.assign(lib, ClayId, {
  create,
  ClayId,
  newIdString
})

module.exports = lib
