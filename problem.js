function expandString(input) {
    let output = "";
    let i = 0;
    
    while (i < input.length) {
        let char = input[i];
        i++;
        
        let num = "";
        while (i < input.length && !isNaN(input[i])) {
            num += input[i];
            i++;
        }
        
        output += char.repeat(parseInt(num));
    }
    
    return output;
}

let input = "a1b10";
let result = expandString(input);
console.log(result); 
