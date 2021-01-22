/**
 * vending machine app. Master module that starts the simmulator 
 * app. It requires the vending machine instance and uses its methods to
 * operate it.
 */

/**
 * Declare and initialize variables
 */
const os = require("os"), 				// to have platform independent EOL
    stdin = process.stdin,				// standard input handle
    stdout = process.stdout,				// standard output handle
    stderr = process.stderr,				// standard error handle
    EOL = os.EOL,
    product = require("./product"),
    amount = require("./amount"),
    transactionService = require("./transaction"),
    config = require('./config');

stdin.setEncoding('utf8');
process.title = "Vending machine Simulator"; // Terminal title

let transaction = config.transaction;
// read stdin
// this piece of code is for reading user's input from CLI
stdin.on('data', (data) => {
    outputMesage(data);
});

console.log('\x1b[0m','Interact using CLI' );

/**
 * This parser encapsulates the task of reading a user's input, from CLI
 *
 * @param  {String} cmd A command from a user
 * @return {Error|String|Object} Returns either an Error instance, or a message string
 * @private
 */
const processCmd = (cmd) => {
    let res;
    if(typeof cmd === 'string' && cmd.toUpperCase() === "REPORT"){
        res = transactionService.status(transaction);
    } else if (typeof cmd === 'string' && cmd.toUpperCase() === "C"){
        transactionService.reset(transaction);
        vendingMachine.run();
    } else if (cmd && cmd !== "" && transactionService.stage(transaction) === 1) {
        res = product.set(transaction, cmd);
    } else if (cmd && cmd !== "" && transactionService.stage(transaction) === 2) {
        res = amount.insert(transaction, cmd);
    } 
    return res;
};

/**
 * Sends a response from processCmd() to stdout or stderr
 * @param  {Error|String|Object} either an Error instance, or a message string,
 * @return {undefined}      no return. the func only sends to stdout or stderr
 */
const outputMesage = (data) => {
    let res;
    const _data = data.trim();

    if (_data.match(/(q|quit|exit)/i))
        process.exit();

    res = processCmd(_data);

    if (res && res.message) {
        stdout.write(`${res.message + EOL}> `);
    } else if (typeof res == 'string') {
        stdout.write(`${res + EOL}> `);
    } else {
        stdout.write('> ');
    }

    if(res && res.reset){
        transactionService.reset(transaction);
        vendingMachine.run();
    }
};


/**
 * vendingMachine class
 * It has only one static method .run() to start the app
 */
const vendingMachine = () => { };

/**
 * @static
 */
vendingMachine.run = () => {
    stdout.write(`${ config.messenger.welcome + EOL}> `);
    stdin.resume();
};


module.exports = {
    vendingMachine,
    outputMesage,
    processCmd
};