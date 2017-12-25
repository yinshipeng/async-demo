var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('haha')
    },2000)
})

promise.then(function (res) {
    console.log(res)
    return res
}).then(function (res) {
    console.log(res)
    throw new Error('error')
}).catch(function (err) {
    console.log(err)
})