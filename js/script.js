// Dichiarazione costanti
const maxElement = 100;
const fizzList = document.getElementById('fizzList');

// Inizio istruzioni

for (let i = 0; i < maxElement; i++) {
    const exerciseNumber = i + 1;

    const fizzNumber = exerciseNumber % 3;
    const buzzNumber = exerciseNumber % 5;
    const element = document.createElement('div');

    element.className = 'col-0 m-3 fw-bold';
    element.style.textAlign = 'center';
    element.style.display = 'flex';
    element.style.flexDirection = 'column';
    element.style.justifyContent = 'center';

    // Uso del col-0 per poter customizzare le grandezze

    if (fizzNumber === 0 && buzzNumber === 0) {
        element.append('FizzBuzz');
        element.className = element.classList + ' tr-bg-fizz-buzz';


        console.log('FizzBuzz');
    } else if (fizzNumber === 0) {
        element.append('Fizz');
        element.className = element.classList + ' tr-bg-fizz';


        console.log('Fizz');
    } else if (buzzNumber === 0) {
        element.append('Buzz');
        element.className = element.classList + ' tr-bg-buzz';


        console.log('Buzz');
    } else {
        element.append(exerciseNumber);
        element.className = element.classList + ' tr-bg-number';


        console.log(exerciseNumber);
    }

    fizzList.append(element);

}