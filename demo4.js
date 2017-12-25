function * foo (x) {
    yield x + 1
    yield x + 2
    return x + 3
}

var f = foo(5)
console.log(f.next())
console.log(f.next())
console.log(f.next())

