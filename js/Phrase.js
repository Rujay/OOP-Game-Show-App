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
            } else {
                li.className =`hide letter ${character}`;
            }

            ul.appendChild(li);
        });

    }
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        return game.activePhrase.phrase.includes(letter);
    }
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter){
        const characters = document.querySelectorAll('#phrase ul li');
        let charArray = [];
        
        characters.forEach(li => {
            charArray.push(li);
        });

        charArray.forEach(li => {
            if (this.checkLetter(letter)) {

                if (li.className === `hide letter ${letter}`) {
                    li.className = `show letter ${letter}`;
                }


            }
        });
        
    }
}