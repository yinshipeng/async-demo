/**
 * fn1函数内容定义了自己的变量和方法，它知道自己有一天在某个时刻可能会被调用
 * 但是它内部有一个异步操作，它不知道异步结束之后调用它的人想干些什么事情
 * 它灵机一动，提供了一个函数变量，供调用者具体处理异步结果。
 * @param ms
 * @param fn
 */
function fn1 (ms, fn) {
    var x = 10
    setTimeout(function () {
        fn.apply(this, arguments)
    }, ms, '11')
    while (x > 0) {
        x--
    }
}

function fn2 (x) {
    console.log(x)
}

fn1(1000, fn2)

$('#div').on('click', function (event) {})

function trigger () {
    setTimeout(function () {
        $('#div').trigger('click')
    }, 1000)
}

trigger()