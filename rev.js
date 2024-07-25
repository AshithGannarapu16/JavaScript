
// function reverseString(str){
//     if(str===""){
//         return "";
//     }else{
//         return reverseString(str.substring(1))+str.charAt(0)
//     }
// }
// console.log(reverseString("hello"))


function backToFront(str){
    if(str===""){
        return "";
    }else{
        return backToFront(str.substr(1))+str.charAt(0)
    }
}

console.log(backToFront("ashith,amulu,neeraja,murali"))