# clay-id@1.0.0

Id generator for ClayDB

+ Functions
  + [create(args)](#clay-id-function-create)
  + [newIdString()](#clay-id-function-new-id-string)
  + [fromJSON(value)](#clay-id-function-from-j-s-o-n)
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
<a class='md-heading-link' name="clay-id-function-from-j-s-o-n" ></a>

### fromJSON(value) -> `ClayId`

Create instance from json

| Param | Type | Description |
| ----- | --- | -------- |
| value | string,Object |  |



<a class='md-heading-link' name="clay-id-classes"></a>

## ClayId Class

Id generator


<a class='md-heading-link' name="clay-id-classes-clay-id-constructor" ></a>

### new ClayId(id)

Constructor of ClayId class

| Param | Type | Description |
| ----- | --- | -------- |
| id | string |  |


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



