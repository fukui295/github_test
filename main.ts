input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . .
        `)
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
