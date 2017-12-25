async function readGitHub (){
    var result = ''
    try {
        result = await new Promise(function (resolve,reject) {
            result = 'haha'
            setTimeout(reject(result), 1000)
        })
    } catch (err) {
        console.log('出错了')
    }
    return result
}

readGitHub().then(function (result) {
    console.log(result)
})