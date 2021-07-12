let game='';
const keyboard = document.querySelectorAll('#qwerty .keyrow .key');
const overlay = document.getElementById('overlay');

// event listener for the start game button
document.getElementById('btn__reset').addEventListener('click', () =>{
    game= new Game();
    game.startGame();

});

//event listener for the onscreen keyboard
keyboard.forEach(key => {
    key.addEventListener('click', (e) =>{
        game.handleInteraction(e.target);
    })
})

// event listener which enables the user to use a physical keyboard to play the game

document.addEventListener('keydown', (e) =>{
    keyboard.forEach(key => {
        if (e.key.toLocaleLowerCase() === key.textContent && key.disabled === false) {
            if (overlay.style.display === 'none') {
                game.handleInteraction(key);
            } else {
                
            }
            
        } 
            
    })
});
