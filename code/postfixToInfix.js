function detectOperand(x)
{
    return (
      (x >= "a" && x <= "z") || (x >= "A" && x <= "Z") || (x >= "0" && x <= "9")
    );
}

function getInfix(expression)
{
    let stack = [];

    for(let value of expression)
    {
        // Push operands
        if(detectOperand(value))
        {
            stack.push(value);
            // console.log(stack)
        }

        // We assume that input is
        // a valid postfix and expressionect
        // an operator.
        else
        {
            let firstOperand = stack.pop();
            // console.log(stack)

            let secondOperand = stack.pop();
            // console.log(stack)

            stack.push("(" + secondOperand + value +
                        firstOperand + ")");
            // console.log(stack)
        }
    }

    // There must be a single element
    // in stack now which is the required
    // infix.
    // console.log(stack[stack.length-1])
    return stack[stack.length-1];
}

let expression = "A9/CD*+";
// let expression = "abc*+d+";
console.log(`The given postfix expression is: ${expression}`)
console.log(`The Infix expression is: ${getInfix(expression)}`);