var fetch = require('node-fetch')

async function readGitHub (){
    var url = 'https://api.github.com/users/github'
    var result = await fetch(url)
    return result.json()
}

readGitHub().then(function (result) {
    console.log(result.bio)
})