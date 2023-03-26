const deleteLeftRecursion = (parentNonTerminal,productionRule) => {
    let result1='';
    let result2='';
    let productionList = productionRule.split('|').filter(e => e!=='#');

    for(let production of productionList) {
        if(!production.startsWith(parentNonTerminal)){
            result1 += `${production}${parentNonTerminal}'|`;   
            console.log(`Production ${productionList.indexOf(production)+1} does not have left recursion`);
        }else{
            result2 += production.replace(parentNonTerminal,'').concat(`${parentNonTerminal}'|`);   
            console.log(`Production ${productionList.indexOf(production)+1} has left recursion`);
        } 
    };
    console.log(`The output is:`);
    result1 = result1.slice(0, result1.length - 1);
    console.log(`${parentNonTerminal} --> ${result1}`)
    console.log(`${parentNonTerminal}' --> ${result2}#`)
}

let parentNonTerminal = 'F';
let productionList = 'FBd|Fa|a|b';
console.log(`The given grammer is: ${parentNonTerminal} --> ${productionList}`);
deleteLeftRecursion(parentNonTerminal,productionList);
