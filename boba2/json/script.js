console.log("BELAJAR JSON")

axios({
    method: 'get',
    url: 'data.json'
}).then((data) => {
    let result = data.data
    console.log(result)
})