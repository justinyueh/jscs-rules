Requires that a function expression be anonymous.

Type: `Boolean`

Value: `true`

#### Example

```js
"requireAnonymousFunctions": true
```

##### Valid

```js
var a = function() {

};

$('#foo').click(function() {

})
```

##### Invalid

```js
var a = function foo() {

};

$('#foo').click(function bar() {

});
```


Requires blocks to begin and end with a newline

Types: `Boolean` or `Integer`

Values: `true` validates all non-empty blocks,
`Integer` specifies a minimum number of statements in the block before validating.

#### Example

```js
"requireBlocksOnNewline": true
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

##### Invalid

```js
if (true) { doSomething(); doSomethingElse(); }
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


Requires newline before line comments

Types: `Boolean` or `Object`

Values:
- `true`: always require a newline before line comments
- `Object`:
     - `"allExcept"`: `"firstAfterCurly"` Comments may be first line of block without extra padding

#### Examples
```js
"requirePaddingNewLinesBeforeLineComments": true
"requirePaddingNewLinesBeforeLineComments": { "allExcept": "firstAfterCurly" }
```

##### Valid for `true`

```js
var a = 2;
var b = 3; // comment

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


Requires that a line comment (`//`) be followed by a space.

Types: `Boolean`, `Object` or `String`

Values:
 - `true`
 - `"allowSlash"` (*deprecated* use `"allExcept": ["/"]`) allows `/// ` format
 - `Object`:
    - `allExcept`: array of allowed strings before space `//(here) `

#### Example

```js
"requireSpaceAfterLineComment": { "allExcept": ["#", "="] }
```

##### Valid

```js
// A comment
/*A comment*\/
//# sourceURL=filename.js
//= require something
```

##### Invalid

```js
//A comment
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
```

##### Invalid

```js
var x = {
    one: 1
    , two: 2
};
```


Requires curly braces after statements.

Types: `Array` or `Boolean`

Values: Array of quoted keywords or `true` to require curly braces after the following keywords:

