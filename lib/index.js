/**
 * Id generator for ClayDB
 * @module clay-id
 */

'use strict'

const create = require('./create')
const ClayId = require('./clay_id')

let lib = create({})

Object.assign(lib, ClayId, {
  create,
  ClayId
})

module.exports = lib
