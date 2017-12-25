var p1 = Promise.resolve('p1')
var p2 = Promise.reject('p2')

p1.then(function (result) {
    console.log('p1>result:',result)
})

p2.catch(function (error) {
    console.log('p2>error:',error)
})