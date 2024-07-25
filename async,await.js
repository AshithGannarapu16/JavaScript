// function fetchPost(callback){
//     setTimeout(()=>{
//         let posts=["post1","post2"]

//         callback(posts)
//     },1000)
// }

// function fetchLikes(posts,callback){
//     setTimeout(()=>{
//         let likes=[2,3]

//         callback(likes)
//     },1000)
// }

// function fetchComments(likes,callback){
//     setTimeout(() => {
//        let  comments=["nice"] 

//        callback(comments)
//     }, 1000);
// }

// fetchPost((posts)=>{
//     fetchLikes((posts,(likes)=>{
//         fetchComments((likes,(comments)=>{
//             console.log(posts);
//             console.log(likes);
//             console.log(comments);
            
//         }))
//     }))
// })



// function fetchPost(callback) {
//     setTimeout(() => {
//         let posts = ["post1", "post2"];
//         callback(posts);
//     }, 1000);
// }

// function fetchLikes(posts, callback) {
//     setTimeout(() => {
//         let likes = [2, 3];
//         callback(likes);
//     }, 1000);
// }

// function fetchComments(likes, callback) {
//     setTimeout(() => {
//         let comments = ["nice"];
//         callback(comments);
//     }, 1000);
// }

// fetchPost((posts) => {
//     fetchLikes(posts, (likes) => {
//         fetchComments(likes, (comments) => {
//             console.log(posts);
//             console.log(likes);
//             console.log(comments);
//         });
//     });
// });


///https://jsonplaceholder.typicode.com/posts

const pointEnd ="https://jsonplaceholder.typicode.com/posts";



// fetch(pointEnd).then((response)=>{
//     return response.json();


// })
// .then(response=>console.log(response)).catch(error=>console.log(error))
fetch(pointEnd).then((respose)=>{
    return respose.json();


})
.then(respose=>showDatainUI(respose))
.catch(error=>{showError(error)})

function showDatainUI(response){
    console.log(response)

    response.map(value=>console.log(value.title))
}