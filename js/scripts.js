var Pizza = {
  sizePizza: 0,
  slices: function(sizePizza) {
    if (sizePizza <= 11 || sizePizza >= 25) {
      return "Whoops! You have an order too large or too small."
    } else
        var oneSlice = 14.1375
        var area = 3.14 * ((sizePizza/2)*(sizePizza/2))
        return Math.round(area/oneSlice)
    }
}

$(document).ready(function(event) {

  $("form#orderPizza").submit(function(event) {
    event.preventDefault();

    var newPizza = Object.create(Pizza);
    var inputtedName = $("input#name").val();
    var inputtedPizzaSize = parseInt($("input#pizzaSize").val());
    var inputtedPizzaType = $("select#pizzaType").val();
    var slices = newPizza.slices(inputtedPizzaSize)

    newPizza.orderName = inputtedName;
    newPizza.sizePizza = inputtedPizzaSize;
    newPizza.typeOfPizza = inputtedPizzaType;

  $("div#newOrder").append("<p>" +
      "Name: " + newPizza.orderName + "<br>" +
      "Type: " + newPizza.typeOfPizza + "<br>" +
      "Size: " + newPizza.sizePizza + " inches" + "<br>" +
      "How many slices? " + slices + "</p>")


  });
});
