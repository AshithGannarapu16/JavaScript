// let promise=new promise((resolve,reject)=>{
//     setTimeout(() => {
//         const data =[]
//         if(data.length>0){
//             resolve(data)
//         }else{
//             reject()
//         }
        
//     }, 3000);
// })

// promise.then((response=>{
//     console.log(response)
// })).catch((response)=>alert(response))

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = ["mom i was coming"];
        if (data.length > 0) {
            resolve(data);
        } else {
            reject('No data found');
        }
    }, 3000);
});

promise.then((response) => {
    console.log(response);
}).catch((error) => alert(error));
