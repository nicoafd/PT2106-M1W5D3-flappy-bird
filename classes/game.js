class Game {
    constructor() {
        // arguments are used to personalize the objcets
        this.bg = new Image()
        this.bg.src = "../images/bg.png"
        this.bird = new Bird();
        this.pipesArr = [];
        this.isGameOn = true
        
    }

    spawnPipes = () => {
        
        if (!this.pipesArr.length || this.pipesArr[this.pipesArr.length - 1].x === canvas.width / 2) {
            let randomPos = Math.floor(Math.random() * -canvas.height / 2)
       
         //create a pip

        let pipe = new Pipe(randomPos, "../images/obstacle_top.png")

        // add the pipe to the array
        this.pipesArr.push(pipe)

        //creat the second pipe
        let randomPos2 = randomPos + pipe.height + this.bird.height * 3 
        let pipe2 = new Pipe(randomPos2, "../images/obstacle_bottom.png")
        this.pipesArr.push(pipe2)
        }

    }
    gameLoop = () => {
   // console.log("game running")
    //1. clearing canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    
    
    //2. movement of elements or other
    this.bird.birdGravity()
    this.spawnPipes()
    //this.pipesArr[0].pipeMove()
    this.pipesArr.forEach(eachPipe => {
        eachPipe.pipeMove()
    })
    this.pipesArr.forEach(eachPipe => {
       if (this.bird.birdPipeCollision(eachPipe)) {
           // stop the game from running
            this.isGameOn = false;
           // remove canvas
            canvas.style.display = "none"
           //display the gamover screen
           gameOverScreen.style.display = "flex"
       }
    })


    //3. drawing elements
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)

    this.bird.drawBird()

    this.pipesArr.forEach(eachPipe => {
        eachPipe.drawPipe()
    })

    //4. request animation
    if (this.isGameOn) {
        requestAnimationFrame(this.gameLoop)
    }

}
}
