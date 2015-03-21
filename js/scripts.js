var Pizza = {
  typeOfPizza: "",
  sizePizza: 0,
  slices: function(sizePizza) {
    if (sizePizza <= 11 || sizePizza >= 25) {
      return "Whoops!"
    } else
        var oneSlice = 14.1375;
        var area = 3.14 * ((sizePizza/2)*(sizePizza/2));
        return Math.round(area/oneSlice);
    },
  price: function(sizePizza, typeOfPizza) {
    if (typeOfPizza === "Cheese") {
      return 2.5 * Pizza.slices(sizePizza);
    } else if (typeOfPizza === "Pepperoni") {
      return 3 * Pizza.slices(sizePizza);
    } else
      alert("You have done something terrible. What did you do?");
  }
}

$(document).ready(function(event) {

  $("form#orderPizza").submit(function(event) {
    event.preventDefault();

    var newPizza = Object.create(Pizza);
    var inputtedName = $("input#name").val();
    var inputtedPizzaSize = parseInt($("input#pizzaSize").val());
    var inputtedPizzaType = $("select#pizzaType").val();
    var slices = newPizza.slices(inputtedPizzaSize);
    var cost = newPizza.price(inputtedPizzaSize, inputtedPizzaType);

    if (slices === "Whoops!") {
      alert("You have ordered a pizza either too big or too small. Please try again!");
    } else {

        newPizza.orderName = inputtedName;
        newPizza.sizePizza = inputtedPizzaSize;
        newPizza.typeOfPizza = inputtedPizzaType;

      $("div#newOrder").append(
          "<h3> Your Order, " + newPizza.orderName + "</h3>" + "<p>" +
          "Type: " + newPizza.typeOfPizza + "<br>" +
          "Size: " + newPizza.sizePizza + " inches" + "<br>" +
          "How many slices? " + slices + "<br>" + "<br>" +
          "This will cost you " + cost + " dollars" + "</p>" );
      $("p#comment").show();
      $("#pictures").show();
      $("div#orders").hide();
    }

  });
});
