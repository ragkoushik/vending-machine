const validation = require("../../lib/validation");
const config = require("../../lib/config");

describe("Test product", () => {
    it("should return valid false ", () => {
        let transaction = {
            product: null,
            amount: null,
            stage: 1
        };
        
        expect(validation.product(transaction, 4).valid).toEqual(false);
    });

    it("should return valid true", () => {
        transaction = {
            product: null,
            amount: null,
            stage: 1
        };
        expect(validation.product(transaction, 1).valid).toEqual(true);
    });
});

describe("Test tender", () => {
    it("should return valid false ", () => {
        transaction = {
            product: "Hazelnut",
            amount: null,
            stage: 2
        };
        expect(validation.tender(transaction, '$5').valid).toEqual(false);
    });

    it("should return valid true", () => {
        transaction = {
            product: "Hazelnut",
            amount: null,
            stage: 2
        };
        expect(validation.tender(transaction, '$1').valid).toEqual(true);
    });
});