class Phrase {
    constructor(phrase) {
         this.phrase = phrase.toLowerCase();
    }
    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        //converts the phrase to an array of letters and spaces
        const characters = this.phrase.split('');

        const ul = document.querySelector('#phrase ul');

        characters.forEach(character => {
            const li = document.createElement('li');
            li.textContent = character;
            if (li.textContent === ' ') {
                li.className = 'space';
            }
        })

    }
    checkLetter() {

    }
    showMatchedLetter(){
        
    }
}