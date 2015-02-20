describe("Pizza", function() {
  describe("slices", function() {
    it("returns how many slices of pizza will be cut based on size of pizza in inches", function() {
      var testPizza = Object.create(Pizza);
      testPizza.sizePizza = 12;
      expect(testPizza.slices(testPizza.sizePizza)).to.equal(8);

      var testPizza2 = Object.create(Pizza);
      testPizza2.sizePizza = 24;
      expect(testPizza2.slices(testPizza2.sizePizza)).to.equal(32);
    });

    it("will error if inches are less than 12 or greater than 24", function() {
      var testPizza = Object.create(Pizza);
      testPizza.sizePizza = 11;
      expect(testPizza.slices(testPizza.sizePizza)).to.equal("Whoops! You have an order too large or too small.")

      var testPizza2 = Object.create(Pizza);
      testPizza2.sizePizza = 25;
      expect(testPizza2.slices(testPizza2.sizePizza)).to.equal("Whoops! You have an order too large or too small.");
    });
  });
});
