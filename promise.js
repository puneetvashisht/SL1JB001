// SYNCH function

function someProcessing(){
	console.log('function does some processing')
	return "success"
}
var result = someProcessing()


// ASYNCH function

// 1. Callbacks  - exposing caller's function

function someProcessing(callback){
	setTimeout(()=> {
      console.log('function does some processing')
      callback("success")
    }, 3000)
}
var result = someProcessing((result)=>console.log(result))

// 2. Promises - not exposing any function, new feature in JS 

function someProcessing(){
    return new Promise((resolve, reject)=>{
  setTimeout(()=> {
        console.log(callback)
        console.log('function does some processing')
        resolve("success")
      }, 3000)
    })	
  }

  someProcessing()
.then((res)=>console.log(res))

