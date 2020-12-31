controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (scene.backgroundImage().getPixel(PlayerSprite.x, PlayerSprite.bottom) != 0) {
        PlayerSprite.vy = -100
    }
})
function MoveCursor () {
    if (controller.player2.isPressed(ControllerButton.Left)) {
        CursorX += -0.7
    } else if (controller.player2.isPressed(ControllerButton.Right)) {
        CursorX += 0.7
    } else if (controller.player2.isPressed(ControllerButton.Up)) {
        CursorY += -0.7
    } else if (controller.player2.isPressed(ControllerButton.Down)) {
        CursorY += 0.7
    }
}
let PlayerSprite: Sprite = null
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ........................................eee.....................................................................................................................
    ......................................eeeeeee...................................................................................................................
    .....................................eeeeeeeeee.................................................................................................................
    .....................................eeeeeeeeeeee...............................................................................................................
    .....eee..............................eeeeeeeeeeee..............................................................................................................
    ...eeeeeeeeeeeee........................eeeeee..................................................................................................................
    ..eeeeeeeeeeeeeeeee.............................................................................................................................................
    ..eeeeeeeeeeeeeeeeeeeee.........................................................................................................................................
    ..eeeeeeeeeeeeeeeeeeeeeee.......................................................................................................................................
    ...eeeeeeeeeeeeeeeeeeeeeeeeeeee.................................................................................................................................
    ...eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..............................................................................................................................
    ....eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..................................................................................................................
    ....eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee................................................................................................................
    .....eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..............................................................................................................
    .......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee............................................................................................................
    ........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.........................................................................................................
    .........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........................................................................................................
    ...........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......................................................................................................
    ...........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....................................................................................................
    .............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....................................................................................................
    .............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...................................................................................................
    ..............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..................................................................................................
    ..............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..............................................................................................ee.
    ................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........................................................................................eeeeeee
    ................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..................................................................................eeeeeeeeeeee
    ................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.........................................................................eeeeeeeeeeeeeeeeeeee
    .................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee................................................................eeeeeeeeeeeeeeeeeeeeeeeeeee
    ..................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...............................................................eeeeeeeeeeeeeeeeeeeeeeeeeeee
    .....................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee............................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee............................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ...........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.........................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .....................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .......................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ........................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeee......................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .........................................eeeeeeeeeeeeeeeeeeeeeeeeeeee.....................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .............................................eeeeeeeeeeeeeeeeeeeeee......................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ...............................................eeeeeeeeeeeeeee.........................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .................................................eeeeeeee............................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ....................................................................................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ..........................................................................eeeeeeee................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeee....................................................................eeeeeeeeeeee.............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeee.................................................................eeeeeeeeeeeeeee..........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeee...............................................................eeeeeeeeeeeeeeeeeee......................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeee............................................................eeeeeeeeeeeeeeeeeeeee............eeeeeeee.eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeee...........................................................eeeeeeeeeeeeeeeeeeeeeeee.........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeee.........................................................eeeeeeeeeeeeeeeeeeeeeeeeee......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeee.......................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeee.....................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeee................eeeeeeeeee.................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeee...........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeee....eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
// Dave
// Jayden
// Caroline
// Soren
// Nicole
// Alex
// Hendrick
// Jeremiah
let Characters = [
img`
    7 7 7 7 7 
    7 7 1 1 1 
    1 7 1 1 1 
    1 1 f 1 f 
    1 1 1 1 1 
    . 1 f f . 
    d 7 7 7 . 
    d 7 d 7 . 
    d 7 7 7 . 
    . 7 . 7 . 
    `,
img`
    . f f f . 
    f f f c f 
    f c c a a 
    f c d a d 
    f c c c a 
    . a c c . 
    b f f f . 
    b f b f . 
    b f f f . 
    . f . f . 
    `,
img`
    . 2 2 2 2 
    2 d d d d 
    2 d d d d 
    2 d 8 d 8 
    2 d d d d 
    2 d c c . 
    2 3 3 3 . 
    a 3 a 3 . 
    a 3 3 3 . 
    . 3 . 3 . 
    `,
img`
    . f f f f 
    e e e e e 
    e e e e e 
    e e f e f 
    e e e e e 
    . e f f . 
    2 5 5 5 . 
    2 5 2 5 . 
    2 5 5 5 . 
    . 5 . 5 . 
    `,
img`
    . a a a a 
    a b b b b 
    a b a b b 
    b a f b f 
    b b b b b 
    . b f f . 
    6 8 8 8 . 
    6 8 6 8 . 
    6 8 8 8 . 
    . 8 . 8 . 
    `,
img`
    . d d d d 
    d d 4 4 d 
    d d 4 4 4 
    d 4 f 4 f 
    d 4 4 4 4 
    . 4 f f . 
    d 1 1 1 . 
    d 1 d 1 . 
    d 1 1 1 . 
    . 1 . 1 . 
    `,
img`
    . 1 1 1 1 
    d d d d d 
    d d d d d 
    d d f d f 
    d d d d d 
    . d b b . 
    7 8 8 8 . 
    7 8 7 8 . 
    7 8 8 8 . 
    . 8 . 8 . 
    `,
img`
    . d d d d 
    f f f f f 
    f f f f f 
    f f b f b 
    f f f f f 
    . f b b . 
    d c c c . 
    d c d c . 
    d c c c . 
    . c . c . 
    `
]
scene.setBackgroundColor(9)
PlayerSprite = sprites.create(img`
    . 1 1 1 1 
    d d d d d 
    d d d d d 
    d d f d f 
    d d d d d 
    . d b b . 
    7 8 8 8 . 
    7 8 7 8 . 
    7 8 8 8 . 
    . 8 . 8 . 
    `, SpriteKind.Player)
