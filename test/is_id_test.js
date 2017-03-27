/**
 * Test case for isId.
 * Runs with mocha.
 */
'use strict'

const isId = require('../lib/is_id.js')
const ClayId = require('../lib/clay_id')
const { strictEqual } = require('assert')
const co = require('co')

describe('is-id', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Is id', () => co(function * () {
    strictEqual(isId(new ClayId()), true)
    strictEqual(isId(null), false)
    strictEqual(isId('hoge'), false)
    strictEqual(isId(false), false)
    strictEqual(isId(1), false)
    strictEqual(isId(undefined), false)
  }))
})

/* global describe, before, after, it */
