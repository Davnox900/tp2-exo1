let posX = 0
led.plot(0, posX)
let direction = 1
let liste = [0, 1, 2, 3, 4]
basic.forever(function () {
    basic.pause(1000)
    led.unplot(0, posX)
    posX += direction
    if (posX >= 4) {
        direction = -1
    } else if (posX <= 0) {
        direction = 1
    }
    led.plot(0, posX)
})
