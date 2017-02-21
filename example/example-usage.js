'use strict'

const clayId = require('clay-id')

let id01 = clayId()

{
  let myEntity = {
    id: id01,
    foo: 'bar'
  }
  /* ... */
}
