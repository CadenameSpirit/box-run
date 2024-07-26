enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Dead
}
namespace SpriteKind {
    export const Ground = SpriteKind.create()
    export const Cloud = SpriteKind.create()
}
function initGround () {
    scene.setBackgroundColor(9)
    ground1 = sprites.create(img`
        ...................................................................................cccc...........................................................................
        ..................................................................................c7777c..........................................................................
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc777777ccccccccccccccccc....ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cccc77777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77cccc77c77777777777777777777777c77cccc7777777777777777777777777cccc77c7777777777777c77777777777777777777777777cccc77c77777777777c77ccc77777777777777777c77ccc7777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777cccc77c7777777777777777777777777cccc7c7777777c77777777777777cc7c77777777cccc77c77777cccc77c777777777777777777c777777777777777cccc77c777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `, SpriteKind.Ground)
    ground2 = sprites.create(img`
        .....................................................cccc..................cccc...................................................................................
        ....................................................c7777c................c7777c..................................................................................
        cccccccccccccccccccccccccccccccccccccccccccccccccccc777777cccccccccccccccc777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777ccc77c77777777777777777ccc77c77777777777c77cccc77777777777777777777777777c7777777777777c77cccc7777777777777777777777777cccc77c77777777777777777777777c77cccc77
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777c77cccc777777777777777c777777777777777777c77cccc77777c77cccc77777777c7cc77777777777777c7777777c7cccc7777777777777777777777777c77cccc777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `, SpriteKind.Ground)
    ground1.setPosition(scene.screenWidth(), 120)
    ground2.setPosition(ground1.x + scene.screenWidth(), 120)
    ground1.vx = -100
    ground2.vx = -100
    ground1.z = 2
    ground2.z = 2
}
function initRaptor () {
    Box = sprites.create(assets.image`box3`, SpriteKind.Player)
    run = animation.createAnimation(ActionKind.Walking, 100)
    run.addAnimationFrame(assets.image`box3`)
    run.addAnimationFrame(assets.image`box6`)
    animation.attachAnimation(Box, run)
    jump = animation.createAnimation(ActionKind.Jumping, 200)
    jump.addAnimationFrame(assets.image`box3`)
    animation.attachAnimation(Box, jump)
    dead = animation.createAnimation(ActionKind.Dead, 200)
    dead.addAnimationFrame(assets.image`box2`)
    animation.attachAnimation(Box, dead)
    Box.z = 3
    Box.setPosition(91, 94)
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Box.y == 94 && end == 0) {
        Box.vy = -160
        animation.setAction(Box, ActionKind.Jumping)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.UntilDone)
    cactus.z = 0
    sprites.destroy(cactus)
    enemies.vx += 10
    timer.after(1000, function () {
        sprites.destroy(cactus)
        enemies.vx = 0
    })
})
function returntonermal () {
    ground1.vx = -100
    ground2.vx = -100
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    sprites.destroy(speed)
    enemies.vx += -5
    timer.after(600, function () {
        sprites.destroy(cactus)
        returntonermal()
        enemies.vx = 0
    })
})
function makeEnemie () {
    enemies = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
    Erun = animation.createAnimation(ActionKind.Walking, 100)
    Erun.addAnimationFrame(assets.image`myImage`)
    Erun.addAnimationFrame(assets.image`myImage0`)
    animation.attachAnimation(enemies, Erun)
    enemies.setScale(1, ScaleAnchor.Middle)
    enemies.z = 3
    enemies.setPosition(16, 74)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    end = 1
    animation.setAction(Box, ActionKind.Dead)
    game.over(false, effects.dissolve)
    pause(50)
})
let cloud: Sprite = null
let choice = 0
let Erun: animation.Animation = null
let speed: Sprite = null
let enemies: Sprite = null
let cactus: Sprite = null
let dead: animation.Animation = null
let jump: animation.Animation = null
let run: animation.Animation = null
let Box: Sprite = null
let ground2: Sprite = null
let ground1: Sprite = null
let end = 0
let idle = null
game.setDialogCursor(assets.image`box png`)
game.splash("Box run")
scene.setBackgroundColor(1)
initGround()
initRaptor()
makeEnemie()
info.setScore(0)
end = 0
game.showLongText("run from the enemy (press a)", DialogLayout.Top)
game.onUpdate(function () {
    if (Box.y < 94) {
        Box.ay = 400
    } else {
        Box.ay = 0
        Box.y = 94
        if (end == 0) {
            animation.setAction(Box, ActionKind.Walking)
        }
    }
})
game.onUpdateInterval(50, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(2000, function () {
    if (Math.percentChance(13)) {
        speed = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . c d 5 d c . . . . . 
            . . . b c c d 5 5 5 d c c b . . 
            . . b d d 5 5 5 5 5 5 5 d d b . 
            . . . b c c d 5 5 5 d c c b . . 
            . . . . . . c d 5 d c . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ground1.vx / 4, 0)
        speed.y = 94
        speed.setKind(SpriteKind.Food)
        speed.z = 1
    }
})
game.onUpdateInterval(1000, function () {
    ground1.vx += -1
    ground2.vx += -1
})
game.onUpdateInterval(1000, function () {
    choice = randint(0, 4)
    if (choice == 0) {
        cactus = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ...........ccccccc..............
            .........ccc777777cc............
            .........c777c77777ccc..........
            .......cc777c77c77777cc.........
            .......c777c777777c777cc........
            ......c77c7777777777777c........
            ......c77777777777777777c.......
            .....c777777777777777777cc......
            .....c7777777777777777777c......
            ....c77777777777777773777cc.....
            ....c777777777777777353777c.....
            ...c7777777777777777737777c.....
            ...c7777777777777777777777c.....
            ...c7777777777777777777777cc....
            ...c77777777777777777777777c....
            `, ground1.vx, 0)
        tiles.setWallAt(cactus.tilemapLocation(), true)
        cactus.y = 94
        cactus.z = 1
    } else if (choice == 1) {
        cactus = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ............ccccccc.............
            ...........cc77777ccc...........
            ..........c777777777cc..........
            .........cc7777c777777c.........
            .........c777777777777cc........
            ........cc7c77777777777cc.......
            ........c77c7777777cc77cc.......
            .......c7777777777777777cc......
            ......cc77c77777777777777c......
            ......c777777777777777777c......
            ......c777777777777777777c......
            ......c777777277777777777c......
            ......c777772527777777777c......
            .....cc777777277777777777c......
            .....cc777777777777777777c......
            .....cc777777777777777777c......
            .....cc777777777777777777c......
            .....c7777777777777777777c......
            .....c7777777777777777777c......
            .....c7777777777777777777c......
            .....c7777777777777777777c......
            `, ground1.vx, 0)
        tiles.setWallAt(cactus.tilemapLocation(), true)
        cactus.y = 94
        cactus.z = 1
    } else if (choice == 2) {
        cactus = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ........cccccccccc..............
            ......ccc777777777ccccccc.......
            .....cc77777777777777777cc......
            ...ccc777777777cc777c7777cc.....
            ..cc777ccc7777777777777777cc....
            .cc77777777777777777777c777c....
            .c77777777777377777777777777c...
            .c77777777773537777777777777c...
            c777777777777377777777177777c...
            c777777777777777777771517777c...
            c777777777777777777777177777c...
            c777777777777777777777777777c...
            c777777777777777777777777777c...
            `, ground1.vx, 0)
        tiles.setWallAt(cactus.tilemapLocation(), true)
        cactus.y = 94
        cactus.z = 1
    }
})
game.onUpdateInterval(1500, function () {
    if (Math.percentChance(40)) {
        cloud = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................bbbbbbb.........
            ...............bb11111b.........
            .............bbb111111bbb.......
            .............b1111111111bbbb....
            .............b1111111111111b....
            ..........bbbb1111111111111bbb..
            .........bb111111111111111111b..
            .....bbbbb1111111111111111111bb.
            .....b111111111111111111111111b.
            .bbbbb11b1111111111111111111111b
            bbb11111bbbbbbbbbbbbbbbbbbbbbbbb
            ..bbbbbbb.......................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `, ground1.vx / 4, 0)
        cloud.y = randint(20, 60)
        cloud.setKind(SpriteKind.Cloud)
        cloud.z = 1
    }
})
forever(function () {
    if (ground2.x < -1 * (scene.screenWidth() / 2)) {
        ground2.x = ground1.x + scene.screenWidth()
    }
    animation.setAction(enemies, ActionKind.Walking)
})
forever(function () {
    if (ground1.x < -1 * (scene.screenWidth() / 2)) {
        ground1.x = ground2.x + scene.screenWidth()
    }
})
