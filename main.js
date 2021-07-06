// main.js => Managing DOM elements & event listeners

// GLOBAL VARIABLES
let canvas = document.querySelector("#my-canvas")
let ctx = canvas.getContext("2d")

//DOM ELEMENTS
let splashScreen = document.querySelector("#splash-screen")
let gameOverScreen = document.querySelector("#gameover-screen")
let startButton = document.querySelector("#start-btn")
let restartButton = document.querySelector("#restart-btn")

// main game global variable
let gameObj; 

// ADD EVENT LISTENERS
startButton.addEventListener("click", () => {
    // show canvas DOM element on button click
    canvas.style.display = "block"
    // hide splash screen DOM element
    splashScreen.style.display = "none"

    // here we need to create the game
    gameObj = new Game() // game will have all properties and methods of game class!
    gameObj.gameLoop()
    // here we need to start the game after creating the object
})

canvas.addEventListener("click", () => {
    gameObj.bird.birdJump()
})

restartButton.addEventListener("click", () => {
        // show canvas DOM element on button click
        canvas.style.display = "block"
        // hide splash screen DOM element
        gameOverScreen.style.display = "none"
    
        // here we need to create the game
        gameObj = new Game() // game will have all properties and methods of game class!
        gameObj.gameLoop()
        // here we need to start the game after creating the object
})