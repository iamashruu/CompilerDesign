let operators = {
    '+' :'addition',
    '-' :'subtraction',
    '*' :'multiplication',
    '/' :'division',
    '%' :'modulo',
    '>' :'greater than',
    '<' :'lesser than',
    '=' :'assignment',
    '++':'increment',
    '--':'decrement',
    '<=':'less or equal',
    '>=':'greater or equal',
    '==':'equal',
    '!=':'not equal',
    '&&':'logical AND' ,
    '||':'logical OR',
    '!' :'logical NOT',
    '^' :'logical XOR',
    '?:':'ternary operator',
    '+=': 'assignment addition',
    '-=': 'assignment subtraction',
    '/=': 'assignment division',
    '*/': 'assignment multiplication',
    '**': 'exponential'
};

function detectOperator(expression,operators)
{   
    console.log(`The given expression:\n${expression}\n`)
    let double = ['!=','--','++','<=','>=','==','&&','||','+=','-=','/=','*=','**'];
    
    for(let dup of double){
        if(expression.includes(dup)){
            expression = expression.replace(`${dup}`,'');
            console.log(`${dup} is ${operators[dup]} operator`);
        }          
    }
    

    if(expression.includes('?'&&':')){
        expression = expression.replace('?','').replace(':','');
        console.log(`?: is ternary operator`);
    } 
    
    for(let operator in operators){
        let hasOperator = expression.includes(operator);
        if(hasOperator){
            console.log(`${operator} is ${operators[operator]} operator`);
        }
    } 
}
// directly run in command line or browser console
let expression = "if(!0 || a+= =b && a!=b ^ c){ a=(b+c)/(a-b)*(a^c); a<=b?a++:a>=?b--:c%a;}"
// let expression = "if a>=b?5:10;"

//takes input and runs only in browser console
// let expression = prompt("Enter the expression:");
detectOperator(expression,operators)