PlayerSprite.ay = 300
PlayerSprite.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(PlayerSprite, 50, 0)
let Cursor = sprites.create(img`
    . f . 
    f f f 
    . f . 
    `, SpriteKind.Player)
controller.player2.moveSprite(Cursor)
let CursorX = 10
let CursorY = 0
let Items = [
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
""
]
let AmountOfItems = [
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0
]
let InventoryBottom = sprites.create(img`
    .ffffffffffffffff.ffffffffffffffff.ffffffffffffffff.ffffffffffffffff.ffffffffffffffff.ffffffffffffffff.ffffffffffffffff.ffffffffffffffff.ffffffffffffffff.
    .f22222222222222f.f22222222222222f.f22222222222222f.f22222222222222f.f22222222222222f.f22222222222222f.f22222222222222f.f22222222222222f.f22222222222222f.
    .f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.
    .f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.
    .f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.
    .f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.
    .f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.
    .f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.
    .f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.
    .f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.
    .f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.
    .f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.
    .f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.
    .f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.f24444444444442f.
    .f22222222222222f.f22222222222222f.f22222222222222f.f22222222222222f.f22222222222222f.f22222222222222f.f22222222222222f.f22222222222222f.f22222222222222f.
    .ffffffffffffffff.ffffffffffffffff.ffffffffffffffff.ffffffffffffffff.ffffffffffffffff.ffffffffffffffff.ffffffffffffffff.ffffffffffffffff.ffffffffffffffff.
    `, SpriteKind.Player)
InventoryBottom.bottom = 119
game.onUpdate(function () {
    if (scene.backgroundImage().getPixel(PlayerSprite.x, PlayerSprite.bottom) == 14) {
        PlayerSprite.vy = 0
    }
    if (scene.backgroundImage().getPixel(PlayerSprite.x, PlayerSprite.bottom - 1) == 14) {
        PlayerSprite.y += -1
        PlayerSprite.vy = 0
    }
    if (scene.backgroundImage().getPixel(PlayerSprite.x, PlayerSprite.top) == 14) {
        if (PlayerSprite.vx < 0) {
            PlayerSprite.x += 1
        } else if (PlayerSprite.vx > 0) {
            PlayerSprite.x += -1
        }
        PlayerSprite.vy = 0
    }
    if (scene.backgroundImage().getPixel(PlayerSprite.right, PlayerSprite.y) == 14) {
        PlayerSprite.vy = 0
        PlayerSprite.x += -1
    }
    if (scene.backgroundImage().getPixel(PlayerSprite.left, PlayerSprite.y) == 14) {
        PlayerSprite.vy = 0
        PlayerSprite.x += 1
    }
})
game.onUpdate(function () {
    MoveCursor()
    if (CursorX > 24) {
        CursorX = 24
    } else if (CursorX < -24) {
        CursorX = -24
    }
    if (CursorY > 24) {
        CursorY = 24
    } else if (CursorY < -24) {
        CursorY = -24
    }
    if (controller.A.isPressed()) {
        for (let index = 0; index <= 2; index++) {
            spriteutils.drawCircle(
            scene.backgroundImage(),
            Cursor.x - 1,
            Cursor.y - 1,
            index + 1,
            0
            )
            scene.backgroundImage().fillRect(Cursor.x - 2, Cursor.y - 2, 3, 3, 0)
        }
    }
    Cursor.setPosition(PlayerSprite.x + CursorX, PlayerSprite.y + CursorY)
})
