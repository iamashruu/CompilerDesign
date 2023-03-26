function precedence (c) {
    if (c == '^') {
        return 3;
    }
    else if (c == '/' || c == '*') {
        return 2;
    }
    else if (c == '+' || c == '-') {
        return 1;
    }
    else {
        return 0;
    }
}

function isOperand (c) {
	if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')) {
		return 1;
	}
	return 0;
}

function infixToPostfix (infix) {
    let stack = []; 
    let postFix = "";

    for (let i = 0; i < infix.length; i++) {
        if (isOperand(infix[i])) {
            postFix += infix[i];
        }
        else if (infix[i] == '(') {
            stack.push('(');
        }
        else if (infix[i] == ')') {
            console.log(infix[i])

            while (stack[stack.length - 1] != '(') {
                console.log(stack)
                postFix += stack[stack.length - 1];
                console.log(postFix)
                console.log(stack)

                stack.pop();
            }
            console.log(stack)

            stack.pop();
            console.log(stack)
        }
        else {
            while (stack.length != 0 && precedence(infix[i]) <= precedence(stack[stack.length - 1])) {
                postFix += stack[stack.length - 1];
                console.log(stack)

                stack.pop();
                console.log(stack)

            }
            stack.push(infix[i]);
            console.log(stack)
        }
    }

    while (stack.length != 0) {
        postFix += stack[stack.length - 1];
        console.log("last stack")
        stack.pop();
    }
    return postFix;
}

// let infix = "(A+B)*(c/d)+2";
let infix = "(X-Y)*(P/5)+Z";
console.log(`The given infix expression is: ${infix}`);
console.log(`The given postfix expression is: ${infixToPostfix(infix)}`);
