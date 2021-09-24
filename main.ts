let projectile: Sprite = null
let mushroom = sprites.create(img`
    . . . . b b b b . . . . . . . . 
    . . . b 3 3 3 3 b b b b . . . . 
    . . b b 3 3 3 3 3 1 1 b b c c . 
    . . b 1 1 3 3 3 3 3 1 1 3 3 c c 
    . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
    . . c 3 3 3 3 3 3 3 c c c b b f 
    . c 3 3 3 3 3 b b b b c c c b f 
    c 3 3 3 3 b b d d d d d c c b f 
    c 3 3 c b d d d d d d c d c c . 
    f 3 c c c d d c d d d c d b c . 
    f b c c c d d d c d d d d d f . 
    f b c c c d d d d d b b b d f . 
    f f b b c b d d d d d d d c . . 
    . f f f f b c c d d d d f f . . 
    . . f b d d b c c f f b b f f . 
    . . f d d d b . . f f b b b f . 
    `, SpriteKind.Player)
controller.moveSprite(mushroom)
scene.setBackgroundColor(3)
mushroom.setStayInScreen(true)
effects.starField.startScreenEffect()
info.setScore(0)
info.startCountdown(10)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, 50, 0)
    projectile.setPosition(0, 0)
})
