/**
 * Test case for newIdString.
 * Runs with mocha.
 */
'use strict'

const newIdString = require('../lib/new_id_string.js')
const assert = require('assert')
const co = require('co')

describe('new-id-string', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('New id string', () => co(function * () {
    assert.notEqual(newIdString(), newIdString())
  }))
})

/* global describe, before, after, it */
