var Pizza = {
  sizePizza: 0,
  typeOfPizza: [],
  slices: function(sizePizza) {
    if (sizePizza <= 11 || sizePizza >= 25) {
      return "Whoops!"
    } else
        var oneSlice = 14.1375
        var area = 3.14 * ((sizePizza/2)*(sizePizza/2))
        return Math.round(area/oneSlice)
    }
}
