Disallows empty blocks (except for catch blocks).

Type: `Boolean`

Value: `true`

JSHint: [`noempty`](http://jshint.com/docs/options/#noempty)

#### Example

```js
"disallowEmptyBlocks": true
```

##### Valid

```js
if ( a == b ) { c = d; }
```

##### Invalid

```js
if ( a == b ) { } else { c = d; }
```


Disallows space after opening array square bracket and before closing.

Types: `Boolean`, `String` or `Object`

Values: `"all"` or `true` for strict mode, `"nested"` (*deprecated* use `"allExcept": [ "[", "]" ]`)
ignores closing brackets in a row.

#### Example

```js
"disallowSpacesInsideArrayBrackets": "true"
```

##### Valid for mode `"all"`

```js
var x = [[1]];
```

##### Invalid

```js
var x = [ [ 1 ] ];
```


Disallows space after opening round bracket and before closing.

Types: `Object` or `Boolean`

Values: Either `true` or Object with `"only"` property as an array of tokens

#### Example

```js
"disallowSpacesInsideParentheses": true
```

##### Valid for `true` value

```js
var x = (1 + 2) * 3;
```

##### Invalid

```js
var x = foo( {} );
```



Disallows quoted keys in object if possible.

Types: `String` or `Boolean`

Values:

 - `true` for strict mode
 - `"allButReserved"` allows ES3+ reserved words to remain quoted which is helpful
   when using this option with JSHint's `es3` flag.

#### Example

```js
"disallowQuotedKeysInObjects": true
```

##### Valid for mode `true`

```js
var x = { a: { default: 1 } };
```

##### Valid for mode `"allButReserved"`

```js
var x = {a: 1, 'default': 2};
```

##### Invalid

```js
var x = {'a': 1};
```



Disallows space after object keys.

Types: `Boolean` or `String`

Values:
 - `true`
 - `"ignoreSingleLine"` ignores objects if the object only takes up a single line
 - `"ignoreMultiLine"` ignores objects if the object takes up multiple lines

#### Example

```js
"disallowSpaceAfterObjectKeys": true
```

##### Valid
```js
var x = {a: 1};
```
##### Invalid
```js
var x = {a : 1};
```


Requires sticking unary operators to the right.

Types: `Array` or `Boolean`

Values: Array of quoted operators or `true` to disallow space after prefix for all unary operators

#### Example

```js
"disallowSpaceAfterPrefixUnaryOperators": ["++", "--", "+", "-", "~", "!"]
```

##### Valid

```js
x = !y; y = ++z;
```

##### Invalid

```js
x = ! y; y = ++ z;
```


Requires sticking unary operators to the left.

Types: `Array` or `Boolean`

Values: Array of quoted operators or `true` to disallow space before postfix for all unary operators
(i.e. increment/decrement operators)

#### Example

```js
"disallowSpaceBeforePostfixUnaryOperators": ["++", "--"]
```

##### Valid

```js
x = y++; y = z--;
```

##### Invalid

```js
x = y ++; y = z --;
```


Requires sticking binary operators to the left.

Types: `Array` or `Boolean`

Values: Array of quoted operators or `true` to disallow space before all possible binary operators

#### Example

```js
"disallowSpaceBeforeBinaryOperators": [
    ","
]
```

##### Valid

```js
var a = [1, 2];
```

##### Invalid

```js
var a = [1 , 2];
```


Requires lines to not contain both spaces and tabs consecutively,
or spaces after tabs only for alignment if "smart"

Types: `Boolean` or `String`

Values: `true` or `"smart"`

JSHint: [`smarttabs`](http://www.jshint.com/docs/options/#smarttabs)

#### Example

```js
"disallowMixedSpacesAndTabs": true
```

##### Valid example for mode `true`

```js
\tvar foo = "blah blah";
\s\s\s\svar foo = "blah blah";
\t/**
\t\s*
\t\s*\/ //a single space to align the star in a multi-line comment is allowed
```

##### Invalid example for mode `true`

```js
\t\svar foo = "blah blah";
\s\tsvar foo = "blah blah";
```

##### Valid example for mode `"smart"`

```js
\tvar foo = "blah blah";
\t\svar foo = "blah blah";
\s\s\s\svar foo = "blah blah";
\t/**
\t\s*
\t\s*\/ //a single space to align the star in a multi-line comment is allowed
```

##### Invalid example for mode `"smart"`

```js
\s\tsvar foo = "blah blah";
```


Requires all lines to end on a non-whitespace character

Types: `Boolean` or `String`

Values:
 - `true`
 - `"ignoreEmptyLines"`: (default: `false`) allow whitespace on empty lines

JSHint: [`trailing`](http://jshint.com/docs/options/#trailing)

#### Example

```js
"disallowTrailingWhitespace": true
```

##### Valid

```js
var foo = "blah blah";
```

##### Invalid

```js
var foo = "blah blah"; //<-- whitespace character here
```


Disallows an extra comma following the final element of an array or object literal.

Type: `Boolean`

Value: `true`

JSHint: [`es3`](http://jshint.com/docs/options/#es3)

#### Example

```js
"disallowTrailingComma": true
```

##### Valid

```js
var foo = [1, 2, 3];
var bar = {a: "a", b: "b"}
```

##### Invalid

```js
var foo = [1, 2, 3, ];
var bar = {a: "a", b: "b", }
```


Requires the variable to be the left hand operator when doing a boolean comparison

Type: `Boolean`

Value: `true`

#### Example

```js
"disallowYodaConditions": true
```

##### Valid

```js
if (a == 1) {
    return
}
```

##### Invalid

```js
if (1 == a) {
    return
}
```


Disallows usage of specified keywords.

Type: `Array`

Values: Array of quoted keywords

#### Example

```js
"disallowKeywords": ["with"]
```

##### Invalid

```js
with (x) {
    prop++;
}
```


Disallows multiple blank lines in a row.

Type: `Boolean`

Value: `true`

#### Example

```js
"disallowMultipleLineBreaks": true
```

##### Valid
```js
var x = 1;

x++;
```

##### Invalid
```js
var x = 1;


x++;
```


Disallows multiple `var` declaration (except for-loop).

Types: `Boolean` or `String`

Values:

- `true` disallows multiple variable declarations except within a for loop
- `'strict'` disallows all multiple variable declarations
- `'exceptUndefined'` allows declarations where all variables are not defined

#### Example

```js
"disallowMultipleVarDecl": true
```

##### Valid for `true`

```js
var x = 1;
var y = 2;

for (var i = 0, j = arr.length; i < j; i++) {}
```

##### Valid for `strict`

```js
var x = 1;
var y = 2;
```

##### Valid for `exceptUndefined`

```js
var a, b;
var x = 1;
var y = 2;

for (var i = 0, j = arr.length; i < j; i++) {}
```

##### Invalid

```js
var x = 1,
    y = 2;

var x, y = 2, z;
```



Requires space(s) before block statements (for loops, control structures).

Type: `Boolean` or `Integer`

Values:

- `true` require a single space
- `Integer` require *at least* specified number of spaces

#### Example

```js
"requireSpaceBeforeBlockStatements": 1
```

##### Valid

```js
if (cond) {
    foo();
} else {
    bar();
}

for (var e in elements) {
    bar(e);
}

while (cond) {
    foo();
}
```

##### Invalid

```js
if (cond){
    foo();
} else{
    bar();
}

for (var e in elements){
    bar(e);
}

while (cond){
    foo();
}
```


Requires parentheses around immediately invoked function expressions.

Type: `Boolean`

Value: `true`

JSHint: [`immed`](http://www.jshint.com/docs/options/#immed)

#### Example

```js
"requireParenthesesAroundIIFE": true
```

##### Valid

```js
var a = (function(){ return 1; })();
var b = (function(){ return 2; }());
var c = (function(){ return 3; }).call(this, arg1);
var d = (function(){ return 3; }.call(this, arg1));
var e = (function(){ return d; }).apply(this, args);
var f = (function(){ return d; }.apply(this, args));
```

##### Invalid

```js
var a = function(){ return 1; }();
var c = function(){ return 3; }.call(this, arg1);
var d = function(){ return d; }.apply(this, args);
```


Requires space before and/or after `?` or `:` in conditional expressions.

Types: `Object` or `Boolean`

Values: `"afterTest"`, `"beforeConsequent"`, `"afterConsequent"`, `"beforeAlternate"` as child properties,
or `true` to set all properties to `true`. Child properties must be set to `true`.

#### Example

```js
"requireSpacesInConditionalExpression": {
    "afterTest": true,
    "beforeConsequent": true,
    "afterConsequent": true,
    "beforeAlternate": true
}
```

##### Valid

```js
var a = b ? c : d;
var a= b ? c : d;
```

##### Invalid

```js
var a = b? c : d;
var a = b ?c : d;
var a = b ? c: d;
var a = b ? c :d;
```


Requires blocks to begin and end with a newline

Types: `Boolean` or `Integer`

Values: `true` validates all non-empty blocks,
`Integer` specifies a minimum number of statements in the block before validating.

#### Example

```js
"requireBlocksOnNewline": 1
```

##### Valid for mode `true`

```js
if (true) {
    doSomething();
}
var abc = function() {};
```

##### Invalid

```js
if (true) {doSomething();}
```


Requires commas as last token on a line in lists.

Type: `Boolean`

Value: `true`

JSHint: [`laxcomma`](http://www.jshint.com/docs/options/#laxcomma)

#### Example

```js
"requireCommaBeforeLineBreak": true
```

##### Valid

```js
var x = {
    one: 1,
    two: 2
};
var y = { three: 3, four: 4};
```

##### Invalid

```js
var x = {
    one: 1
    , two: 2
};
```



Disallows sticking binary operators to the left.

Types: `Array` or `Boolean`

Values: Array of quoted operators or `true` to require space before all possible binary operators
without comma operator, since it's rarely used with this rule


#### Example

```js
"requireSpaceBeforeBinaryOperators": [
    "=",
    ",",
    "+",
    "-",
    "/",
    "*",
    "==",
    "===",
    "!=",
    "!=="
    // etc
]
```

##### Valid

```js
x !== y;
```

##### Invalid

```js
x!== y;
```


Disallows sticking binary operators to the right.

Types: `Array` or `Boolean`

Values: Array of quoted operators or `true` to require space after all possible binary operators

#### Example

```js
"requireSpaceAfterBinaryOperators": [
    "=",
    ",",
    "+",
    "-",
    "/",
    "*",
    "==",
    "===",
    "!=",
    "!=="
    // etc
]
```

##### Valid

```js
x + y;
```

##### Invalid

```js
x +y;
```


Requires identifiers to be camelCased or UPPERCASE_WITH_UNDERSCORES

Types: `Boolean` or `String`

Values:

- `true`
- `"ignoreProperties"` allows an exception for object property names.

JSHint: [`camelcase`](http://jshint.com/docs/options/#camelcase)

#### Example

```js
"requireCamelCaseOrUpperCaseIdentifiers": true
```

##### Valid for mode `true`

```js
var camelCase = 0;
var CamelCase = 1;
var _camelCase = 2;
var camelCase_ = 3;
var UPPER_CASE = 4;
```

##### Invalid for mode `true`

```js
var lower_case = 1;
var Mixed_case = 2;
var mixed_Case = 3;
```

##### Valid for mode `ignoreProperties`

```js
var camelCase = 0;
var CamelCase = 1;
var _camelCase = 2;
var camelCase_ = 3;
var UPPER_CASE = 4;
var obj.snake_case = 5;
var camelCase = { snake_case: 6 };
```

##### Invalid for mode `ignoreProperties`

```js
var lower_case = 1;
var Mixed_case = 2;
var mixed_Case = 3;
var snake_case = { snake_case: 6 };
```



Requires placing line feed at file end.

Type: `Boolean`

Value: `true`

#### Example

```js
"requireLineFeedAtFileEnd": true
```


Requires constructors to be capitalized (except for `this`)

Types: `Boolean` or `Object`

Values: `true` or Object with `allExcept` Array of quoted identifiers which are exempted

JSHint: [`newcap`](http://jshint.com/docs/options/#newcap)

#### Example

```js
"requireCapitalizedConstructors": true
"requireCapitalizedConstructors": {
    allExcept: ["somethingNative"]
}
```

##### Valid

```js
var a = new B();
var c = new this();
var d = new somethingNative();
```

##### Invalid

```js
var d = new e();
```


Requires member expressions to use dot notation when possible

Types: `Boolean` or `String`

Values:
 - `true`
 - `"except_snake_case"` allow quoted snake cased identifiers

JSHint: [`sub`](http://www.jshint.com/docs/options/#sub)

#### Example

```js
"requireDotNotation": true
```

##### Valid for `true`

```js
var a = b[c];
var a = b.c;
var a = b[c.d];
var a = b[1];
var a = b['while']; //reserved word
```

##### Valid for `"except_snake_case"`
```
var a = b[c];
var a = b.c;
var a = b['snake_cased'];
var a = b['camelCased_butWithSnakes'];
```

##### Invalid for `true`

```js
var a = b['c'];
var a = b['snake_cased'];
var a = b['_camelCased'];
var a = b['camelCased_'];
```

##### Invalid for `"except_snake_case"`

```js
var a = b['c'];
```

#### Example for `"es3": false` or `"es3": null`

```js
"requireDotNotation": true,
"es3": false
```

##### Valid

```js
var a = b[c];
var a = b.c;
var a = b[c.d];
var a = b[1];
var a = b.while;
```

##### Invalid

```js
var a = b['c'];
var a = b['while']; // reserved words can be property names in ES5
```


Requires spaces inbetween for statement.

Type: `Boolean`

Value: `true` to requires spaces inbetween for statement.

#### Example

```js
"requireSpacesInForStatement": true
```

##### Valid

```js
for(var i = 0; i<l; i++) {
    x++;
}
```

##### Invalid

```js
for(var i = 0;i<l;i++) {
    x++;
}
```

```js
for(var i = 0; i<l;i++) {
    x++;
}
```

```js
for(var i = 0;i<l; i++) {
    x++;
}
```


Ensure there are spaces after argument separators in call expressions.

Type: `Boolean`

Value: `true`

#### Example

```js
"requireSpaceBetweenArguments": true
```

##### Valid

```js
a(b, c);
```

##### Invalid

```js
a(b,c);
```


Requires curly braces after statements.

Types: `Array` or `Boolean`

Values: Array of quoted keywords or `true` to require curly braces after the following keywords:

JSHint: [`curly`](http://jshint.com/docs/options/#curly)

#### Example

```js
"requireCurlyBraces": [
    "do"
]
```

##### Valid

```js
do {
    x++;
}
```

##### Invalid

```js
do x++;
```


Requires space after keyword.

Types: `Array` or `Boolean`

Values: Array of quoted keywords or `true` to require all of the keywords below to have a space afterward.

#### Example

```js
"requireSpaceAfterKeywords": [
    "if",
    "else",
    "for",
    "while",
    "do",
    "switch",
    "case",
    "return",
    "try",
    "catch",
    "typeof"
]
```

##### Valid

```js
return true;
```

##### Invalid

```js
if(x) {
    x++;
}
```


Requires newline before line comments

Types: `Boolean` or `Object`

Values:
- `true`: always require a newline before line comments
- `Object`:
     - `"allExcept"`: `"firstAfterCurly"` Comments may be first line of block without extra padding

#### Examples
```js
"requirePaddingNewLinesBeforeLineComments": { "allExcept": "firstAfterCurly" }
```

##### Valid for `{ "allExcept": "firstAfterCurly" }`

```js
var a = 2;

// comment
return a;

function() {
  // comment
}
```

##### Invalid

```js
var a = 2;
//comment
return a;

function() {
  // comment
}
```


Requires newline after blocks

Type: `Boolean` or `Object`

Values:
- `true`: always require a newline after blocks
- `Object`:
     - `"allExcept"`: `Array`
         - `"inCallExpressions"` Blocks don't need a line of padding in argument lists
         - `"inArrayExpressions"` Blocks don't need a line of padding in arrays
         - `"inProperties"` Blocks don't need a line of padding as object properties

#### Example

```js
"requirePaddingNewLinesAfterBlocks": true
}
```

##### Valid

```js
function () {
    for (var i = 0; i < 2; i++) {
        if (true) {
            return false;
        }

        continue;
    }

    var obj = {
        foo: function() {
            return 1;
        },

        bar: function() {
            return 2;
        }
    };

    func(
         function() {
         }

    );

    var a = [
        function() {
        }

    ]

}
```

##### Invalid

```js
function () {
    for (var i = 0; i < 2; i++) {
        if (true) {
            return false;
        }
        continue;
    }
}
```


Option to check `var _this = this` expressions

Types: `Array` or `String`

Values: String value used for context local declaration

#### Example

```js
"safeContextKeyword": ["_this"]
```

##### Valid

```js
var _this = this;
```

##### Invalid

```js
var that = this;
```


Option to check line break characters

Type: `String`

Values: `"CR"`, `"LF"`, `"CRLF"`

#### Example

```js
"validateLineBreaks": "LF"
```

##### Valid
```js
var x = 1;<LF>
x++;
```

##### Invalid
```js
var x = 1;<CRLF>
x++;
```


Requires all quote marks to be either the supplied value, or consistent if `true`

Types: `Boolean`, `String` or `Object`

Values:
 - `"\""`: all strings require double quotes
 - `"'"`: all strings require single quotes
 - `true`: all strings require the quote mark first encountered in the source code
 - `Object`:
    - `escape`: allow the "other" quote mark to be used, but only to avoid having to escape
    - `mark`: the same effect as the non-object values

JSHint: [`quotmark`](http://jshint.com/docs/options/#quotmark)

#### Example

```js
"validateQuoteMarks": "'"
```

##### Valid example for mode `"'"`

```js
var x = 'x';
```

##### Invalid example for mode `"'"`

```js
var x = "x";
```

Validates indentation for switch statements and block statements

Types: `Integer`, `String` or `Object`

Values:
 - `Integer`: A positive number of spaces
 - `String`: `"\t"` for tab indentation
 - `Object`:
    - `value`: (required) the same effect as the non-object values
    - `includeEmptyLines`: (default: `false`) require empty lines to be indented

JSHint: [`indent`](http://jshint.com/docs/options/#indent)

#### Example

```js
"validateIndentation": "2"
```

##### Valid example for mode `2`

```js
if (a) {
  b=c;
  function(d) {
    e=f;
  }
}
```

##### Invalid example for mode `2`

```js
if (a) {
   b=c;
function(d) {
       e=f;
}
}
```
