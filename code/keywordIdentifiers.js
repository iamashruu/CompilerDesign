let keywords = ["auto","double","int","struct","break","else","long",
"switch","case","enum","register","typedef","char",
"extern","return","union","const","float","short",
"unsigned","continue","for","signed","void","default",
"goto","sizeof","voltile","do","if","static","while"
];

let expression = "int 9int = float(b) + double(c) + $text = char(ABC)";
let separators = ["==","=",",","++","+","--","-","*","/","%","{","}","(",")"];

function hasSeparators (separators) {
    for(let separator of separators){
        if(expression.includes(separator)){
            expression = expression.replaceAll(`${separator}`,' ');
        }  
    }
    return expression;
}

function detectKeyword(keywords,newExpression) {

    let resultKeywords = [];
    for(let expression of newExpression){
        for(let keyword of keywords){
            if(keyword==expression){
                console.log(`${keyword} is a keyword`);
                resultKeywords.push(keyword);
            } 
        }
    }
    return resultKeywords;
}

function detectIdentifier(keywordList,newExpression) {
    let resultIdentifiers = newExpression.filter(keyword => {
        let regex = "^([a-zA-Z_$][a-zA-Z\\d_$]*)$";
        return !keywordList.includes(keyword) && keyword.match(regex);
    })
   
    console.log(`\n`);
    resultIdentifiers.forEach(element=>{
        console.log(`${element} is an identifier`)
    })
}

function detectKeywordIndentifier(){
    console.log(`The given expression:\n ${expression}\n`)
    // split into array and remove empty elements
    let newExpression = hasSeparators(separators).split(" ").filter(e => e != "");
    console.log(newExpression)
    let keywordList = detectKeyword(keywords,newExpression);
    detectIdentifier(keywordList,newExpression);
};
// int a = b;
// int a   b -- hasSeparators
// [int,a,b] --- Split 

detectKeywordIndentifier();
