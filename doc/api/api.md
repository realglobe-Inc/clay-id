# clay-id@1.1.3

Id generator for ClayDB

+ Functions
  + [create(args)](#clay-id-function-create)
  + [newIdString()](#clay-id-function-new-id-string)
+ [`ClayId`](clay-id-classes) Class
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

## `ClayId` Class

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



