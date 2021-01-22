const transactionService = require("./transaction");
const config = require("./config");

/**
 * validates a product
 * @param {object} config   
 * @param {number} productIdx
 * @returns res valid / invalid and if invalid a message
 * @public
 */

const product = (transaction, productIdx) => {
    if ( isNaN(Number(productIdx)) || !config.products[Number(productIdx) - 1]) {
        return {
            valid: false,
            message: config.messenger.invalidProduct()
        }
    }

    return {
        valid: true
    }
}

/**
 * validates if an inserted coin is a valid tender
 * @param {object} config   
 * @param {string} currency
 * @returns res valid / invalid and if invalid a message
 * @public
*/
const tender = (transaction, currency) => {
    if ( config.denominations.indexOf(currency) <= -1 ) {
        return {
            valid: false,
            message: config.messenger.invalidCurrency()
        }
    }

    return {
        valid: true
    }
}

module.exports = {
    product,
    tender
};