for (let i = 0; i < 100; i++) {
    const exerciseNumber = i + 1;

    const fizzNumber = exerciseNumber % 3;
    const buzzNumber = exerciseNumber % 5;

    if (fizzNumber === 0 && buzzNumber === 0) {
        console.log('FizzBuzz');
    } else if (fizzNumber === 0) {
        console.log('Fizz');
    } else if (buzzNumber === 0) {
        console.log('Buzz');
    } else {
        console.log(exerciseNumber);
    }


}