
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')


canvas.height = 576
canvas.width = 1024

const gravity = 2

ctx.fillRect(0, 0, canvas.width, canvas.height)

// keyStatus
const keys = {
    a: { pressed: false },
    d: { pressed: false },
    ArrowLeft: { pressed: false },
    ArrowRight: { pressed: false },
}


//rectangular collision 

function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x &&
        rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
        rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.isAttacking
    )
}


// collision detection for platform 

function platformCollision() {

    platforms.forEach(platform =>
    (
        player.position.y + player.height <= platform.position.y &&
        player.position.x + player.width >= platform.position.x &&
        player.position.x <= platform.position.x + platform.width && player.position.y + player.height + player.velocity.y >= platform.position.y
    )
    )
}


window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            platforms.forEach(platform => {

                if (player.position.y + player.height >= canvas.height || (player.position.y + player.height >= platform.position.y - 5 && player.position.x + player.width >= platform.position.x &&
                    player.position.x <= platform.position.x + platform.width)) {
                    player.velocity.y = -25
                }
            })
            break
        case ' ':
            player.shoot()
            break
        case 'a':
            keys.a.pressed = true
            player.lastKey = 'a'
            break
        case 'd':
            keys.d.pressed = true
            player.lastKey = 'd'
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
            enemy.lastKey = 'ArrowLeft'
            break
        case 'ArrowRight':
            keys.ArrowRight.pressed = true
            enemy.lastKey = 'ArrowRight'
            break
        case 'ArrowUp':
            if (enemy.position.y + enemy.height >= canvas.height) {
                enemy.velocity.y = -25
            }
            break
        case 'ArrowDown':
            enemy.shoot()
            break

    }
}
)

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'a':
            keys.a.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            break
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
            break
    }

})