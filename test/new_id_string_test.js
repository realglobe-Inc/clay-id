/**
 * Test case for newIdString.
 * Runs with mocha.
 */
'use strict'

const newIdString = require('../lib/new_id_string.js')
const assert = require('assert')

describe('new-id-string', function () {
  this.timeout(3000)

  it('New id string', () => {
    assert.notEqual(newIdString(), newIdString())
  })
})

/* global describe, before, after, it */
