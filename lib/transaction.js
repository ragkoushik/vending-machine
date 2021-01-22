const config = require("./config");

/**
 * Report status vending machine
 * @param {object} transaction   
 * @return {string}   status of the machine
 */
const status = (transaction) => {
    const stage = transaction.stage - 1;
    return `${config.stages[stage].status}.`;
};

/**
 * Sets production selection
 * @param {object} transaction   
 * @param {number} productIdx   
 * @return {object}      transaction
 */
const updateProduct = (transaction, productIdx) => {
    transaction.product = config.products[ productIdx -1 ];
    transaction.stage = transaction.stage < config.stages.length - 1 ? transaction.stage + 1 : 1;
    return transaction;
} 

/**
 * Sets production selection
 * @param {object} transaction   
 * @param {string} currency   
 * @return {object}      transaction 
 */
const updateAmount = (transaction, currency) => {
    if(currency.indexOf('c') > -1){
        transaction.amount = transaction.amount + Number(currency.split('c')[0]) / 100;
    } else if (currency.indexOf('$') > -1){
        transaction.amount = transaction.amount + Number(currency.split('$')[1]);
    }

    if(transaction.amount === config.price[transaction.product]) {
        transaction.stage = transaction.stage < config.stages.length - 1 ? transaction.stage + 1 : 1;
    }

    return transaction;
}

/**
 * returns current stage
 * @param {object} transaction   
 * @return {string}      stage 
 */
const stage = (transaction) => {
    return transaction.stage;
}

/**
 * Reset vending machine
 * @return {transaction}      returns resetted transaction
 */
const reset = (transaction) => {
    transaction = {
        product: null,
        amount: null,
        stage: 1
    };

    return transaction;
};

module.exports = {
    updateAmount,
    updateProduct,
    status,
    stage,
    reset
}