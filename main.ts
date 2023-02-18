input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
basic.forever(function () {
    if (input.lightLevel() < 5) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        if (input.lightLevel() > 150) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else {
            if (input.lightLevel() > 100) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    # # # # #
                    `)
            } else {
                if (input.lightLevel() > 60) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        # # # # #
                        # # # # #
                        `)
                } else {
                    if (input.lightLevel() > 40) {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            # # # # #
                            # # # # #
                            # # # # #
                            `)
                    } else {
                        if (input.lightLevel() > 20) {
                            basic.showLeds(`
                                . . . . .
                                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
                                `)
                        } else {
                            if (input.lightLevel() > 10) {
                                basic.showLeds(`
                                    # # # # #
                                    # # # # #
                                    # # # # #
                                    # # # # #
                                    # # # # #
                                    `)
                            }
                        }
                    }
                }
            }
        }
    }
})
