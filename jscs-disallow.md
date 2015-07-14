
Requires that a function expression be named.

Type: `Boolean`

Value: `true`

#### Example

```js
"disallowAnonymousFunctions": true
```

##### Valid

```js
var a = function foo(){

};

$('#foo').click(function bar(){

});
```

##### Invalid

```js
var a = function(){

};

$('#foo').click(function(){

});
```


Requires the first alphabetical character of a comment to be lowercase.

Type: `Boolean`

Value: `true`

#### Example

`"disallowCapitalizedComments": true`

Valid:

```
// valid
//valid

/*
  valid
 *\/

/**
 * valid
 *\/

// 123 or any non-alphabetical starting character
```

Invalid:
```
// Invalid
//Invalid
/** Invalid *\/
/**
 * Invalid
 *\/
```



Disallows commas as last token on a line in lists.

Type: `Boolean`

Value: `true`

JSHint: [`laxcomma`](http://www.jshint.com/docs/options/#laxcomma)

#### Example

```js
"disallowCommaBeforeLineBreak": true
```

##### Valid

```js
var x = {
    one: 1
    , two: 2
};
var y = { three: 3, four: 4};
```

##### Invalid

```js
var x = {
    one: 1,
    two: 2
};
```



Disallows curly braces after statements.

Types: `Array` or `Boolean`

Values: Array of quoted keywords or `true` to disallow curly braces after the following keywords:

#### Example

```js
"disallowCurlyBraces": [
    "if",
    "else",
    "while",
    "for",
    "do",
    "with"
]
```

##### Valid

```js
if (x) x++;
```

##### Invalid

```js
if (x) {
    x++;
}
```



Disallows identifiers that start or end in `_`. Some popular identifiers are automatically listed as exceptions:

 - `__proto__` (javascript)
 - `_` (underscore.js)
 - `__filename` (node.js global)
 - `__dirname` (node.js global)
 - `super_` (node.js, used by
   [`util.inherits`](http://nodejs.org/docs/latest/api/util.html#util_util_inherits_constructor_superconstructor))

Types: `Boolean` or `Object`

Values:
 - `true`
 - `Object`:
    - `allExcept`: array of quoted identifiers

JSHint: [`nomen`](http://www.jshint.com/docs/options/#nomen)

#### Example

```js
"disallowDanglingUnderscores": { "allExcept": ["_exception"] }
```

##### Valid

```js
var x = 1;
var o = obj.__proto__;
var y = _.extend;
var z = __dirname;
var w = __filename;
var x_y = 1;
var v = _exception;
```

##### Invalid

```js
var _x = 1;
var x_ = 1;
var x_y_ = 1;
```



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
try { a = b; } catch( e ){}
```

##### Invalid

```js
if ( a == b ) { } else { c = d; }
```



Disallows function declarations.

Type: `Boolean`

Value: `true`

#### Example

```js
"disallowFunctionDeclarations": true
```

##### Valid

```js
var expressed = function() {

};

var expressed = function deeply() {

};

$('#foo').click(function bar() {

};)
```

##### Invalid

```js
function stated() {

}
```



Disallows a specified set of identifier names.

Type: `Array`

Values: Array of strings, which should be disallowed as identifier names

#### Example

```js
"disallowIdentifierNames": ['temp', 'foo']
```

##### Valid

```js
var good = 1;
object['fine'] = 2;
object.fine = 3;
```

##### Invalid

```js
var temp = 1;
object['foo'] = 2;
object.foo = 3;
```



Disallows implicit type conversion.

Type: `Array`

Values: Array of quoted types

#### Example

```js
"disallowImplicitTypeConversion": ["numeric", "boolean", "binary", "string"]
```

##### Valid

```js
x = Boolean(y);
x = Number(y);
x = String(y);
x = s.indexOf('.') !== -1;
```

##### Invalid

```js
x = !!y;
x = +y;
x = '' + y;
x = ~s.indexOf('.');
```



Disallows keywords in your comments, such as TODO or FIXME

Types: `Boolean`, `String` or `Array`

Values:
- `true`
- `'\b(word1|word2)\b'`
- `['word1', 'word2']`

#### Examples

```js
"disallowKeywordsInComments": true
"disallowKeywordsInComments": "\\b(word1|word2)\\b"
"disallowKeywordsInComments": ["word1", "word2"]
```

#### Invalid:
```
// ToDo
//TODO
/** fixme *\/
/**
 * FIXME
 *\/
```



Disallows placing keywords on a new line.

Type: `Array`

Values: Array of quoted keywords

#### Example

```js
"disallowKeywordsOnNewLine": ["else"]
```

##### Valid

```js
if (x < 0) {
    x++;
} else {
    x--;
}
```

##### Invalid

```js
if (x < 0) {
    x++;
}
else {
    x--;
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



Disallows strings that span multiple lines without using concatenation.

Type: `Boolean`

Value: `true`

JSHint: [`multistr`](http://www.jshint.com/docs/options/#multistr)

#### Example

```js
"disallowMultipleLineStrings": true
```

##### Valid
```js
var x = "multi" +
        "line";
var y = "single line";
```

##### Invalid
```js
var x = "multi \
        line";
```



Disallows multiple indentation characters (tabs or spaces) between identifiers, keywords, and any other token

Type: `Boolean`

Value: `true`

#### Example

```js
"disallowMultipleSpaces": true
```

##### Valid
```js
var x = "hello";
function y() {}
```

##### Invalid
```js
var x  = "hello";
function  y() {}
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


Disallows unassigned functions to be named inline

Type: `Boolean`

Value: `true`

#### Example

```js
"disallowNamedUnassignedFunctions": true
```

##### Valid
```js
[].forEach(function () {});
var x = function() {};
function y() {}
```

##### Invalid
```js
[].forEach(function x() {});
```



Disallows newline before opening curly brace of all block statements.

Type: `Boolean`

Value: `true`

#### Example

```js
"disallowNewlineBeforeBlockStatements": true
```

##### Valid

```js
function good(){
    var obj = {
        val: true
    };

    return {
        data: obj
    };
}

if (cond){
    foo();
}

for (var e in elements){
    bar(e);
}

while (cond){
    foo();
}
```

##### Invalid

```js
function bad()
{
    var obj =
    {
        val: true
    };

    return {
        data: obj
    };
}

if (cond)
{
    foo();
}

for (var e in elements)
{
    bar(e);
}

while (cond)
{
    foo();
}
```


Disallows the not, not equals, and strict not equals operators in conditionals.

Type: `Boolean`

Value: `true`

#### Example

```js
"disallowNotOperatorsInConditionals": true
```

##### Valid

```js
if (clause) {
    // Do something really crazy
} else {
    // Do something crazy
}

if (a == 1) {
    // Do something really crazy
} else {
    // Do something crazy
}

var a = (clause) ? 1 : 0
```

##### Invalid

```js
if (!clause) {
    // Do something crazy
} else {
    // Do something really crazy
}

if (a != 1) {
    // Do something crazy
} else {
    // Do something really crazy
}

if (a !== 1) {
    // Do something crazy
} else {
    // Do something really crazy
}

var a = (!clause) ? 0 : 1
```



Requires putting certain operators on the next line rather than on the current line before a line break.

Types: `Array` or `Boolean`

Values: Array of operators to apply to or `true`

#### Example

```js
"disallowOperatorBeforeLineBreak": ["+", "."]
```

##### Valid

```js
$el.on( 'click', fn )
	.appendTo( 'body' );

var x = 4 + 5
	+ 12 + 13;
```

##### Invalid

```js
$el.on( 'click', fn ).
	appendTo( 'body' );

var x = 4 + 5 +
	12 + 13;
```



Disallow a newline after blocks

Type: `Boolean`

Value: `true`

#### Example

```js
"disallowPaddingNewLinesAfterBlocks": true
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

    var obj = {
        foo: function() {
            return 1;
        },

        bar: function() {
            return 2;
        }
    };
}
```


Disallow a blank line after `'use strict';` statements

Values: `true`

#### Example

```js
"disallowPaddingNewLinesAfterUseStrict": true
```

##### Valid

```js
'use strict';
// code
```

##### Invalid

```js
'use strict';

// code
```


Disallows newline before module.exports

Type: `Boolean`

Value: `true`

#### Example

```js
"disallowPaddingNewLinesBeforeExport": true
```

##### Valid

```js
var a = 2;
module.exports = a;
```

##### Invalid

```js
var a = 2;

module.exports = a;
```


Disallow an empty line above the specified keywords.

Types: `Array` or `Boolean`

Values: Array of quoted types or `true` to disallow padding new lines after all of the keywords below.

#### Example

```js
"disallowPaddingNewlinesBeforeKeywords": [
    "do",
    "for",
    "if",
    "else",
    "switch",
    "case",
    "try",
    "catch",
    "void",
    "while",
    "with",
    "return",
    "typeof",
    "function"
]
```

##### Valid

```js
function(a) {
    if (!a) {
        return false;
    }
    for (var i = 0; i < b; i++) {
        if (!a[i]) {
            return false;
        }
    }
    return true;
}
```

##### Invalid

```js
function(a) {
    if (!a) {

        return false;
    }

    for (var i = 0; i < b; i++) {
        if (!a[i]) {

            return false;
        }
    }

    return true;
}
```


Disallows newline before line comments

Type: `Boolean`

Value: `true`

#### Example

```js
"disallowPaddingNewLinesBeforeLineComments": true
```

##### Valid

```js
var a = 2;
// comment
return a;
```

##### Invalid

```js
var a = 2;

//comment
return a;
```


Disallows blocks from beginning or ending with 2 newlines.

Type: `Boolean`

Value: `true` validates all non-empty blocks.

#### Example

```js
"disallowPaddingNewlinesInBlocks": true
```

##### Valid

```js
if (true) {
    doSomething();
}
if (true) {doSomething();}
var abc = function() {};
```

##### Invalid

```js
if (true) {

    doSomething();

}
```


Disallows newline inside curly braces of all objects.

Type: `Boolean`

Value: `true`

#### Example

```js
"disallowPaddingNewLinesInObjects": true
```

##### Valid

```js
var x = { a: 1 };
foo({a: {b: 1}});
```

##### Invalid

```js
var x = {
    a: 1
};
foo({
    a: {
        b: 1
    }
});
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


Disallows lines from ending in a semicolon.

Type: `Boolean`

Value: `true`

#### Example

```js
"disallowSemicolons": true
```

##### Valid

```js
var a = 1
;[b].forEach(c)
```

##### Invalid

```js
var a = 1;
[b].forEach(c);
```


Requires sticking binary operators to the right.

Types: `Array` or `Boolean`

Values: Array of quoted operators or `true` to disallow space after all possible binary operators

#### Example

```js
"disallowSpaceAfterBinaryOperators": [
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
x +y;
```

##### Invalid

```js
x+ y;
```


Disallows space after keyword.

Types: `Array` or `Boolean`

Values: Array of quoted keywords or `true` to disallow spaces after all possible keywords.

#### Example

```js
"disallowSpaceAfterKeywords": [
    "if",
    "else",
    "for",
    "while",
    "do",
    "switch",
    "try",
    "catch"
]
```

##### Valid

```js
if(x > y) {
    y++;
}
```

##### Invalid

```js
if (x > y) {
    y++;
}
```



Requires that a line comment (`//`) not be followed by a space.

Type: `Boolean`

Value: `true`

#### Example

```js
"disallowSpaceAfterLineComment": true
```

##### Valid

```js
//A comment
/* A comment*\/
```

##### Invalid

```js
// A comment
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



Requires sticking binary operators to the left.

Types: `Array` or `Boolean`

Values: Array of quoted operators or `true` to disallow space before all possible binary operators

#### Example

```js
"disallowSpaceBeforeBinaryOperators": [
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
x+ y;
```

##### Invalid

```js
x + y;
```


Disallows space before block statements (for loops, control structures).

Type: `Boolean`

Value: `true`

#### Example

```js
"disallowSpaceBeforeBlockStatements": true
```

##### Valid

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

##### Invalid

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


Disallows space before keyword.

Types: `Array` or `Boolean`

Values: Array of quoted keywords or `true` to disallow spaces before all possible keywords.

#### Example

```js
"disallowSpaceBeforeKeywords": [
    "else",
    "catch"
]
```

##### Valid

```js
}else {
    y--;
}
```

##### Invalid

```js
} else {
    y--;
}
```


Disallows space after object keys.

Type: `Boolean`

Value: `true`

#### Example

```js
"disallowSpaceBeforeObjectValues": true
```

##### Valid
```js
var x = {a:1};
```
##### Invalid
```js
var x = {a: 1};
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


Ensure there are no spaces after argument separators in call expressions.

Type: `Boolean`

Value: `true`

#### Example

```js
"disallowSpaceBetweenArguments": true
```

##### Valid

```js
a(b,c);
```

##### Invalid

```js
a(b, c);
```


Disallows space before `()` or `{}` in anonymous function expressions.

Type: `Object`

Values: `"beforeOpeningRoundBrace"` and `"beforeOpeningCurlyBrace"` as child properties.
Child properties must be set to `true`.

#### Example

```js
"disallowSpacesInAnonymousFunctionExpression": {
    "beforeOpeningRoundBrace": true,
    "beforeOpeningCurlyBrace": true
}
```

##### Valid

```js
var foo = function(){};
var Foo = {
    foo: function(){};
}
array.map(function(){});
```

##### Invalid

```js
var foo = function () {};
var Foo = {
    foo: function (){};
}
array.map(function() {});
```


Disallows space before `()` in call expressions.

Type: `Boolean`

Value: `true`

#### Example

```js
"disallowSpacesInCallExpression": true
```

##### Valid

```js
var x = foobar();
```

##### Invalid

```js
var x = foobar ();
```


Disallows space before and/or after `?` or `:` in conditional expressions.

Types: `Object` or `Boolean`

Values: `"afterTest"`, `"beforeConsequent"`, `"afterConsequent"`, `"beforeAlternate"` as child properties,
or `true` to set all properties to true. Child properties must be set to `true`. These token names correspond to:

```
var a = b ? c : d;
         ^ ^ ^ ^
         | | | |
         | | | └- beforeAlternate
         | | └--- afterConsequent
         | └-------- beforeConsequent
         └---------- afterTest
```

#### Example

```js
"disallowSpacesInConditionalExpression": {
    "afterTest": true,
    "beforeConsequent": true,
    "afterConsequent": true,
    "beforeAlternate": true
}
```

##### Valid

```js
var a = b?c:d;
var a= b?c:d;
```

##### Invalid

```js
var a = b ?c:d;
var a = b? c:d;
var a = b?c :d;
var a = b?c: d;
```


Disallow spaces in between for statement.

Type: `Boolean`

Value: `true` to disallow spaces in between for statement.

#### Example

```js
"disallowSpacesInForStatement": true
```

##### Valid

```js
for(var i=0;i<l;i++) {
    x++;
}
```

##### Invalid

```js
for(var i = 0; i<l; i++) {
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



Disallows space before `()` or `{}` in function declarations.

Type: `Object`

Values: `"beforeOpeningRoundBrace"` and `"beforeOpeningCurlyBrace"` as child properties.
Child properties must be set to `true`.

#### Example

```js
"disallowSpacesInFunctionDeclaration": {
    "beforeOpeningRoundBrace": true,
    "beforeOpeningCurlyBrace": true
}
```

##### Valid

```js
function a(){}
```

##### Invalid

```js
function a() {}
function a (){}
function a () {}
```



Disallows space before `()` or `{}` in function expressions (both [named](#disallowspacesinnamedfunctionexpression)
and [anonymous](#disallowspacesinanonymousfunctionexpression)).

Type: `Object`

Values: `"beforeOpeningRoundBrace"` and `"beforeOpeningCurlyBrace"` as child properties.
Child properties must be set to `true`.

#### Example

```js
"disallowSpacesInFunctionExpression": {
    "beforeOpeningRoundBrace": true,
    "beforeOpeningCurlyBrace": true
}
```

##### Valid

```js
var x = function(){};
var x = function a(){};
```

##### Invalid

```js
var x = function() {};
var x = function (){};
var x = function () {};
var x = function a() {};
var x = function a (){};
var x = function a () {};
```



Expression

Disallows space before `()` or `{}` in function expressions (both [named](#disallowspacesinnamedfunctionexpression)
and [anonymous](#disallowspacesinanonymousfunctionexpression)) and function declarations.

Type: `Object`

Values: `"beforeOpeningRoundBrace"` and `"beforeOpeningCurlyBrace"` as child properties.
Child properties must be set to `true`.

#### Example

```js
"disallowSpacesInFunction": {
    "beforeOpeningRoundBrace": true,
    "beforeOpeningCurlyBrace": true
}
```

##### Valid

```js
var x = function(){};
var x = function a(){};
function a(){}
```

##### Invalid

```js
var x = function() {};
var x = function (){};
var x = function () {};
var x = function a() {};
var x = function a (){};
var x = function a () {};
function a() {}
function a (){}
function a () {}
```


Disallows space before `()` or `{}` in named function expressions.

Type: `Object`

Values: `"beforeOpeningRoundBrace"` and `"beforeOpeningCurlyBrace"` as child properties.
Child properties must be set to `true`.

#### Example

```js
"disallowSpacesInNamedFunctionExpression": {
    "beforeOpeningRoundBrace": true,
    "beforeOpeningCurlyBrace": true
}
```

##### Valid

```js
var x = function a(){};
```

##### Invalid

```js
var x = function a() {};
var x = function a (){};
var x = function a () {};
```



Disallows space after opening array square bracket and before closing.

Types: `Boolean`, `String` or `Object`

Values: `"all"` or `true` for strict mode, `"nested"` (*deprecated* use `"allExcept": [ "[", "]" ]`)
ignores closing brackets in a row.

#### Example

```js
"disallowSpacesInsideArrayBrackets": "all"

// or

"disallowSpacesInsideArrayBrackets": {
    "allExcept": [ "[", "]", "{", "}" ]
}
```

##### Valid for mode `"all"`

```js
var x = [[1]];
```


##### Valid for mode `"nested"`

```js
var x = [ [1] ];
```

##### Valid for mode `"allExcept"`

```js
var x = [ [1] ];
var x = [ { a: 1 } ];
```

##### Invalid

```js
var x = [ [ 1 ] ];
```



Disallows space after opening square bracket and before closing.

Types: `Boolean` or `Object`

Values: `true` for strict mode, or `"allExcept": [ "[", "]" ]`
ignores closing brackets in a row.

#### Example

```js
"disallowSpacesInsideBrackets": true

// or

"disallowSpacesInsideBrackets": {
    "allExcept": [ "[", "]", "{", "}" ]
}
```

##### Valid for mode `true`

```js
var x = [[1]];
```

##### Valid for mode `{ allExcept": [ "[", "]", "{", "}" ] }`

```js
var x = [ [1] ];
var x = [ { a: 1 } ];
```

##### Invalid

```js
var x = [ [ 1 ] ];
```



Disallows space after opening object curly brace and before closing.

Types: `Object`, `Boolean` or `String`

Values: `"all"` or `true` for strict mode, `"nested"` (*deprecated* use `"allExcept": ['}']`)
ignores closing brackets in a row.

#### Example

```js
"disallowSpacesInsideObjectBrackets": {
    "allExcept": [ "}", ")" ]
}

// or
"disallowSpacesInsideObjectBrackets": true | "all" | "nested"
```

##### Valid for mode `"all"`

```js
var x = {a: {b: 1}};
```

##### Valid for mode `"nested"`

```js
var x = {a: {b: 1} };
```

##### Valid for mode `"allExcept": ["}"]`

```js
var x = {a: {b: 1} };
```

##### Invalid

```js
var x = { a: { b: 1 } };
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

##### Valid for `only` value

```js
"disallowSpacesInsideParentheses": { "only": [ "{", "}" ] }
```

```js
var x = ( 1 + 2 );
var x = foo({});
```

##### Invalid

```js
var x = foo( {} );
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

##### Valid for `true`

```js
foo = 'bar';

foo = 'baz';
```

##### Invalid for `true` but Valid for `ignoreEmptyLines`

```js
foo = 'bar';
\t
foo = 'baz';
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



Requires all lines to be at most the number of characters specified

Types: `Integer` or `Object`

Values:
 - `Integer`: lines should be at most the number of characters specified
 - `Object`:
    - `value`: (required) lines should be at most the number of characters specified
    - `tabSize`: (default: `1`) considered the tab character as number of specified spaces
    - `allowComments`: (default: `false`) allows comments to break the rule
    - `allowUrlComments`: (default: `false`) allows comments with long urls to break the rule
    - `allowRegex`: (default: `false`) allows regular expression literals to break the rule

JSHint: [`maxlen`](http://jshint.com/docs/options/#maxlen)

#### Example

```js
"maximumLineLength": 40
```

##### Valid

```js
var aLineOf40Chars = 123456789012345678;
```

##### Invalid

```js
var aLineOf41Chars = 1234567890123456789;
```



Requires the file to be at most the number of lines specified

Type: `Integer`

Values:
- `Integer`: file should be at most the number of lines specified

#### Example

```js
"maximumNumberOfLines": 100
```

