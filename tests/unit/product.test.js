const product = require("../../lib/product");
const transactionService = require("../../lib/transaction");


describe("Test product.js", () => {
    let transaction =  {
        product: null,
        amount: null,
        stage: 1
    };

    it("should return Caramel ", () => {
        product.set(transaction, 1);
        expect(transaction.product).toEqual("Caramel");
    });

    it("should return stage 1", () => {
        product.set(transaction, 1);
        expect(transactionService.stage(transaction)).toEqual(1);
    });

    it("should return valid false", () => {
        const res = product.set(transaction, 4);
        expect(res.valid).toEqual(false);
        expect(res.message).toEqual("Invalid product entered, allowed commands are 1,2,3");
    });
});