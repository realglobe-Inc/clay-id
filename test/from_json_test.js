/**
 * Test case for fromJson.
 * Runs with mocha.
 */
'use strict'

const fromJSON = require('../lib/from_json.js')
const assert = require('assert')
const co = require('co')

describe('from-json', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('From json', () => co(function * () {
    assert.ok(fromJSON('foo').is(fromJSON('foo')))
  }))
})

/* global describe, before, after, it */
