const prompts = require('prompts');

type GameElements = {
    title : string,
    beats: GameElements[],
}

const ELEMENT_PAPER: GameElements = {
    title : 'Paper',
    beats : [],
}
const ELEMENT_ROCK: GameElements = {
    title : 'Rock',
    beats : [],
}
const ELEMENT_SCISSORS: GameElements = {
    title : 'Scissors',
    beats : [],
}
const ELEMENT_LIZARD: GameElements = {
    title : 'Lizard',
    beats : [],
}
const ELEMENT_SPOCK: GameElements = {
    title : 'Spock',
    beats : [],
}

ELEMENT_PAPER.beats.push(ELEMENT_ROCK, ELEMENT_SPOCK);
ELEMENT_ROCK.beats.push(ELEMENT_SCISSORS, ELEMENT_LIZARD);
ELEMENT_SCISSORS.beats.push(ELEMENT_PAPER, ELEMENT_LIZARD);
ELEMENT_LIZARD.beats.push(ELEMENT_SPOCK, ELEMENT_PAPER);
ELEMENT_SPOCK.beats.push(ELEMENT_ROCK, ELEMENT_SCISSORS);

const ELEMENTS: GameElements[] = [
    ELEMENT_PAPER,
    ELEMENT_ROCK,
    ELEMENT_SCISSORS,
    ELEMENT_LIZARD,
    ELEMENT_SPOCK
];

(async () => {
    let score = {'PC': 0, 'Player': 0}
    let keepPlaying:boolean = true;
    while(keepPlaying){
        const PC_SELECTION: GameElements = ELEMENTS[Math.floor(Math.random()*ELEMENTS.length)];
    
        const response = await prompts({
            type: 'select',
            name: 'elementIndex',
            message: 'Choose element: ',
            choices: ELEMENTS
        });
    
        const PLAYER_SELECTION = ELEMENTS[response.elementIndex];
    
        if (PLAYER_SELECTION.title === PC_SELECTION.title){
            console.log('The game is draw!');
        }else if (PLAYER_SELECTION.beats.includes(PC_SELECTION)){
            console.log(`\n ${PLAYER_SELECTION.title} beats ${PC_SELECTION.title} \n Player wins`);
            score["Player"]++;
        }else{
            console.log(`\n ${PC_SELECTION.title} beats ${PLAYER_SELECTION.title} \n PC wins`);
            score['PC']++
        }
        console.log('The score is:', score, '\n\n')
        
        const playAgain = await prompts({
            type: 'select',
            name: 'value',
            message: 'Do You want to play again?',
            choices: [
                { title: 'Yes', value: true},
                { title: 'No', value: false}
            ]
        });

        keepPlaying = playAgain.value
    }
    console.log('\n\n Thank You for the game!\n\n')
    
})();



// NICE GAME!!