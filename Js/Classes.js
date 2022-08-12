// Player Class 
class Fighter {
    constructor({ position, velocity, color = 'red', offset = 0, attackBox }) {
        this.position = position
        this.velocity = velocity
        this.width = 50
        this.height = 150
        this.lastKey
        this.attackBox = attackBox
        this.color = color
        this.offset = offset
        this.isAttacking = false
        this.health = 100
        this.attackBox.position = { x: this.position.x, y: this.position.y }
    }
    draw() {
        // draw out the player
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)

        // draw out the attackBox
        // if (this.isAttacking) {
        ctx.fillStyle = 'green'
        ctx.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)

        if (!this.isAttacking) {

            this.attackBox.position.x = this.position.x - this.offset
        }

        // }
    }

    //to update our player on every render
    update() {
        // to draw our player on every render
        this.draw()
        this.attackBox.position.y = this.position.y
        //movement
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        //gravity 
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        } else {
            this.velocity.y += gravity
        }
        if (this.isAttacking) {
            this.attackBox.position.x += this.attackBox.velocity
        }


    }

    shoot() {
        this.isAttacking = true
        setTimeout(() => {
            this.isAttacking = false
        }, 100)
    }

    takeHit() {
        this.health -= 10
    }
}


class Platform {
    constructor({ position, height, width }) {
        this.position = position,
            this.width = width,
            this.height = height
    }
    draw() {
        ctx.fillStyle = 'blue'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}