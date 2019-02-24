/**
 * Test case for clayId.
 * Runs with mocha.
 */
'use strict'

const ClayId = require('../lib/clay_id.js')
const assert = require('assert')

describe('clay-id', function () {
  this.timeout(3000)

  it('Clay id', () => {
    assert.ok(new ClayId().toString())
    assert.ok(new ClayId().toJSON())
    assert.notEqual(new ClayId().toString(), new ClayId().toString())

    assert.ok(new ClayId('foo').is(new ClayId('foo')))
    assert.ok(new ClayId('foo').is('foo'))
  })

  it('Scoped', () => {
    assert.equal(
      new ClayId({ id: 'foo', scope: 'hoge' }).toString(),
      new ClayId({ id: 'foo', scope: 'hoge' }).toString()
    )

    assert.equal(
      new ClayId({ id: 'foo', scope: 'hoge' }).toString(),
      new ClayId((new ClayId({ id: 'foo', scope: 'hoge' })).toString()).toString()
    )

    {
      let id01 = new ClayId({ id: 'foo', scope: 'hoge' })
      assert.equal(id01.id, 'foo')
      assert.equal(id01.scope, 'hoge')
      assert.equal(id01.toString(), '@hoge/foo')
      let id02 = new ClayId('@hoge/foo')
      id01.is(id02)
      let id03 = new ClayId(id02)
      id03.is(id01)
    }
  })

  it('Type variation', () => {
    assert.throws(() => new ClayId(null))
    assert.ok(new ClayId(true))
    assert.ok(new ClayId(false))
    assert.ok(new ClayId(''))
    assert.ok(new ClayId(123))
  })
})

/* global describe, before, after, it */
