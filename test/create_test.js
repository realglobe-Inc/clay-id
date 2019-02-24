/**
 * Test case for create.
 * Runs with mocha.
 */
'use strict'

const create = require('../lib/create.js')
const assert = require('assert')

describe('create', function () {
  this.timeout(3000)

  it('Create', () => {
    let created = create()
    assert.ok(created)
  })
})

/* global describe, before, after, it */