JSHint: [`curly`](http://jshint.com/docs/options/#curly)

#### Example

```js
"requireCurlyBraces": [
    "if",
    "else",
    "for",
    "while",
    "do",
    "try",
    "catch",
    "case",
    "default"
]
```

##### Valid

```js
if (x) {
    x++;
}
```

##### Invalid

```js
if (x) x++;
```


Require a $ before variable names that are jquery assignments.

Types: `Boolean` or `String`

Values: `true` or `"ignoreProperties"`

#### Example

```js
"requireDollarBeforejQueryAssignment": true
```

##### Valid example for mode `true`

```js
var $x = $(".foo");
var y = {
  $x: $(".bar")
};
```

##### Invalid example for mode `true`

```js
var x = $(".foo");
var y = {
  x: $(".bar")
};
```

##### Valid example for mode `ignoreProperties`

```js
var $x = $(".foo");
var y = {
  x: $(".bar")
};
```

##### Invalid example for mode `ignoreProperties`

```js
var x = $(".foo");
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


Disallows placing keywords on a new line.

Type: `Array`

Values: Array of quoted keywords

#### Example

```js
"requireKeywordsOnNewLine": ["else"]
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



Requires placing line feed after assigning a variable.

Type: `Boolean`

Value: `true`

#### Example

```js
"requireLineBreakAfterVariableAssignment": true
```

##### Valid

```js
var a, b, c,
    foo = 7,
    bar = 8;

var a,
    foo = 7,
    a, b, c,
    bar = 8;
```

##### Invalid

```js
var abc = 8; var foo = 5;

var a, b, c,
    foo = 7, bar = 8;
```



Requires placing line feed at file end.

Type: `Boolean`

Value: `true`

#### Example

```js
"requireLineFeedAtFileEnd": true
```


Requires multiple `var` declaration.

Types: `Boolean` or `String`

Values: `true` or `"onevar"`

if `requireMultipleVarDecl` defined as a `true` value, it will report only consecutive vars, if, on the other hand,
value equals to `"onevar"` string, `requireMultipleVarDecl` will allow only one `var` per function scope.

JSHint: [`onevar`](http://jshint.com/docs/options/#onevar)

#### Example

```js
"requireMultipleVarDecl": true
```

##### Valid

```js
var x = 1,
    y = 2;
```

##### Invalid

```js
var x = 1;
var y = 2;
```


Requires operators to appear before line breaks and not after.

Types: `Array` or `Boolean`

Values: Array of quoted operators or `true` to require all possible binary operators to appear before line breaks

JSHint: [`laxbreak`](http://www.jshint.com/docs/options/#laxbreak)

#### Example

```js
"requireOperatorBeforeLineBreak": [
    "?",
    "=",
    "+",
    "-",
    "/",
    "*",
    "==",
    "===",
    "!=",
    "!==",
    ">",
    ">=",
    "<",
    "<="
]
```

##### Valid

```js
x = y ? 1 : 2;
x = y ?
    1 : 2;
```

##### Invalid

```js
x = y
    ? 1 : 2;
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



Requires an extra blank newline after var declarations, as long
as it is not the last expression in the current block.

Type: `Boolean`

Value: `true`

#### Example

```js
"requirePaddingNewLineAfterVariableDeclaration": true
```

##### Valid

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

##### Invalid

```js
var x = { a: 1 };
foo({a:{b:1}});
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
"requirePaddingNewLinesAfterBlocks": {
    "allExcept": ["inCallExpressions", "inArrayExpressions", "inProperties"]
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


Requires an empty line above the specified keywords unless the keyword is the first expression in a block.

Types: `Array` or `Boolean`

Values: Array of quoted types or `true` to require padding new lines before all of the keywords below.

#### Example

```js
"requirePaddingNewlinesBeforeKeywords": [
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


Requires blocks to begin and end with 2 newlines

Types: `Boolean` or `Integer`

Values: `true` validates all non-empty blocks,
`Integer` specifies a minimum number of statements in the block before validating.

#### Example

```js
"requirePaddingNewlinesInBlocks": true
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
if (true) {
    doSomething();
}
```

##### Invalid

```js
if (true) { doSomething(); doSomethingElse(); }
if (true) {
    doSomething();
    doSomethingElse();
}
```


Requires newline inside curly braces of all objects.

Type: `Boolean`

Value: `true`

#### Example

```js
"requirePaddingNewLinesInObjects": true
```

##### Valid

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

##### Invalid

```js
var x = { a: 1 };
foo({a:{b:1}});
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


Requires semicolon after:

* var declaration
* expression statement
* return
* throw
* break
* continue
* do-while

Type: `Boolean`

Value: `true`

#### Example

```js
"requireSemicolons": true
```

##### Valid

```js
var a = 1;
```

##### Invalid

```js
var a = 1
```


Requires space after keyword.

Types: `Array` or `Boolean`

Values: Array of quoted keywords or `true` to require all of the keywords below to have a space afterward.

#### Example

```js
"requireSpaceAfterKeywords": [
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
return true;
```

##### Invalid

```js
if(x) {
    x++;
}
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



Requires space before keyword.

Types: `Array` or `Boolean`

Values: Array of quoted keywords or `true` to require all possible keywords to have a preceding space.

#### Example

```js
"requireSpaceBeforeKeywords": [
    "else",
    "while",
    "catch"
]
```

##### Valid

```js
} else {
    x++;
}
```

##### Invalid

```js
}else {
    x++;
}
```



Requires space after object keys.

Type: `Boolean`

Value: `true`

#### Example

```js
"requireSpaceBeforeObjectValues": true
```

##### Valid
```js
var x = {a: 1};
```
##### Invalid
```js
var x = {a:1};
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



Requires space after opening array square bracket and before closing.

Types: `String` or `Object`

Values: `"all"` for strict mode, `"allButNested"` (*deprecated* use `"allExcept": [ "[", "]"]`)
ignores closing brackets in a row.

#### Example

```js
"requireSpacesInsideArrayBrackets": "all"

// or

"requireSpacesInsideArrayBrackets": {
    "allExcept": [ "[", "]", "{", "}" ]
}
```

##### Valid for mode `"all"`

```js
var x = [ 1 ];
```

##### Valid for mode `"allButNested"`

```js
var x = [[ 1 ], [ 2 ]];
```

##### Valid for mode `"allExcept"`

```js
var x = [[ 1 ], [ 2 ]];
var x = [{ a: 1 }, { b: 2}];
```

##### Invalid

```js
var x = [1];
```


Requires space after opening object curly brace and before closing.

Types: `Object` or `String`

Values: `"all"` for strict mode, `"allButNested"` (*deprecated* use `"allExcept": ['}']`)
ignores closing brackets in a row.

#### Example

```js
"requireSpacesInsideObjectBrackets": {
    "allExcept": [ "}", ")" ]
}

// or
"requireSpacesInsideObjectBrackets": true | "all" | "allButNested"
```

##### Valid for mode `"all"`

```js
var x = { a: { b: 1 } };
```

##### Invalid

```js
var x = {a: 1};
```



Requires space after opening round bracket and before closing.

Types: `Object` or `String`

Values: `"all"` for strict mode, `"allButNested"`
(*deprecated* use `"except": ['(', ')']`) ignores nested brackets in a row, you could also specify token exceptions.

#### Example

```js
"requireSpacesInsideParentheses": {
    "all": true,
    "except": [ "{", "}" ]
}
```

##### Valid for mode `"all"`

```js
var x = Math.pow( ( 1 + 2 ), ( 3 + 4 ) );
```

##### Valid for mode `"allButNested"`

```js
var x = Math.pow(( 1 + 2 ), ( 3 + 4 ));
```

##### Valid for mode `"all"` with `except`

```js
var x = Math.pow( foo({ test: 1 }) );
```

##### Invalid

```js
var x = Math.pow(1 + 2, 3 + 4);
```


Requires the variable to be the right hand operator when doing a boolean comparison

Type: `Boolean`

Value: `true`

#### Example

```js
"requireYodaConditions": true
```

##### Valid
```js
if (1 == a) {
    return
}
```

##### Invalid

```js
if (a == 1) {
    return
}
```


Validates proper alignment of function parameters.

Type: `Object` or `Boolean`

Values: `"lineBreakAfterOpeningBraces"`, `"lineBreakBeforeClosingBraces"` as child properties or `true`.

#### Example

```js
"validateAlignedFunctionParameters": {
  "lineBreakAfterOpeningBraces": true,
  "lineBreakBeforeClosingBraces": true
}
```

##### Valid

```js
function (
  thisIs,
  theLongestList,
  ofParametersEverWritten
) {}
```

##### Invalid

```js
function (thisIs,
          theLongestList,
          ofParametersEverWritten) {}
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


Enable validation of separators between function parameters. Will ignore newlines.

Type: `String`

Values:

 - `","`: function parameters are immediately followed by a comma
 - `", "`: function parameters are immediately followed by a comma and then a space
 - `" ,"`: function parameters are immediately followed by a space and then a comma
 - `" , "`: function parameters are immediately followed by a space, a comma, and then a space

#### Example

```js
"validateParameterSeparator": ", "
```

##### Valid

```js
function a(b, c) {}
```

##### Invalid

```js
function a(b , c) {}
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

