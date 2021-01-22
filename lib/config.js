/**
 * Config object
 * It consists of configs for:
 *   product 
 *   Messenger
 *   denominations
 */

let config = {};
config.transaction = {
    product: null,
    amount: null,
    stage: 1
};

config.products = ["Caramel", "Hazelnut", "Organic Raw"];

config.price = {
    "Caramel": 2.50,
    "Hazelnut": 3.10,
    "Organic Raw": 2.00
};

config.denominations = ["10c", "20c", "50c", "$1", "$2"];

config.stages = [
    {
        status: "Waiting on product selection"
    }, 
    {
        status: "Waiting on coins to be inserted"
    }, 
    {
        status: "Product dispensed"
    }
];

config.messenger = {
    insertCoins: (amount, paid) => {
        return `Insert coins in any of the following denominations ${ config.denominations}. Example: Type: 10c OR $1 etc to insert\n $${paid} out of $${amount} paid`;
    },
    invalidCurrency: () => {
        return  `Invalid currency entered, allowed commands are ${ config.denominations}`;
    },
    invalidProduct: () => {
        return `Invalid product entered, allowed commands are ${[...Array(config.products.length+1).keys()].slice(1)}`;
    },
    welcome: '============\nHi there! Begin by entering your choice of chocolate bar \n[1] Caramel ­ $2.50 \n[2] Hazelnut ­ $3.10 \n[3] Organic Raw ­ $2.00. \n Press 1 OR 2 OR 3 OR \'c\' to cancel OR \'q\' to exit.',
    refund: (paid) => {
        return `======ALERT======\nAmount exceeded cost. $${paid} refunded! \nPlease retry with correct denominations\n==============`;
    },
    enjoy: (product) => {
        return `============\n${product} dispensed, enjoy!!\n============\n`;
    }
};


module.exports = config;
