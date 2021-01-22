const config = require("./config");
const validation = require("./validation");
const transactionService = require("./transaction");

/**
 * Sets production selection
 * @param {number} currency   
 * @returns res valid / invalid and if invalid a message
 * @public
 */

const insert = (transaction, currency) => {
    const res = validation.tender(config, currency);
    if(res.valid){
        transactionService.updateAmount(transaction, currency);

        // Check total amount inserted equal to required amount
        if(transaction.amount === config.price[transaction.product]) {
            res.message = config.messenger.enjoy(transaction.product);
            res.reset = true;
        } else if (transaction.amount > config.price[transaction.product]) {
            // refund - more coins inserted
            res.message = config.messenger.refund(transaction.amount);
            res.reset = true;
        } else {
            res.message = config.messenger.insertCoins(config.price[transaction.product], transaction.amount);
        }
    } 
    
    return res;
}

module.exports = {
    insert
}