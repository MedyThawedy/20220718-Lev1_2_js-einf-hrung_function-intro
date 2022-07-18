
// Paramater
function intro2(paramName) {
    let varName = 'SuperCoder';
    console.log('Hi, ' + varName + '. Mein Name ist ' + paramName + ' .');
    return ('Hi, ' + varName + '. Mein Name ist ' + paramName + ' .');
}


let output1 = intro2('Slim Shady');
output1 = '<p>' + output1 + '</p>';
document.getElementById("withParam").innerHTML = output1;

/*    Solution        */

// Argument
function intro2() {
    let varName = 'SuperCoder';
    let arg = arguments[0];
    console.log('Hi, ' + varName + '. Mein Name ist ' + arg + ' .');
    return ('Hi, ' + varName + '. Mein Name ist ' + arg + ' .');
}

let output2 = intro2('Slim Shady');
output2 = '<p>' + output2 + '</p>';
document.getElementById("withArgument").innerHTML = output2;