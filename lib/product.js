const config = require("./config");
const validation = require("./validation");
const transactionService = require("./transaction");

/**
 * Sets production selection
 * @param {number} productId   
 * @returns res valid / invalid and if invalid a message
 * @public
 */

const set = (transaction, productIdx) => {
    const res = validation.product(config, productIdx);
    if(res.valid){
        transactionService.updateProduct(transaction, productIdx);
        res.message = config.messenger.insertCoins(config.price[transaction.product], 0);
    } 
    
    return res;
}
module.exports = {
    set
}