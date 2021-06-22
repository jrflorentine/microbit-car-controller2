function control_fun () {
    if (input.rotation(Rotation.Pitch) > 90) {
        speed = 90
    } else if (input.rotation(Rotation.Pitch) < -90) {
        speed = -90
    }
    speed = Math.map(input.rotation(Rotation.Pitch), -90, 90, 0, 5)
    if (input.rotation(Rotation.Roll) > 90) {
        angle = 90
    } else if (input.rotation(Rotation.Roll) < -90) {
        angle = -90
    }
    angle = Math.map(input.rotation(Rotation.Roll), -90, 90, 0, 5)
    if (speed == 2) {
        controller = "stop"
    } else if (speed > 2 && angle == 2) {
        controller = "forward"
    } else if (speed > 2 && angle > 2) {
        controller = "right"
    } else if (speed > 2 && angle < 2) {
        controller = "left"
    } else if (speed < 2) {
        controller = "back"
    } else {
        controller = "stop"
    }
}
let controller = ""
let speed = 0
let angle = 0
radio.setGroup(1)
angle = 0
speed = 0
controller = "stop"
basic.forever(function () {
    control_fun()
    radio.sendString(controller)
    led.plot(angle, speed)
    basic.pause(10)
    basic.clearScreen()
})
