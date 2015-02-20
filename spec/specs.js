describe("Pizza", function() {
  describe("slices", function() {
    it("returns how many slices of pizza will be cut based on size of pizza in inches", function() {
      var testPizza = Object.create(Pizza);
      testPizza.sizePizza = 12
      expect(testPizza.slices(12)).to.equal(8);

      var testPizza2 = Object.create(Pizza);
      testPizza2.sizePizza = 24
      expect(testPizza2.slices(24)).to.equal(32)
    });
  });
});
