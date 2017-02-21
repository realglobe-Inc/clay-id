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

  it('Scoped', () => co(function * () {
    assert.equal(
      new ClayId('foo', { scope: 'hoge' }).toString(),
      new ClayId('foo', { scope: 'hoge' }).toString()
    )

    assert.equal(
      new ClayId('foo', { scope: 'hoge' }).toString(),
      new ClayId((new ClayId('foo', { scope: 'hoge' })).toString()).toString()
    )

    {
      let id01 = new ClayId('foo', { scope: 'hoge' })
      assert.equal(id01.id, 'foo')
      assert.equal(id01.scope, 'hoge')
      assert.equal(id01.toString(), '@hoge/foo')
      let id02 = new ClayId('@hoge/foo')
      id01.is(id02)
    }
  }))
})

/* global describe, before, after, it */
