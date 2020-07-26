posX = 0
posX = 2
led.plot(posX, 0)
direction = 1

def on_forever():
    global posX, direction
    basic.pause(1000)
    led.unplot(posX, 0)
    posX += direction
    if posX >= 4:
        direction = -1
    elif posX <= 0:
        direction = 1
    led.plot(posX, 0)
basic.forever(on_forever)
