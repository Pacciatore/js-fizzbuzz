// Dichiarazione costanti
const maxElement = 100;
const fizzList = document.getElementById('fizzList');

// Inizio istruzioni

for (let i = 0; i < maxElement; i++) {
    const exerciseNumber = i + 1;

    const fizzNumber = exerciseNumber % 3;
    const buzzNumber = exerciseNumber % 5;
    const element = document.createElement('div');

    // Uso del col-0 per poter customizzare le grandezze

    if (fizzNumber === 0 && buzzNumber === 0) {
        element.append('FizzBuzz');
        element.className = 'col-0 tr-bg-fizz-buzz m-3 fw-bold';

        element.style.textAlign = 'center';
        element.style.display = 'flex';
        element.style.flexDirection = 'column';
        element.style.justifyContent = 'center';


        console.log('FizzBuzz');
    } else if (fizzNumber === 0) {
        element.append('Fizz');
        element.className = 'col-0 tr-bg-fizz m-3 fw-bold';

        element.style.textAlign = 'center';
        element.style.display = 'flex';
        element.style.flexDirection = 'column';
        element.style.justifyContent = 'center';


        console.log('Fizz');
    } else if (buzzNumber === 0) {
        element.append('Buzz');
        element.className = 'col-0 tr-bg-buzz m-3 fw-bold';

        element.style.textAlign = 'center';
        element.style.display = 'flex';
        element.style.flexDirection = 'column';
        element.style.justifyContent = 'center';


        console.log('Buzz');
    } else {
        element.append(exerciseNumber);
        element.className = 'col-0 tr-bg-number m-3 fw-bold';

        element.style.textAlign = 'center';
        element.style.display = 'flex';
        element.style.flexDirection = 'column';
        element.style.justifyContent = 'center';


        console.log(exerciseNumber);
    }

    fizzList.append(element);

}