const transactionService = require("../../lib/transaction");

describe("Test transaction.js",  () => {
    it("status should return Waiting on product selection ", () => {
        let transaction =  {
            product: "Caramel",
            amount: null,
            stage: 1
        };
        expect(transactionService.status(transaction)).toEqual("Waiting on product selection.");
    });

    it("status should return Waiting on product selection ", () => {
        let transaction =  {
            product: "Caramel",
            amount: null,
            stage: 2
        };
        expect(transactionService.status(transaction)).toEqual("Waiting on coins to be inserted.");
    });

    it("stage should return 1 ", () => {
        let transaction =  {
            product: "Caramel",
            amount: null,
            stage: 1
        };
        expect(transactionService.stage(transaction)).toEqual(1);
    });

    it("should reset transaction", () => {
        let transaction =  {
            product: "Caramel",
            amount: null,
            stage: 1
        };
        expect(transactionService.reset(transaction)).toEqual(expect.objectContaining({
            product: null,
            amount: null,
            stage: 1
        }));
    });
});