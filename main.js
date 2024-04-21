const getTodos = (callback) => {
    const request = new XMLHttpRequest() /* How to create a request object. El XML funciona con todo tipo de datos */
    
    request.addEventListener("readystatechange", () =>{
        // console.log(request, request.readyState)
        if (request.readyState === 4 && request.status === 200){
            callback(undefined, request.responseText)
        } else if(request.readyState === 4){
            callback("could not fetch data", undefined)
        }
    })
    request.open("GET", "https://jsonplaceholder.typicode.com/todos/" ) /* (type of request, endpoint) */
    request.send()
}

console.log(1)


getTodos((err, data) => { /* By convention, error first and data second */
    console.log("callback fired")
    if (err){
        console.log(err)
    }else{
        console.log(data)
    }
})

console.log(2)
