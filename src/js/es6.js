// ES5 ->ES6

// variables
var x = 0
let x = 0
const CONST_IDENTIFIER = 0

// function
function func(a, b, c) {} // function declaration
var func = function(a, b, c) {} // function expression

let func = a => {} // parentheses optional with one parameter
let func = (a, b, c) => {} // parentheses required with multiple parameters

// concatenation
var str = 'Release date: ' + date

let str = `Release Date: ${date}`

// multistrings
var str = 'This text ' + 'is on ' + 'multiple lines'

let str = `This text
          is on
          multiple lines`

// returns
function func(a, b, c) {
  return a + b + c
}

let func = (a, b, c) => a + b + c // curly brackets must be omitted

// key: parameter
var obj = {
  a: a,
  b: b
}

let obj = {
  a,
  b
}

// methods
var obj = {
  a: function(c, d) {},
  b: function(e, f) {}
}

let obj = {
  a(c, d) {},
  b(e, f) {}
}

obj.a() // call method a

// destructurisation
var obj = { a: 1, b: 2, c: 3 }

var a = obj.a
var b = obj.b
var c = obj.c

let { a, b, c } = obj

// massives
var arr = ['a', 'b', 'c']

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

for (let i of arr) {
  console.log(i)
}

// defaults
var func = function(a, b) {
  b = b === undefined ? 2 : b
  return a + b
}

let func = (a, b = 2) => {
  return a + b
}

func(10) // returns 12
func(10, 5) // returns 15

// add new massives
let arr1 = [1, 2, 3]
let arr2 = ['a', 'b', 'c']
let arr3 = [...arr1, ...arr2]
console.log(arr3) // [1, 2, 3, "a", "b", "c"]

let arr1 = [1, 2, 3]
let func = (a, b, c) => a + b + c
console.log(func(...arr1)) // 6

// classes
function Func(a, b) {
  this.a = a
  this.b = b
}
Func.prototype.getSum = function() {
  return this.a + this.b
}
var x = new Func(3, 4)

class Func {
  constructor(a, b) {
    this.a = a
    this.b = b
  }
  getSum() {
    return this.a + this.b
  }
}
let x = new Func(3, 4)

// extends
function Inheritance(a, b, c) {
  Func.call(this, a, b)
  this.c = c
}
Inheritance.prototype = Object.create(Func.prototype)
Inheritance.prototype.getProduct = function() {
  return this.a * this.b * this.c
}
var y = new Inheritance(3, 4, 5)

class Inheritance extends Func {
  constructor(a, b, c) {
    super(a, b)
    this.c = c
  }
  getProduct() {
    return this.a * this.b * this.c
  }
}
let y = new Inheritance(3, 4, 5)
y.getProduct() // 60

// promises-callback
function doSecond() {
  console.log('Do second.')
}
function doFirst(callback) {
  setTimeout(function() {
    console.log('Do first.')
    callback()
  }, 500)
}
doFirst(doSecond)

let doSecond = () => {
  console.log('Do second.')
}
let doFirst = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Do first.')
    resolve()
  }, 500)
})
doFirst.then(doSecond)
