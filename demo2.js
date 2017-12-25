// 定外卖就是一个Promise,Promist的意思就是承诺
// 我们定完外卖，饭不会立即到我们手中
// 这时候我们和商家就要达成一个承诺
// 在未来，不管饭是做好了还是烧糊了，都会给我们一个答复
function 定外卖(){
    // Promise 接受两个参数
    // resolve: 异步事件成功时调用（菜烧好了）
    // reject: 异步事件失败时调用（菜烧糊了）
    return new Promise((resolve, reject) => {
        let result = 做饭()
        // 下面商家给出承诺，不管烧没烧好，都会告诉你
        if (result == '菜烧好了')
    // 商家给出了反馈
    resolve('我们的外卖正在给您派送了')
else
    reject('不好意思，我们菜烧糊了，您再等一会')
})
}

// 商家厨房做饭，模拟概率事件
function 做饭() {
    return Math.random() > 0.5 ? '菜烧好了' : '菜烧糊了'
}

// 你在家上饿了么定外卖
// 有一半的概率会把你的饭烧糊了
// 好在有承诺，他还是会告诉你
定外卖()
// 菜烧好执行，返回'我们的外卖正在给您派送了'
    .then(res => console.log(res))
// 菜烧糊了执行，返回'不好意思，我们菜烧糊了，您再等一会'
.catch(res => console.log(res))