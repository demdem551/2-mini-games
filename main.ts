input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(1)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.pause(1)
        basic.showLeds(`
            . . . . #
            # # . # .
            # # # . .
            # # . # .
            . . . . #
            `)
    }
    basic.showNumber(randint(1, 3))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Ok, here we go")
    basic.showNumber(randint(1, 6))
})
