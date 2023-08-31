function sayHello(){
    return new Promise((resolve, reject) => {
        const hello = "Hello Hello"
        resolve("hello")
    })
}

// sayHello().then((resolveData) => {
//     console.log(resolveData)
//     return resolveData
// }).then((resolvedData) => {
//     console.log(resolvedData)
//     return resolvedData
// }).then((resolvedData) => {
//     console.log(resolvedData)
//     return resolvedData
// }).catch((error) => {
//     console.log(error)
// })

async function test(){
    const hello1 = await sayHello()
    console.log(hello1)
}