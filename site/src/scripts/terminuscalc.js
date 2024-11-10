export function terminusCalculator() {

    const imageContainers = document.querySelectorAll('.image-container')
    const answers = []
    
    for (const container of imageContainers) {
        const radioInput = container.querySelector('input[type="radio"]')
        const box = container.querySelector('.box')
    
    
        radioInput.addEventListener('click', () => {
            processValue(radioInput);
            console.log(answers);
    
            if(answers.length === 3 && !answers.includes(undefined)) {
                finalAnswer()
            }
        });
    }
    
    
    function updateAnswersArray(value, position) {
      if (answers.length <= position) {
        answers.length = position + 1;
      }
      answers.splice(position, 1, value);
    }
    
    
    function finalAnswer() {
        const x = Number(answers[0]);
        const y = Number(answers[1]);
        const z = Number(answers[2]);
    
        // Example formulas
        const formula1 = (2 * x) + 11;
        const formula2 = ((2 * z) + y) - 5;
        const formula3 = (y + z) - x;
    
        console.log(`
            Formula 1: ${formatOutput(formula1)}, 
            Formula 2: ${formatOutput(formula2)}, 
            Formula 3: ${formatOutput(formula3)}
        `);
    
        document.querySelector('#output1').textContent = formatOutput(formula1)
        document.querySelector('#output2').textContent = formatOutput(formula2)
        document.querySelector('#output3').textContent = formatOutput(formula3)
    }
    
    //if puts a 0 before the number, turns a negative into a positive or just returns the number
    function formatOutput(input) {
        const num = Number(input); // Convert input to a number
    
        //if num is between 0 and 9, then add a 0 before the number, e.g. 2 becomes 02, 5 becomes 05
        if (num >= 0 && num < 10) {
            return `0${num}`
        }
    
        //if num is negative, convert num to positive and add a 0 before num, e.g. -2 becomes 02, -5 becomes 05
        if (num < 0) {
            const posNum = Math.abs(num)
            if (posNum >= 0 && posNum < 10) {
                return `0${Math.abs(num)}`
            } else {
                return Math.abs(posNum)
            }
        }
    
        //if num is 10 or more, just return num, so 10 returns 10, 22 returns 22, etc
        if (num >= 10) {
            return num
        }
    }
    
    //if the value attribute of radioInput is THIS then put it into THAT index of the answers array
    //e.g. if you click something with the value attribute of 'x' then it will be assigned to the first [0] index of the answers array
    function processValue(radioInput) {
        const answer = radioInput.value;
    
        switch (radioInput.name) {
            case 'x':
                updateAnswersArray(answer, 0); 
                break;
            case 'y':
                updateAnswersArray(answer, 1); 
                break;
            case 'z':
                updateAnswersArray(answer, 2); 
                break;
            default:
                console.warn('Unknown answer type');
        }
    }

}
