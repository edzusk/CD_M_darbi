console.log('Ready for coding');
const buttons = document.querySelectorAll('.btn');
const boxes = document.querySelectorAll('.box');
const boxHeading = document.querySelectorAll('.heading');
const body = document.querySelector('body');
const textinput = document.getElementById('textinput');

const clickFirstBtn = () => {
  buttons[0].addEventListener('click', () => {
    if (Object.values(boxes[0].classList).includes('bg-yellow')) {
      boxes[0].classList.remove('bg-yellow');
    } else {
      boxes[0].classList.add('bg-yellow');
    }
  });
};

const clickSecondBtn = () => {
  buttons[1].addEventListener('click', () => {
    boxHeading[1].innerHTML = boxHeading[1].innerHTML === 'success' ? 'fail' : 'success';
  });
};

const clickThirdBtn = () => {
  buttons[2].addEventListener('click', () => {
    if (Object.values(boxes[2].classList).includes('transparent')) {
      boxes[2].classList.remove('transparent');
    } else {
      boxes[2].classList.add('transparent');
    }
  });
};
const clickFourthBtn = () => {
  buttons[3].addEventListener('click', () => {
    if (Object.values(boxes[3].classList).includes('transparent')) {
      boxes[3].classList.remove('transparent');
    } else {
      boxes[3].classList.add('transparent');
    }
  });
};

const clickFifthBtn = () => {
  buttons[4].addEventListener('click', () => {
    const bgColorArr = ['bg-blue', 'bg-yellow', 'bg-aqua', 'bg-green', 'bg-purple'];
    boxes[4].className = 'box';
    boxes[4].classList.add(bgColorArr[Math.floor(Math.random() * bgColorArr.length)]);
  });
};

const clickSixthBtn = () => {
  buttons[5].addEventListener('click', () => {
    let i = 0;
    setInterval(() => {
      if (i <= 10) {
        boxHeading[5].innerHTML = `${(i)}`;
        i++;
      }
    }, 2000);
  });
};

const clickSeventhBtn = () => {
  buttons[6].addEventListener('click', () => {
    if (Object.values(body.classList).includes('sevenMode')) {
      body.classList.remove('sevenMode');
    } else {
      body.classList.add('sevenMode');
    }
  });
};

const hoverFirstBox = () => {
  boxes[0].addEventListener('mouseover', () => {
    boxes[0].classList.add('bg-red');
  });
  boxes[0].addEventListener('mouseout', () => {
    boxes[0].classList.remove('bg-red');
  });
};

const hoverFifthBox = () => {
  let i = 0;
  let timer = setInterval(() => {
    if (i <= 0) {
      boxHeading[4].innerHTML = `${(i)}`;
      i++;
    }
  }, 800);
  boxes[4].addEventListener('mouseover', () => {
    timer = setInterval(() => {
      if (i <= 10) {
        boxHeading[4].innerHTML = `${(i)}`;
        i++;
      }
    }, 800);
  });
  boxes[4].addEventListener('mouseout', () => {
    clearInterval(timer);
    i = 0;
    boxHeading[4].innerHTML = `${(i)}`;
  });
};

textinput.addEventListener('keyup', () => {
  const textoutput = (document.getElementById('textinput') as HTMLInputElement).value;
  document.getElementById('textoutput').innerHTML = textoutput;
});

clickFirstBtn();
clickSecondBtn();
clickThirdBtn();
clickFourthBtn();
clickFifthBtn();
clickSixthBtn();
clickSeventhBtn();
hoverFirstBox();
hoverFifthBox();
