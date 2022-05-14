// Remember, we're gonna use strict mode in all scripts now!
'use strict';

let temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const findAmplitude = temperatures => {
    let min = temperatures[0];
    let max = temperatures[0];
    for (let temp of temperatures) {
        if (typeof temp !== 'number')
            continue;

        if (temp < min)
            min = temp;
        if (temp > max)
            max = temp;
    }

    console.log(`Amplitude of temperatures is: ${max-min}`);
};

const findAmplitudeUsingTwoArrays = (temperatures, temperaturesExtended) => {
    temperaturesExtended.forEach(element => {
        temperatures.push(element);
    });
    //console.table(temperatures);
    findAmplitude(temperatures);
}
findAmplitudeUsingTwoArrays(temperatures, [12, 11]);