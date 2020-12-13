## RuleboxSyntax

#### Equality test

```json
{ "<field name>": <primitive> }
```
Examples
```json
{ "@code": "E" }
{ "@date": "2018-06-01" }
```

Generates: `@code` `"E"` `/eq`

#### Greater-than, less-than, etc

```json
{ "<field name>": { "$gt|$lt|$gte|$lte": <primitive> } }
```
Examples
```json
{ "@from": { "$gt": 22 } }
{ "@from": { "$gte": 22 } }
{ "@rate": { "$lt": 8.5 } }
{ "@rate": { "$lte": 10 } }
```

Generates: `@from` `22` `/gt`

#### Logical AND

```json
{ "<field name>": <expression>, "<field name>": <expression> [, ...] }
```
Example
```json
{
    "@from": { "$gt": 7 },
    "@from": { "$lte": 22 },
}
```

Generates: `@from` `7` `/gt` `@from` `22` `/lte` `/and`

#### Logical OR

```json
{ "$or": [ <expression> [, <expression> ] ]}
```
Example
```json
{
    "$or": [
        { "@code": "E" },
        { "@code": "L" }
    ]    
}
```

Generates: `@code` `"E"` `/eq` `@code` `"L"` `/eq` `/or`

#### Between
This expression tests whether a field value is between two specified values (inclusive).
```json
{ "<field name>": { "$between": [<number>, <number>] } }
```
Examples
```json
{ "@from": { "$between": [20, 22] } }
```

Generates: `@from` `20` `/gte` `@from` `22` `/lte` `/and`


#### Is one of
This expression tests whether a field value is one of the values in an array.
```json
{ "<field name>": { "$in": [<primitive>, <primitive>] } }
```
Examples
```json
{ "@code": { "$in": ["E", "L", "LD"] } }
```

Generates: `["E", "L", "LD"]` `@code` `/contains`

#### Contains
This expression is the inverse of 'is one of' - it tests whether a field's array value contains a specified value. For this to work, the field value must be an array.
This expression tests whether a primitive value is one of the values in a field's array.
```json
{ "<field name>": { "$contains": <primitive> } }
```
Examples
```json
{ "tags": { "$contains": "Sick" } }
```

Generates: `@tags` `"Sick"` `/contains`

#### 'not' - inversion
The 'not' expression returns the inverse of a boolean result.
```json
{ "$not": <boolean_expression> }
```
Examples
```json
{ "$not": { "@code": "E" } }
```

Generates: `@code` `"E"` `/eq` `/not`

#### Contains any, all, or none
These operators test whether some, or all, or none of the elements in a field array match a specified predicate.
```json
{ "<field name>": { "$any|$all|$none": <predicate_object> } }
```
Examples
```json
{ "@tags": { "$any": { "@code": { "$in": ["Sick", "C/L"] } } } }
{ "@tags": { "$none": { "@code": "Sick" } } }
```

Generates: `@tags` `/begin-predicate` `@code` `["Sick", "C/L"]` `/in` `/end-predicate` `/any`

#### Matching a sub-entity
Entities may contain entities as field values. Matching fields of sub-entities is done via entity matching:
```json
{ "<entity field name>": <predicate_object> }
```
Examples

Given an object:
```json
{ "name": "Edwin", "spouse": { "name": "Bonia" } }
```

The predicate:
```json
{ "@spouse": { "@name": "Bonia" } }
```

Generates: `@spouse` `/begin-predicate` `@name` `"Bonia"` `/eq` `/end-predicate` `/match`
