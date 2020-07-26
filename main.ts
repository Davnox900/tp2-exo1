let posY = 0
led.plot(0, posY)
let direction = 1
let liste = [0, 1, 2, 3, 4]
basic.forever(function () {
    basic.pause(1000)
    led.unplot(0, posY)
    posY += direction
    if (posY >= 4) {
        direction = -1
    } else if (posY <= 0) {
        direction = 1
    }
    led.plot(0, posY)
})
