/**
 * @module signature
 */
'use strict'

const jsdoc = require('../jsdoc.json')
const { snakecase } = require('stringcase')

const paramDesc = ({ parameters = [] }) => parameters
  .map((param) => param.name)
  .filter((name) => !/\./.test(name)).join(', ')
const asClass = (item) => Object.assign({}, item, {
  functions: (item.functions || []).map((func) => Object.assign(func, {
    paramDesc: paramDesc(func)
  })),
  constructor: Object.assign(item.constructor, {
    paramDesc: paramDesc(item.constructor)
  }),
  instanceName: snakecase(item.name).split('_').pop()
})
const asFunc = (item) => Object.assign({}, item, {
  paramDesc: paramDesc(item)
})
const byName = (list, { wrapper = (item) => item }) => list.reduce((result, item) => Object.assign(result, {
  [item.name]: wrapper(item)
}), {})
let classes = byName(jsdoc[ 'classes' ], { wrapper: asClass })
let { ClayId } = classes

let functions = byName(jsdoc[ 'functions' ], { wrapper: asFunc })
let {
  create,
  newIdString
} = functions

/** @lends signature */
module.exports = {
  classes: [
    ClayId
  ].filter(Boolean),
  functions: [
    create,
    newIdString
  ].filter(Boolean)
}