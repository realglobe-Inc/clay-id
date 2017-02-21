clay-id
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_com_shield_url]][bd_travis_com_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/clay-id
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/clay-id
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/clay-id.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/clay-id
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/clay-id.svg?token=aeFzCpBZebyaRijpCFmm
[bd_license_url]: https://github.com/realglobe-Inc/clay-id/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/clay-id
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/clay-id.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/clay-id.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/clay-id
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/clay-id.svg
[bd_npm_url]: http://www.npmjs.org/package/clay-id
[bd_npm_shield_url]: http://img.shields.io/npm/v/clay-id.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Id generator for ClayDB

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install clay-id --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
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

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.API.md.hbs" Start -->

<a name="section-doc-guides-03-a-p-i-md"></a>

API
---------

# clay-id@1.1.0

Id generator for ClayDB

+ Functions
  + [create(args)](#clay-id-function-create)
  + [newIdString()](#clay-id-function-new-id-string)
+ [ClayId](clay-id-classes) Class
  + [new ClayId(id)](#clay-id-classes-clay-id-constructor)
  + [id.is(id)](#clay-id-classes-clay-id-is)
  + [id.toString()](#clay-id-classes-clay-id-toString)
  + [id.toJSON()](#clay-id-classes-clay-id-toJSON)

## Functions

<a class='md-heading-link' name="clay-id-function-create" ></a>

### create(args) -> `ClayId`

Create a ClayId instance

| Param | Type | Description |
| ----- | --- | -------- |
| args | * |  |

<a class='md-heading-link' name="clay-id-function-new-id-string" ></a>

### newIdString() -> `string`

Generate a new id string


<a class='md-heading-link' name="clay-id-classes"></a>

## ClayId Class

Id generator


<a class='md-heading-link' name="clay-id-classes-clay-id-constructor" ></a>

### new ClayId(id)

Constructor of ClayId class

| Param | Type | Description |
| ----- | --- | -------- |
| id | string,object | Id string |


<a class='md-heading-link' name="clay-id-classes-clay-id-is" ></a>

### id.is(id) -> `boolean`

Compare to another id

| Param | Type | Description |
| ----- | --- | -------- |
| id | string,ClayId |  |


<a class='md-heading-link' name="clay-id-classes-clay-id-toString" ></a>

### id.toString() -> `string`

Convert to string

<a class='md-heading-link' name="clay-id-classes-clay-id-toJSON" ></a>

### id.toJSON() -> `string`

Convert to json (Called from JSON.stringify)






<!-- Section from "doc/guides/03.API.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [Apache-2.0 License](https://github.com/realglobe-Inc/clay-id/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [ClayDB][clay_d_b_url]
+ [Realglobe, Inc.][realglobe,_inc__url]

[clay_d_b_url]: https://github.com/realglobe-Inc/claydb
[realglobe,_inc__url]: http://realglobe.jp

<!-- Links End -->
