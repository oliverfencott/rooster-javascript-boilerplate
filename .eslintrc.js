/* eslint-disable */

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },

  extends: [ "eslint:recommended" ],

  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      generators: false,
      objectLiteralDuplicateProperties: false,
      experimentalObjectRestSpread: true
    },
    sourceType: "module"
  },

  plugins: [
    "import",
    "react"
  ],

  settings: {
    "import/resolver": {
      node: {
        extensions: [
          ".js", ".json"
        ]
      }
    },
    "import/extensions": [
      ".js"
    ],
    "import/core-modules": [
    ],
    "import/ignore": [
      "node_modules",
      "\\.(coffee|scss|css|less|hbs|svg|json)$"
    ]
  },

  globals: {
    TimelineMax: true,
    Back: true,
    TweenMax: true,
    TweenLite: true,
    Linear: true,
    PushNotification: true,
    cordova: true,
    Power4: true,
    Power1: true,
    Elastic: true,
    Cubic: true,
    Bounce: true
  },

  rules: {

    // enforces getter/setter pairs in objects
    "accessor-pairs": "off",

    // enforces return statements in callbacks of array"s methods
    // http://eslint.org/docs/rules/array-callback-return
    // "array-callback-return": "error",
    "array-callback-return": "off",

    // treat var statements as if they were block scoped
    "block-scoped-var": "error",

    // specify the maximum cyclomatic complexity allowed in a program
    "complexity": ["off", 11],

    // enforce that class methods use "this"
    // http://eslint.org/docs/rules/class-methods-use-this
    // "class-methods-use-this": ["error", {
    //   "exceptMethods": []
    // }],
    "class-methods-use-this": "off",

    // require return statements to either always or never specify values
    // "consistent-return": "error",
    "consistent-return": "off",

    // specify curly brace conventions for all control statements
    "curly": ["error"],

    // require default case in switch statements
    "default-case": ["error", { "commentPattern": "'^no default$'" }],

    // encourages use of dot notation whenever possible
    "dot-notation": ["error", { "allowKeywords": true }],

    // enforces consistent newlines before or after dots
    // http://eslint.org/docs/rules/dot-location
    "dot-location": ["error", "property"],

    // require the use of === and !==
    // http://eslint.org/docs/rules/eqeqeq
    "eqeqeq": ["error", "allow-null"],

    // make sure for-in loops have an if statement
    "guard-for-in": "error",

    // disallow the use of alert, confirm, and prompt
    // "no-alert": "warn",
    "no-alert": "off",

    // disallow use of arguments.caller or arguments.callee
    "no-caller": "error",

    // disallow lexical declarations in case/default clauses
    // http://eslint.org/docs/rules/no-case-declarations.html
    "no-case-declarations": "error",

    // disallow division operators explicitly at beginning of regular expression
    // http://eslint.org/docs/rules/no-div-regex
    "no-div-regex": "off",

    // disallow else after a return in an if
    // "no-else-return": "error",
    "no-else-return": "off",

    // disallow empty functions, except for standalone funcs/arrows
    // http://eslint.org/docs/rules/no-empty-function
    "no-empty-function": ["error", {
      allow: [
        "arrowFunctions",
        "functions",
        "methods"
      ]
    }],

    // disallow empty destructuring patterns
    // http://eslint.org/docs/rules/no-empty-pattern
    "no-empty-pattern": "error",

    // disallow comparisons to null without a type-checking operator
    "no-eq-null": "off",

    // disallow use of eval()
    "no-eval": "error",

    // disallow adding to native types
    "no-extend-native": "error",

    // disallow unnecessary function binding
    "no-extra-bind": "error",

    // disallow Unnecessary Labels
    // http://eslint.org/docs/rules/no-extra-label
    "no-extra-label": "error",

    // disallow fallthrough of case statements
    "no-fallthrough": "error",

    // disallow the use of leading or trailing decimal points in numeric literals
    "no-floating-decimal": "error",

    // disallow reassignments of native objects or read-only globals
    // http://eslint.org/docs/rules/no-global-assign
    "no-global-assign": ["error", { exceptions: [] }],
    // deprecated in favor of no-global-assign
    "no-native-reassign": "off",

    // disallow implicit type conversions
    // http://eslint.org/docs/rules/no-implicit-coercion
    "no-implicit-coercion": ["off", {
      boolean: false,
      number: true,
      string: true,
      allow: []
    }],

    // disallow var and named functions in global scope
    // http://eslint.org/docs/rules/no-implicit-globals
    "no-implicit-globals": "off",

    // disallow use of eval()-like methods
    "no-implied-eval": "error",

    // disallow this keywords outside of classes or class-like objects
    "no-invalid-this": "off",

    // disallow usage of __iterator__ property
    "no-iterator": "error",

    // disallow use of labels for anything other then loops and switches
    "no-labels": ["error", { allowLoop: false, allowSwitch: false }],

    // disallow unnecessary nested blocks
    "no-lone-blocks": "error",

    // disallow creation of functions within loops
    "no-loop-func": "error",

    // disallow magic numbers
    // http://eslint.org/docs/rules/no-magic-numbers
    "no-magic-numbers": ["off", {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false
    }],

    // disallow use of multiple spaces
    "no-multi-spaces": "error",

    // disallow use of multiline strings
    "no-multi-str": "error",

    // disallow use of new operator when not part of the assignment or comparison
    "no-new": "error",

    // disallow use of new operator for Function object
    "no-new-func": "error",

    // disallows creating new instances of String, Number, and Boolean
    "no-new-wrappers": "error",

    // disallow use of (old style) octal literals
    "no-octal": "error",

    // disallow use of octal escape sequences in string literals, such as
    // var foo = "Copyright \251";
    "no-octal-escape": "error",

    // disallow reassignment of function parameters
    // disallow parameter object manipulation
    // rule: http://eslint.org/docs/rules/no-param-reassign.html
    // "no-param-reassign": ["error", { props: true }],
    "no-param-reassign": "off",

    // disallow usage of __proto__ property
    "no-proto": "error",

    // disallow declaring the same variable more then once
    "no-redeclare": "error",

    // disallow certain object properties
    // http://eslint.org/docs/rules/no-restricted-properties
    // TODO: enable, semver-major
    "no-restricted-properties": ["off", {
      object: "arguments",
      property: "callee",
      message: "arguments.callee is deprecated,"
    }, {
      property: "__defineGetter__",
      message: "Please use Object.defineProperty instead."
    }, {
      property: "__defineSetter__",
      message: "Please use Object.defineProperty instead."
    }, {
      object: "Object",
      property: "assign",
      message: "Please use the object spread operator (...) instead."
    }],

    // disallow use of assignment in return statement
    "no-return-assign": "error",

    // disallow use of `javascript:` urls.
    "no-script-url": "error",

    // disallow self assignment
    // http://eslint.org/docs/rules/no-self-assign
    "no-self-assign": "error",

    // disallow comparisons where both sides are exactly the same
    "no-self-compare": "error",

    // disallow use of comma operator
    "no-sequences": "error",

    // restrict what can be thrown as an exception
    "no-throw-literal": "error",

    // disallow unmodified conditions of loops
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    "no-unmodified-loop-condition": "off",

    // disallow usage of expressions in statement position
    // "no-unused-expressions": ["error", {
    //   allowShortCircuit: false,
    //   allowTernary: false,
    // }],
    "no-unused-expressions": "off",

    // disallow unused labels
    // http://eslint.org/docs/rules/no-unused-labels
    "no-unused-labels": "error",

    // disallow unnecessary .call() and .apply()
    "no-useless-call": "off",

    // disallow useless string concatenation
    // http://eslint.org/docs/rules/no-useless-concat
    "no-useless-concat": "error",

    // disallow unnecessary string escaping
    // http://eslint.org/docs/rules/no-useless-escape
    "no-useless-escape": "error",

    // disallow use of void operator
    // http://eslint.org/docs/rules/no-void
    "no-void": "error",

    // disallow usage of configurable warning terms in comments: e.g. todo
    "no-warning-comments": ["off", { terms: ["todo", "fixme", "xxx"], location: "start" }],

    // disallow use of the with statement
    "no-with": "error",

    // require use of the second argument for parseInt()
    "radix": "error",

    // requires to declare all vars on top of their containing scope
    "vars-on-top": "error",

    // require immediate function invocation to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-iife.html
    "wrap-iife": ["error", "outside"],

    // require or disallow Yoda conditions
    "yoda": "error",

    // require trailing commas in multiline object literals
    // "comma-dangle": ["error", "always-multiline"],
    "comma-dangle": "off",

    // disallow assignment in conditional expressions
    "no-cond-assign": ["error", "always"],

    // disallow use of console
    // "no-console": "warn",
    "no-console": "off",

    // disallow use of constant expressions in conditions
    "no-constant-condition": "warn",

    // disallow control characters in regular expressions
    "no-control-regex": "error",

    // disallow use of debugger
    "no-debugger": "warn",

    // disallow duplicate arguments in functions
    "no-dupe-args": "error",

    // disallow duplicate keys when creating object literals
    "no-dupe-keys": "error",

    // disallow a duplicate case label.
    "no-duplicate-case": "error",

    // disallow empty statements
    "no-empty": "error",

    // disallow the use of empty character classes in regular expressions
    "no-empty-character-class": "error",

    // disallow assigning to the exception in a catch block
    "no-ex-assign": "error",

    // disallow double-negation boolean casts in a boolean context
    // http://eslint.org/docs/rules/no-extra-boolean-cast
    "no-extra-boolean-cast": "error",

    // disallow unnecessary parentheses
    // http://eslint.org/docs/rules/no-extra-parens
    "no-extra-parens": ["off", "all", {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false
    }],

    // disallow unnecessary semicolons
    "no-extra-semi": "error",

    // disallow overwriting functions written as function declarations
    "no-func-assign": "error",

    // disallow function or variable declarations in nested blocks
    "no-inner-declarations": "error",

    // disallow invalid regular expression strings in the RegExp constructor
    "no-invalid-regexp": "error",

    // disallow irregular whitespace outside of strings and comments
    "no-irregular-whitespace": "error",

    // disallow the use of object properties of the global object (Math and JSON) as functions
    "no-obj-calls": "error",

    // disallow use of Object.prototypes builtins directly
    // http://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": "error",

    // disallow multiple spaces in a regular expression literal
    "no-regex-spaces": "error",

    // disallow sparse arrays
    "no-sparse-arrays": "error",

    // Disallow template literal placeholder syntax in regular strings
    // http://eslint.org/docs/rules/no-template-curly-in-string
    "no-template-curly-in-string": "error",

    // Avoid code that looks like two expressions but is actually one
    // http://eslint.org/docs/rules/no-unexpected-multiline
    "no-unexpected-multiline": "error",

    // disallow unreachable statements after a return, throw, continue, or break statement
    "no-unreachable": "error",

    // disallow return/throw/break/continue inside finally blocks
    // http://eslint.org/docs/rules/no-unsafe-finally
    "no-unsafe-finally": "error",

    // disallow negating the left operand of relational operators
    // http://eslint.org/docs/rules/no-unsafe-negation
    "no-unsafe-negation": "error",
    // disallow negation of the left operand of an in expression
    // deprecated in favor of no-unsafe-negation
    "no-negated-in-lhs": "off",

    // disallow comparisons with the value NaN
    "use-isnan": "error",

    // ensure JSDoc comments are valid
    // http://eslint.org/docs/rules/valid-jsdoc
    "valid-jsdoc": "off",

    // ensure that the results of typeof are compared against a valid string
    // http://eslint.org/docs/rules/valid-typeof
    "valid-typeof": ["error", { requireStringLiterals: true }],


    // enforce return after a callback
    "callback-return": "off",

    // require all requires be top-level
    // http://eslint.org/docs/rules/global-require
    "global-require": "error",

    // enforces error handling in callbacks (node environment)
    "handle-callback-err": "off",

    // disallow mixing regular variable and require declarations
    "no-mixed-requires": ["off", false],

    // disallow use of new operator with the require function
    "no-new-require": "error",

    // disallow string concatenation with __dirname and __filename
    // http://eslint.org/docs/rules/no-path-concat
    "no-path-concat": "error",

    // disallow use of process.env
    "no-process-env": "off",

    // disallow process.exit()
    "no-process-exit": "off",

    // restrict usage of specified node modules
    "no-restricted-modules": "off",

    // disallow use of synchronous methods (off by default)
    "no-sync": "off",


    // enforce spacing inside array brackets
    // "array-bracket-spacing": ["error", "never"],
    "array-bracket-spacing": "off",

    // enforce spacing inside single-line blocks
    // http://eslint.org/docs/rules/block-spacing
    "block-spacing": ["error", "always"],

    // enforce one true brace style
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],

    // require camel case names
    "camelcase": ["error", { properties: "never" }],

    // enforce spacing before and after comma
    "comma-spacing": ["error", { before: false, after: true }],

    // enforce one true comma style
    "comma-style": ["error", "last"],

    // disallow padding inside computed properties
    "computed-property-spacing": ["error", "never"],

    // enforces consistent naming when capturing the current execution context
    "consistent-this": ["error", "context"],

    // enforce newline at the end of file, with no multiple empty lines
    "eol-last": ["error", "always"],

    // enforce spacing between functions and their invocations
    // http://eslint.org/docs/rules/func-call-spacing
    "func-call-spacing": ["error", "never"],

    // require function expressions to have a name
    // "func-names": "warn",
    "func-names": "off",

    // enforces use of function declarations or expressions
    // http://eslint.org/docs/rules/func-style
    // TODO: enable
    "func-style": ["off", "expression"],

    // Blacklist certain identifiers to prevent them being used
    // http://eslint.org/docs/rules/id-blacklist
    "id-blacklist": "off",

    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    "id-length": "off",

    // require identifiers to match the provided regular expression
    "id-match": "off",

    // this option sets a specific tab width for your code
    // http://eslint.org/docs/rules/indent
    "indent": [
      "error",
      2, {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        ignoredNodes: ["ConditionalExpression"]
      }
    ],

    // specify whether double or single quotes should be used in JSX attributes
    // http://eslint.org/docs/rules/jsx-quotes
    "jsx-quotes": ["off", "prefer-double"],

    // enforces spacing between keys and values in object literal properties
    "key-spacing": ["error", { beforeColon: false, afterColon: true }],

    // require a space before & after certain keywords
    "keyword-spacing": ["error", {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }],

    // enforce position of line comments
    // http://eslint.org/docs/rules/line-comment-position
    // TODO: enable?
    "line-comment-position": ["off", {
      position: "above",
      ignorePattern: "''",
      applyDefaultPatterns: true
    }],

    // disallow mixed "LF" and "CRLF" as linebreaks
    // http://eslint.org/docs/rules/linebreak-style
    "linebreak-style": ["error", "unix"],

    // enforces empty lines around comments
    "lines-around-comment": "off",

    // require or disallow newlines around directives
    // http://eslint.org/docs/rules/lines-around-directive
    // TODO: enable, semver-major
    "lines-around-directive": ["off", {
      before: "always",
      after: "always"
    }],

    // specify the maximum depth that blocks can be nested
    "max-depth": ["off", 4],

    // specify the maximum length of a line in your program
    // http://eslint.org/docs/rules/max-len
    "max-len": ["error", 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }],

    // specify the max number of lines in a file
    // http://eslint.org/docs/rules/max-lines
    "max-lines": ["off", {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    }],

    // specify the maximum depth callbacks can be nested
    "max-nested-callbacks": "off",

    // limits the number of parameters that can be used in the function declaration.
    "max-params": ["off", 3],

    // specify the maximum number of statement allowed in a function
    "max-statements": ["off", 10],

    // restrict the number of statements per line
    // http://eslint.org/docs/rules/max-statements-per-line
    "max-statements-per-line": ["off", { max: 1 }],

    // require multiline ternary
    // http://eslint.org/docs/rules/multiline-ternary
    // TODO: enable?
    "multiline-ternary": ["off", "never"],

    // require a capital letter for constructors
    // "new-cap": ["error", { "newIsCap": true }],
    "new-cap": "off",

    // disallow the omission of parentheses when invoking a constructor with no arguments
    // http://eslint.org/docs/rules/new-parens
    "new-parens": "error",

    // allow/disallow an empty newline after var statement
    "newline-after-var": "off",

    // http://eslint.org/docs/rules/newline-before-return
    "newline-before-return": "off",

    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    // http://eslint.org/docs/rules/newline-per-chained-call
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 4 }],

    // disallow use of the Array constructor
    "no-array-constructor": "error",

    // disallow use of bitwise operators
    // http://eslint.org/docs/rules/no-bitwise
    "no-bitwise": "error",

    // disallow use of the continue statement
    // http://eslint.org/docs/rules/no-continue
    "no-continue": "error",

    // disallow comments inline after code
    "no-inline-comments": "off",

    // disallow if as the only statement in an else block
    // http://eslint.org/docs/rules/no-lonely-if
    "no-lonely-if": "error",

    // disallow un-paren"d mixes of different operators
    // http://eslint.org/docs/rules/no-mixed-operators
    "no-mixed-operators": ["error", {
      groups: [
        ["+", "-", "*", "/", "%", "**"],
        ["&", "|", "^", "~", "<<", ">>", ">>>"],
        ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
        ["&&", "||"],
        ["in", "instanceof"]
      ],
      allowSamePrecedence: false
    }],

    // disallow mixed spaces and tabs for indentation
    "no-mixed-spaces-and-tabs": "error",

    // disallow multiple empty lines and only one newline at the end
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],

    // disallow negated conditions
    // http://eslint.org/docs/rules/no-negated-condition
    "no-negated-condition": "off",

    // disallow nested ternary expressions
    "no-nested-ternary": "error",

    // disallow use of the Object constructor
    "no-new-object": "error",

    // disallow use of unary operators, ++ and --
    // http://eslint.org/docs/rules/no-plusplus
    // "no-plusplus": "error",
    "no-plusplus": [ "error", { allowForLoopAfterthoughts: true } ],

    // disallow certain syntax forms
    // http://eslint.org/docs/rules/no-restricted-syntax
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement"
    ],

    // disallow space between function identifier and application
    "no-spaced-func": "error",

    // disallow tab characters entirely
    "no-tabs": "error",

    // disallow the use of ternary operators
    "no-ternary": "off",

    // disallow trailing whitespace at the end of lines
    // "no-trailing-spaces": "error",
    "no-trailing-spaces": "off",

    // disallow dangling underscores in identifiers
    // "no-underscore-dangle": ["error", { "allowAfterThis": false }],
    "no-underscore-dangle": "off",

    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // http://eslint.org/docs/rules/no-unneeded-ternary
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],

    // disallow whitespace before properties
    // http://eslint.org/docs/rules/no-whitespace-before-property
    "no-whitespace-before-property": "error",

    // require padding inside curly braces
    "object-curly-spacing": ["error", "always"],

    // enforce line breaks between braces
    // http://eslint.org/docs/rules/object-curly-newline
    // TODO: enable once https://github.com/eslint/eslint/issues/6488 is resolved
    "object-curly-newline": ["off", {
      ObjectExpression: { minProperties: 0, multiline: true },
      ObjectPattern: { minProperties: 0, multiline: true }
    }],

    // enforce "same line" or "multiple line" on object properties.
    // http://eslint.org/docs/rules/object-property-newline
    "object-property-newline": ["error", {
      allowMultiplePropertiesPerLine: true
    }],

    // allow just one var statement per function
    "one-var": ["error", "never"],

    // require a newline around variable declaration
    // http://eslint.org/docs/rules/one-var-declaration-per-line
    "one-var-declaration-per-line": ["error", "always"],

    // require assignment operator shorthand where possible or prohibit it entirely
    // http://eslint.org/docs/rules/operator-assignment
    "operator-assignment": ["error", "always"],

    // enforce operators to be placed before or after line breaks
    "operator-linebreak": "off",

    // enforce padding within blocks
    // "padded-blocks": ["error", "never"],
    "padded-blocks": "off",

    // require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props.html
    "quote-props": ["error", "as-needed", { keywords: false, unnecessary: true, numbers: false }],

    // specify whether double or single quotes should be used
    // "quotes": ["error", "single", { "avoidEscape": true }],
    "quotes": [ "error", "single", { allowTemplateLiterals: true } ],

    // do not require jsdoc
    // http://eslint.org/docs/rules/require-jsdoc
    "require-jsdoc": "off",

    // require or disallow use of semicolons instead of ASI
    "semi": ["error", "always"],

    // enforce spacing before and after semicolons
    "semi-spacing": ["error", { before: false, after: true }],

    // requires object keys to be sorted
    "sort-keys": ["off", "asc", { caseSensitive: false, natural: true }],

    // sort variables within the same declaration block
    "sort-vars": "off",

    // require or disallow space before blocks
    "space-before-blocks": "error",

    // require or disallow space before function opening parenthesis
    // http://eslint.org/docs/rules/space-before-function-paren
    // "space-before-function-paren": ["error", { "anonymous": "always", "named": "never" }],
    "space-before-function-paren": "off",

    // require or disallow spaces inside parentheses
    "space-in-parens": ["error", "never"],

    // require spaces around operators
    "space-infix-ops": "error",

    // Require or disallow spaces before/after unary operators
    // http://eslint.org/docs/rules/space-unary-ops
    "space-unary-ops": ["error", {
      words: true,
      nonwords: false,
      overrides: {
      }
    }],

    // require or disallow a space immediately following the // or /* in a comment
    "spaced-comment": ["error", "always", {
      exceptions: ["-'", "+'"],
      markers: ["='", "!'"]           // space here to support sprockets directives
    }],

    // require or disallow the Unicode Byte Order Mark
    // http://eslint.org/docs/rules/unicode-bom
    "unicode-bom": ["error", "never"],

    // require regex literals to be wrapped in parentheses
    "wrap-regex": "off",


    // enforce or disallow variable initializations at definition
    "init-declarations": "off",

    // disallow the catch clause parameter name being the same as a variable in the outer scope
    "no-catch-shadow": "off",

    // disallow deletion of variables
    "no-delete-var": "error",

    // disallow labels that share a name with a variable
    // http://eslint.org/docs/rules/no-label-var
    "no-label-var": "error",

    // disallow specific globals
    "no-restricted-globals": "off",

    // disallow declaration of variables already declared in the outer scope
    "no-shadow": "error",

    // disallow shadowing of names such as arguments
    "no-shadow-restricted-names": "error",

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-undef": "error",

    // disallow use of undefined when initializing variables
    "no-undef-init": "error",

    // disallow use of undefined variable
    // http://eslint.org/docs/rules/no-undefined
    // TODO: enable?
    "no-undefined": "off",

    // disallow declaration of variables that are not used in the code
    "no-unused-vars": ["error", { vars: "all", args: "after-used", "ignoreRestSiblings": false, "argsIgnorePattern": "^_" }],

    // disallow use of variables before they are defined
    "no-use-before-define": [ 2, { functions: false }],

    // enforces no braces where they can be omitted
    // http://eslint.org/docs/rules/arrow-body-style
    // TODO: enable requireReturnForObjectLiteral?
    // "arrow-body-style": ["error", "as-needed", {
    //   "requireReturnForObjectLiteral": false
    // }],
    "arrow-body-style": "off",

    // require parens in arrow function arguments
    // http://eslint.org/docs/rules/arrow-parens
    // "arrow-parens": ["error", "as-needed", {
    //   "requireForBlockBody": true
    // }],
    "arrow-parens": "off",

    // require space before/after arrow function"s arrow
    // http://eslint.org/docs/rules/arrow-spacing
    "arrow-spacing": ["error", { before: true, after: true }],

    // verify super() callings in constructors
    "constructor-super": "error",

    // enforce the spacing around the * in generator functions
    // http://eslint.org/docs/rules/generator-star-spacing
    "generator-star-spacing": ["error", { before: false, after: true }],

    // disallow modifying variables of class declarations
    // http://eslint.org/docs/rules/no-class-assign
    "no-class-assign": "error",

    // disallow arrow functions where they could be confused with comparisons
    // http://eslint.org/docs/rules/no-confusing-arrow
    "no-confusing-arrow": ["error", {
      allowParens: true
    }],

    // disallow modifying variables that are declared using const
    "no-const-assign": "error",

    // disallow duplicate class members
    // http://eslint.org/docs/rules/no-dupe-class-members
    "no-dupe-class-members": "error",

    // disallow importing from the same path more than once
    // http://eslint.org/docs/rules/no-duplicate-imports
    "no-duplicate-imports": "error",

    // disallow symbol constructor
    // http://eslint.org/docs/rules/no-new-symbol
    "no-new-symbol": "error",

    // disallow specific imports
    // http://eslint.org/docs/rules/no-restricted-imports
    "no-restricted-imports": "off",

    // disallow to use this/super before super() calling in constructors.
    // http://eslint.org/docs/rules/no-this-before-super
    "no-this-before-super": "error",

    // disallow useless computed property keys
    // http://eslint.org/docs/rules/no-useless-computed-key
    "no-useless-computed-key": "error",

    // disallow unnecessary constructor
    // http://eslint.org/docs/rules/no-useless-constructor
    "no-useless-constructor": "error",

    // disallow renaming import, export, and destructured assignments to the same name
    // http://eslint.org/docs/rules/no-useless-rename
    "no-useless-rename": ["error", {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false
    }],

    // require let or const instead of var
    "no-var": "error",

    // require method and property shorthand syntax for object literals
    // http://eslint.org/docs/rules/object-shorthand
    "object-shorthand": ["error", "always", {
      ignoreConstructors: false,
      avoidQuotes: true
    }],

    // suggest using arrow functions as callbacks
    // "prefer-arrow-callback": ["error", {
    //   "allowNamedFunctions": false,
    //   "allowUnboundThis": true,
    // }],
    "prefer-arrow-callback": "off",

    // suggest using of const declaration for variables that are never modified after declared
    "prefer-const": ["error", {
      destructuring: "any",
      ignoreReadBeforeAssign: true
    }],

    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    // http://eslint.org/docs/rules/prefer-numeric-literals
    // TODO: enable, semver-major
    "prefer-numeric-literals": "off",

    // suggest using Reflect methods where applicable
    // http://eslint.org/docs/rules/prefer-reflect
    // TODO: enable?
    "prefer-reflect": "off",

    // use rest parameters instead of arguments
    // http://eslint.org/docs/rules/prefer-rest-params
    "prefer-rest-params": "error",

    // suggest using the spread operator instead of .apply()
    // http://eslint.org/docs/rules/prefer-spread
    "prefer-spread": "error",

    // suggest using template literals instead of string concatenation
    // http://eslint.org/docs/rules/prefer-template
    "prefer-template": "error",

    // disallow generator functions that do not have yield
    // http://eslint.org/docs/rules/require-yield
    "require-yield": "error",

    // enforce spacing between object rest-spread
    // http://eslint.org/docs/rules/rest-spread-spacing
    "rest-spread-spacing": ["error", "never"],

    // import sorting
    // http://eslint.org/docs/rules/sort-imports
    "sort-imports": ["off", {
      ignoreCase: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ["none", "all", "multiple", "single"]
    }],

    // require a Symbol description
    // http://eslint.org/docs/rules/symbol-description
    "symbol-description": "error",

    // enforce usage of spacing in template strings
    // http://eslint.org/docs/rules/template-curly-spacing
    "template-curly-spacing": "error",

    // enforce spacing around the * in yield* expressions
    // http://eslint.org/docs/rules/yield-star-spacing
    "yield-star-spacing": ["error", "after"],

    // Static analysis:

    // ensure imports point to files/modules that can be resolved
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    // "import/no-unresolved": ["error", { "commonjs": true }],
    "import/no-unresolved": [
      "error",
      {
        ignore: [ "config" ]
      }
    ],

    // ensure named imports coupled with named exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
    "import/named": "off",

    // ensure default import coupled with default export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
    "import/default": "off",

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
    "import/namespace": "off",

    // Helpful warnings:

    // disallow invalid exports, e.g. multiple defaults
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
    "import/export": "error",

    // do not allow a default import name to match a named export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    "import/no-named-as-default": "error",

    // warn on accessing default export property names that are also named exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
    "import/no-named-as-default-member": "error",

    // disallow use of jsdoc-marked-deprecated imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
    "import/no-deprecated": "off",

    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    // "import/no-extraneous-dependencies": ["error", {
    //   devDependencies: false,
    //   optionalDependencies: false,
    // }],

    "import/no-extraneous-dependencies": "off",

    // Forbid mutable exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
    "import/no-mutable-exports": "error",

    // Module systems:

    // disallow require()
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
    "import/no-commonjs": "error",

    // disallow AMD require/define
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
    "import/no-amd": "error",

    // No Node.js builtin modules
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
    // TODO: enable?
    "import/no-nodejs-modules": "off",

    // Style guide:

    // disallow non-import statements appearing before import statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md
    "import/imports-first": ["error", "absolute-first"],

    // disallow duplicate imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    "import/no-duplicates": "error",

    // disallow namespace imports
    // TODO: enable?
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
    "import/no-namespace": "off",

    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    // TODO: enable when https://github.com/benmosher/eslint-plugin-import/issues/390 is resolved
    "import/extensions": ["off", "never"],

    // Enforce a convention in module import order
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    // TODO: enable?
    "import/order": ["off", {
      groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
      "newlines-between": "never"
    }],

    // Require a newline after the last import/require in a group
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    "import/newline-after-import": "error",

    // Require modules with a single export to use a default export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    // "import/prefer-default-export": "error",
    "import/prefer-default-export": "off",

    // Restrict which files can be imported in a given folder
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
    "import/no-restricted-paths": "off",

    // Forbid modules to have too many dependencies
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
    "import/max-dependencies": ["off", { max: 10 }],

    // Forbid import of modules using absolute paths
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
    // TODO: enable, semver-major
    "import/no-absolute-path": ["off"],

    // Forbid require() calls with expressions
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    // TODO: enable, semver-major
    "import/no-dynamic-require": ["off"],

    // prevent importing the submodules of other modules
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
    "import/no-internal-modules": ["off", {
      allow: []
    }],

    // babel inserts `"use strict";` for us
    strict: ["error", "never"],

    "react/jsx-uses-vars": 2,
    "react/jsx-uses-react": 2,
    "react/react-in-jsx-scope": 2
  }
}

/* eslint-enable */
