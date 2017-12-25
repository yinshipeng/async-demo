var p3 = Promise.reject('p3')
var p4 = Promise.reject('p4')

Promise.race(['p1', 'p2', p3, p4]).then(function (result) {
    console.log('result:',result)
}).catch(function (error) {
    console.log("error:",error)
})
