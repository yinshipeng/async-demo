/**
 * 定义售楼处
 * @type {{}}
 */
var salesoffice = {}
/**
 * 缓存列表，存放订阅者的订阅的类型和对应的回调函数
 * {'8号楼':[fn1, fn2],'9号楼':[fn3, fn4]}
 * @type {{}}
 */
salesoffice.clientList = {}

/**
 * 订阅者进行注册
 * @param key
 * @param fn
 */
salesoffice.listen = function (key, fn) {
    if (!this.clientList[key]) {
        this.clientList[key] = []
    }
    this.clientList[key].push(fn)
}

/**
 * 发布者发布消息
 * @returns {boolean}
 */
salesoffice.trigger = function () {
    var key = Array.prototype.shift.call(arguments)
    var fns = this.clientList[key]
    if (!fns || fns.length === 0) {
        return false
    }
    for (var fn of fns) {
        fn.apply(this, arguments)
    }
}

/**
 * 收集注册信息
 */
salesoffice.listen('8号楼', function (price) {
    console.log('价格=' + price)
})

/**
 * 收集注册信息
 */
salesoffice.listen('9号楼', function (price) {
    console.log('价格=' + price)
})

/**
 * 模拟异步分别发布8号楼和9号楼信息
 */
function publish () {
    setTimeout(function () {
        salesoffice.trigger('8号楼', '20000元/平方')
        salesoffice.trigger('9号楼', '22000元/平方')
    },2000)
}

publish()