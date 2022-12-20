const prompts = require('prompts');

(async () => {
  let keepPlaying:boolean = true;
  while(keepPlaying){
    const words: string[] = [
      'CODELEX',
      'A bad excuse is better than none',
      'Business before pleasure',
      'Curiosity killed the cat',
      'Knowledge is power',
      'Less is more',
      'Money talks',
      'Time is money',
      'Python',
      'JAVA',
      'JavaScript',
      'Kotlin',
      'Ruby',
      'Scala',
      'typescript'
    ];
    const word: string = words[Math.floor(Math.random()*words.length)];
    const wordArr: string[] = word.toLowerCase().split('');
  
    let guessWord:string[] = wordArr.map(el => el = el === ' '? ' ' : '_')  // '_'.repeat(wordArr.length).split('')
  
    let guessLimit: number = word.length + 5;

    if (guessWord.includes(' ')){
      console.log(`You have to guess this phrase: "${guessWord.join(' ')}", good luck`);
    }else{
      console.log(`You have to guess this word: "${guessWord.join(' ')}", good luck`);
    }
    
    while (guessLimit > 0){
      const response = await prompts({
        type: 'text',
        name: 'value',
        message: 'Enter letter',
      });
      
      if (wordArr.includes(response.value)){
        wordArr.forEach((el, i) => guessWord[i] = response.value === el ? el : guessWord[i]);
      }else{
        console.log(`sorry there is not such letter, you have left ${guessLimit} gusses`)
      }
      console.log(guessWord.join(' '))
      guessLimit--;
      if(!guessWord.includes('_')){
        console.log('Congrats, You Win!! The answer was:', word)
        break;
      }
    }
  
    if (!guessLimit){
      console.log('Sorry, You are out of guesses! The answer was:', word)
    }

    const playAgain = await prompts({
      type: 'text',
      name: 'value',
      message: 'Do You whant to play again? y/n :',
      validate: (value: string) => value === 'y' || value === 'n' ? true : `'y' or 'n'`
    });
    keepPlaying = playAgain.value === 'y' ? true : false
  }

  console.log('Thank You for game');
})();