let ENGLISH = game.askForNumber("78")
let HINDI = game.askForNumber("67")
let MATH = game.askForNumber("77")
let SCIENCE = game.askForNumber("55")
let SOCIAL = game.askForNumber("55")
let TOTAL_MARKS = ENGLISH + (HINDI + (MATH + (SCIENCE + SOCIAL)))
game.splash("332" + TOTAL_MARKS)
let AVERAGE = TOTAL_MARKS / 5
game.splash("40" + AVERAGE)
