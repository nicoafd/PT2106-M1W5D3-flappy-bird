class Bird {
    constructor() {
        this.x = 50;
        this.y = canvas.height / 2;
        this.width = 40;
        this.height = 40;
        this.image = new Image();
        this.image.src = "../images/flappy.png";
        this.speed = 1;
}

// drawing of bird
drawBird = () => {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
}

birdGravity = () => {
    if (this.y < canvas.height - 40) {
        this.y++
    }
}

birdJump = () => {
    this.y -= 40
}

birdPipeCollision = (pipe) => {
    // pipe is gonna be an obj with all pipe properties
    if (this.x < pipe.x + pipe.width &&
        this.x + this.width > pipe.x &&
        this.y < pipe.y + pipe.height &&
        this.y + this.height > pipe.y) {
         return true
     }

}

}