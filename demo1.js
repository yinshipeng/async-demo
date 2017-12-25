function run1 () {
    for (var i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log(i)
        }, 1000)
    }
}

/**
 * foo函数意在接收两个参数，任意类型a，和函数类型callback，
 * 在结尾要调用callback()
 * @param a
 * @param callback
 */
function foo (a, callback) {
    console.log(a)
    var param = Math.random()
    var b = callback(param)
    console.log(b)
}

/**
 * 定义一个叫callback的函数，将作为参数传给foo
 * @param num
 */
function callback (num) {
    console.log(num)
    setTimeout(function () {
        return num
    },0)
}

foo(2, callback)