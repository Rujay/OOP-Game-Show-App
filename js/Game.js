class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrase();
        this.activePhrase = null;
    }
    startGame(){

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
    handleInteraction(){

    }
    removeLife(){

    }
    checkForWin(){

    }
    gameOver(){

    }
}