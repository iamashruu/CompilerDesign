const detectComment = expressions => {  
    for(let comment of expressions){
        let result = (comment.startsWith("/*") && comment.endsWith("*/")) 
                  ? "It is multi-line comment"
                  : comment.startsWith("//")? "It is a single line comment"
                  : "It is not a comment";
        console.log(`${comment} => ${result}`);
    } 
}

 
//takes input and runs only in browser console
let line = prompt("Enter the number of lines to write code:");
let expressions = [];

for(let i=0;i<line;i++) {
    expressions.push(prompt(`Enter the expression of line ${i+1}:`));
}

detectComment(expressions);