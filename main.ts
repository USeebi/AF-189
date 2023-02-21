let Movement = 0
basic.forever(function () {
    Movement = pins.analogReadPin(AnalogPin.P10)
    if (Movement > 800) {
        basic.showIcon(IconNames.Surprised)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    basic.showIcon(IconNames.Happy)
})
