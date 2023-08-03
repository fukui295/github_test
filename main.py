def on_gesture_tilt_left():
    basic.show_leds("""
        . . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . .
        """)
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_forever():
    pass
basic.forever(on_forever)
