var Pizza = {
  sizePizza: 0,
  slices: function(sizePizza) {
    var oneSlice = 14.1375
    var area = 3.14 * ((sizePizza/2)*(sizePizza/2))
    return Math.round(area/oneSlice)
  }
}
