const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest() /* How to create a request object. El XML funciona con todo tipo de datos */
    
    request.addEventListener("readystatechange", () =>{
        // console.log(request, request.readyState)
        if (request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText)
            callback(undefined, data)
        } else if(request.readyState === 4){
            callback("could not fetch data", undefined)
        }
    })
    request.open("GET", resource ) /* Inicializa la request(type of request, endpoint) */
    request.send()
}

console.log(1)


getTodos("todos.json", (err, data) => { /* By convention, error first and data second */
    console.log("callback fired")
    if (err){
        console.log(err)
    }else{
        console.log(data)
    }
})

console.log(2)


// Callback hell: si queremos esperar a recibir los datos de una api antes de enviar otra request, podemos anidar callbacks. Es muy dificil de leer y mantener, por eso usamos promises

// Promise example
// A promise can be resolved or rejected (if we get an error)
const getSomething = () =>{
    return new Promise((resolve, reject) => { /* resolve and reject are functions built into the promise API */
        // fetch something
        resolve("some data")
        reject("error kmessage")
    })
}