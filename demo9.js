var p3 = Promise.reject('p3')
var p4 = Promise.reject('p4')

Promise.all(['p1', 'p2']).then(function (result) {
    console.log(...result)
})

Promise.all(['p1', 'p2', p3, p4]).catch(function (error) {
    console.log(error)
})
