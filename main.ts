input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . . # # .
        . # # . .
        `)
    basic.showString("Hello!")
})
basic.forever(function () {
	
})
