
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



window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            if (player.position.y + player.height >= canvas.height) {
                player.velocity.y = -25
            }
            break
        case ' ':
            player.attack()
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
            enemy.attack()
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