let countKeywords = 0;
let countIdentifierConstant = 0;
let countSeparators = 0;

let keywords = ["auto","double","int","struct","break","else","long",
"switch","case","enum","register","typedef","char",
"extern","return","union","const","float","short",
"unsigned","continue","for","signed","void","default",
"goto","sizeof","voltile","do","if","static","while"
];

// let expression = "if(float(b) + double(c) == 9text--) { char(ABC+++)}";
let expression = "if(i%2==0) { i++; }";
let separators = ["==","=",",","++","+","--","-","*","/","%","{","}","(",")","<",">","[","]"];


function hasSeparators(separators) {
    for(let newline of expression){ 
        for(let separator of separators){
            if(expression.includes(separator)){
                countSeparators++;
                expression = expression.replace(`${separator}`,' ');
            }  
        }    
    }
    return expression;
}

function detectKeyword(keywords,newExpression) {
    let resultKeywords = [];
    for(let expression of newExpression){
        for(let keyword of keywords){
            if(keyword==expression){
                countKeywords++;
                resultKeywords.push(keyword);
            } 
        }
    }
    return resultKeywords;
}

function detectIdentifierConstant(keywordList,newExpression) {
    newExpression.filter(keyword => !keywordList.includes(keyword) )
                 .forEach(element=> countIdentifierConstant++);    
}

function detectKeywordIndentifier(){
    console.log(`The given expression:\n ${expression}\n`)
    // split into array and remove empty elements
    let newExpression = hasSeparators(separators).split(" ").filter(e => e != "");
    // console.log(newExpression)
    let keywordList = detectKeyword(keywords,newExpression);
    detectIdentifierConstant(keywordList,newExpression);
};

detectKeywordIndentifier();
let countLexeme = countIdentifierConstant + countKeywords + countSeparators;
// console.log(countIdentifierConstant,countKeywords,countSeparators,countLexeme)
console.log(`The total lexeme: ${countLexeme}`)


