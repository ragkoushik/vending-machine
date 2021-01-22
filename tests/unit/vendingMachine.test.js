const vendingMachine = require("../../lib/vendingMachine");

describe("Test vendingMachine.js",  () => {
    it("should valid false ", async (done) => {
        await expect(vendingMachine.processCmd('test').valid).toEqual(false);
        done();
    });

    it("should valid true ", async (done) => {
        await expect(vendingMachine.processCmd("1").valid).toEqual(true);
        done();
    });
});