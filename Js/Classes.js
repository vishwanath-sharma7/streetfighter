// Player Class 
class Fighter {
    constructor({ position, velocity, color = 'red', attackBox, offset = 0 }) {
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
    }
    draw() {
        // draw out the player
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)

        // draw out the attackBox
        if (this.isAttacking) {
            ctx.fillStyle = 'green'
            ctx.fillRect(this.position.x - this.offset, this.position.y, this.attackBox.width, this.attackBox.height)
        }
    }

    //to update our player on every render
    update() {
        // to draw our player on every render
        this.draw()



        //movement
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        //gravity 
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        } else {
            this.velocity.y += gravity
        }

    }
}

