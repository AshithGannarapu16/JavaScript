//in arrays

// let arr=[1,2,3,4,5,6]

// let [a,b,c,d,...rest]=arr;
// console.log(a,b,rest);

// let arr=[1,2,3,4,5,6]

// let [a,,,...rest]=arr;
// console.log(a,rest);

//in objects

// let arr=[3,5,8,9,12,14];

// let {a,b}={a:1,b:5}
// console.log(a,b);

// const obj={a:1,b:2};
// const {a,b}=obj;

// console.log(a,b)

// const obj={a:1,b:2,c:3,d:4,e:5}

// const {a,b,...rest}=obj;
// console.log(a,b,rest);

// const arr=[1,7,11]
// const obj={...arr}
// console.log(obj)

let obj={
    name:"Ashith",
    from:"metpally",
    company:"XYZ"
}

console.log({...obj,name:"Jaideep"}); 