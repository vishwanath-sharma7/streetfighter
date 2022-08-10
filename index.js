// Player
const player = new Fighter({
    position: { x: 100, y: 0 },
    velocity: { x: 0, y: 0 },
    attackBox: {
        width: 100,
        height: 50
    },
})

// enemy
const enemy = new Fighter({
    position: { x: 400, y: 100 },
    velocity: { x: 0, y: 0 },
    attackBox: {
        width: 100,
        height: 50
    },
    color: 'blue',
    offset: 50,
})

// animation loop
function animate() {
    requestAnimationFrame(animate)

    //Player movement 
    player.velocity.x = 0

    if (keys.a.pressed && player.lastKey === 'a' && player.position.x >= 5) {
        player.velocity.x = -5
    } else if (keys.d.pressed && player.lastKey === 'd' && player.position.x + player.width <= canvas.width - 4) {
        player.velocity.x = 5
    }

    // enemy movement
    enemy.velocity.x = 0

    if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft' && enemy.position.x >= 5) {
        enemy.velocity.x = -5
    } else if (
        keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight' && enemy.position.x + enemy.width <= canvas.width - 4) {
        enemy.velocity.x = 5
    }

    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)


    // update player 
    player.update()

    // update enemy
    enemy.update()
}

animate()


