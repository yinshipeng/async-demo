Promise.prototype.done = function (onRejected) {
    this.catch(function (reason) {
        onRejected(reason)
    })
}

var p1 = Promise.reject('p1')


p1.catch(function (error) {
    console.log(error)
    throw new Error('故意抛出错误')
}).done(function (err) {
    console.log('最后还是被捕获到了')
})
