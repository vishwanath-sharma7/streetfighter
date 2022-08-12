// Player
const player = new Fighter({
    position: { x: 100, y: 0 },
    velocity: { x: 0, y: 0 },

})

// enemy
const enemy = new Fighter({
    position: { x: 400, y: 100 },
    velocity: { x: 0, y: 0 },
    color: 'blue',
    offset: 50,
})

// platform 
const platforms = [new Platform({
    position: { x: 400, y: 500 },
    width: 200,
    height: 30
}),
new Platform({
    position: { x: 600, y: 400 },
    width: 200,
    height: 30
})

]





// animation loop
function animate() {




    requestAnimationFrame(animate)


    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // update player 
    player.update()

    // draw platform
    platforms.forEach(platform => platform.draw())

    //platform collision 

    platforms.forEach(platform => {

        if (
            player.position.y + player.height <= platform.position.y &&
            player.position.x + player.width >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width && player.position.y + player.height + player.velocity.y >= platform.position.y

        ) {
            player.velocity.y = 0
        }
    }
    )
    //Player movement 
    player.velocity.x = 0

    if (keys.a.pressed && player.lastKey === 'a' && player.position.x >= 100) {
        player.velocity.x = -5
    } else if (keys.d.pressed && player.lastKey === 'd' && player.position.x <= 400) {
        player.velocity.x = 5
    } else {
        if (keys.d.pressed) {
            platforms.forEach(platform =>
                platform.position.x -= 5
            )
        } else if (keys.a.pressed) {
            platforms.forEach(platform =>
                platform.position.x += 5
            )
        }
    }

    // enemy movement
    enemy.velocity.x = 0

    if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft' && enemy.position.x >= 5) {
        enemy.velocity.x = -5
    } else if (
        keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight' && enemy.position.x + enemy.width <= canvas.width - 4) {
        enemy.velocity.x = 5
    }

    // enemy AI
    const randomness = Math.floor(Math.random() * 10)
    if (player.isAttacking && rectangularCollision({ rectangle1: player, rectangle2: enemy })) {
        if (randomness > 6) {
            enemy.velocity.y = -30
        }
    }
    if (randomness * 10 >= 80 && enemy.position.x - player.position.x < 100) {
        if (randomness % 2 === 0 && player.velocity.x <= 2) {

            enemy.shoot()
        }
    }

    if (randomness > 5) {
        enemy.velocity.x = -3
    } else (
        enemy.velocity.x = 3
    )
    if (keys.a.pressed && player.position.x >= canvas.width / 3) {
        if (randomness >= 8) {
            enemy.velocity.x = -10
        }
    }
    if ((enemy.position.x + enemy.width >= canvas.width - 100) || (enemy.position.x + enemy.velocity.x <= 300)) {
        enemy.velocity.x = 0
    }
    if (keys.d.pressed) {
        if (player.position.x > canvas.width / 3 && enemy.position.x >= 500) {
            enemy.velocity.x -= 5
        }
    }






    // update enemy
    // enemy.update()

    // detect for collision
    if (rectangularCollision({ rectangle1: player, rectangle2: enemy })) {
        enemy.takeHit()
        player.isAttacking = false
        console.log(`enemy health: ${enemy.health}`)
    }

    if (rectangularCollision({ rectangle1: enemy, rectangle2: player })) {
        player.takeHit()

        enemy.isAttacking = false
        console.log(`player health: ${player.health}`)
    }






}

animate()


