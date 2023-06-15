input.onButtonPressed(Button.A, function () {
    music.playMelody("C D E F G F E D ", 120)
})
basic.showString("Hello!")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
})
