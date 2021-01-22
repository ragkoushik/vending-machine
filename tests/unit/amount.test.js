const amount = require("../../lib/amount");

describe("Test amount.js", () => {
    let transaction =  {
        product: "Caramel",
        amount: null,
        stage: 1
    };
    it("should return $1 ", () => {
        amount.insert(transaction, "$1");
        expect(transaction.amount).toEqual(1);
    });

    it("should return $3", () => {
        transaction =  {
            product: "Caramel",
            amount: 1,
            stage: 1
        };
        amount.insert(transaction, "$2");
        expect(transaction.amount).toEqual(3);
    });

    it("should return $3.1", () => {
        transaction =  {
            product: "Caramel",
            amount: 3,
            stage: 1
        };
        amount.insert(transaction, "10c");
        expect(transaction.amount).toEqual(3.1);
    });

    it("should return reset and refund", () => {
        transaction =  {
            product: "Caramel",
            amount: 3.1,
            stage: 1
        };
        const res = amount.insert(transaction, "$2");
        expect(res.reset).toEqual(true);
    });

    it("should return reset and refund", () => {
        transaction =  {
            product: "Caramel",
            amount: 3.1,
            stage: 1
        };
        const res = amount.insert(transaction, "$3");
        expect(res.message).toEqual("Invalid currency entered, allowed commands are 10c,20c,50c,$1,$2");
    });
});