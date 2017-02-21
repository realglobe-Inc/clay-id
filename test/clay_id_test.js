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
    assert.ok(new ClayId().toString())
    assert.ok(new ClayId().toJSON())
    assert.notEqual(new ClayId().toString(), new ClayId().toString())

    assert.ok(new ClayId('foo').is(new ClayId('foo')))
    assert.ok(new ClayId('foo').is('foo'))

  }))
})

/* global describe, before, after, it */
