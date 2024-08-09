var romanToInt=function(s){
    const roman={
        'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M'
:1000    };
let  total=0;

for(let i=0;i<s.length;i++){
    const currentVal=roman[s[i]];
    const nextVal=roman[s[i+1]];

    if(currentVal<nextVal){
        total-=currentVal;
    }else{
        total+=currentVal;
    }
}
return total;
}
console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('VII'))