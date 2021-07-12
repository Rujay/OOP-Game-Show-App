class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrase();
        this.activePhrase = null;
    }
    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame(){
        const overlay = document.getElementById('overlay')
        overlay.style.display = 'none';
        overlay.hidden = true;
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        
    }
    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrase(){
        const phrase =[
            new Phrase('Back to Square One'),
            new Phrase('Feeling lucky punk'),
            new Phrase('A Dime a Dozen'),
            new Phrase('Bond James Bond'),
            new Phrase('Show me the money'),
            new Phrase('I feel the need for speed'),
            new Phrase('This Is Sparta'),
            new Phrase('You Shall Not Pass'),
            new Phrase('The sun will come out tomorrow'),
            new Phrase('Once bitten twice shy'),
            new Phrase('Frankly My Dear I Dont Give A Damn'),
        ]
        return phrase;
    }
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase(){
        let randomNum = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNum];
    }
    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife(){
        const hearts = document.querySelectorAll('.tries img');

        if (this.missed < hearts.length) {
            hearts[this.missed].src = '/images/lostHeart.png';
        }
        
        this.missed++;


        if (this.missed === 5) {
            this.gameOver(false);
        }
    }
    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin(){
        const list = document.querySelectorAll('#phrase ul li');
        let win = true;
        list.forEach(li => {
            if (li.className === 'hide letter ' + li.textContent) {
                win = false;
                
            }
        })
       
        return win;
    }
    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon){
        const overlay = document.getElementById('overlay');
        const h1Message = document.getElementById('game-over-message');
        const btn = document.getElementById('btn__reset');

        if (this.checkForWin() === true) {
            gameWon = true;
        } 
        if (this.missed === 5) {
            gameWon = false;
        }

        if (gameWon === true) {
            overlay.style.display = '';
            overlay.className = 'win';
            h1Message.innerHTML = `Congratulations! You've won!`;
            btn.textContent = `Play Again`;

        } 
        if (gameWon === false) {
            overlay.style.display = '';
            overlay.className = 'lose';
            h1Message.innerHTML = `Sorry, you've lost. Better luck next time.`;
            btn.textContent = `Try Again`;
        }
        return gameWon;
        
    }

  
    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button){
        const key = button.textContent;
        const checkKey = this.activePhrase.checkLetter(key);

        if (checkKey) {
            button.disabled = true;
            button.className = 'chosen';
            this.activePhrase.showMatchedLetter(key);
            this.checkForWin()
            this.gameOver()
            
        } else if (!checkKey) {
            this.removeLife()
            button.disabled = true;
            button.className = 'wrong';
           
        }
        this.resetGame()
        
    }
    // Resets the game after the player has win/lose.
    resetGame(){
        const ul = document.querySelector('#phrase ul');
        const liItems = document.querySelectorAll('#phrase ul li');

        const keyboard = document.querySelectorAll('.keyrow button');
        const hearts = document.querySelectorAll('.tries img');


        if (this.gameOver() === true || this.gameOver() === false) {

            liItems.forEach(li => ul.removeChild(li));

            keyboard.forEach(button => {
            button.disabled = false;
            button.className = 'key';
            });

            hearts.forEach(heart => {
            heart.src = '/images/liveHeart.png';
            this.missed = 0;
            });
        }
        
    }
}