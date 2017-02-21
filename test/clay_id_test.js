/**
 * Test case for clayId.
 * Runs with mocha.
 */
'use strict'

const ClayId = require('../lib/clay_id.js')
const assert = require('assert')
const co = require('co')

describe('clay-id', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Clay id', () => co(function * () {
    let clayId = new ClayId()
    assert.ok(clayId.generate())
    assert.notEqual(clayId.generate(), clayId.generate())
  }))
})

/* global describe, before, after, it */
