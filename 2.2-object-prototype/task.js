'use strict'

function getAnimalSound(animal) {
    if (animal === undefined) {
        return null;
    };

    const sound = animal.sound;

    if (animal != undefined) {
        return sound;
    };
};

function getAverageMark(marks) {
    let marksSum = 0,
        average,
        roundedAverage;
    
    if (marks.length === 0) {
        return roundedAverage = 0;
    };

    for (let i = 0; i < marks.length; i++) {
        marksSum += parseInt(marks[i]);
    };

    average = marksSum / marks.length
    roundedAverage = Math.round(average);
    return roundedAverage;
};

function checkBirthday(birthday) {
    let now = Date.now();

    birthday = new Date(birthday);

    let diff = now - (birthday),
        age = diff / 31557600000;

    if (age >= 18) {
        return true;
    } else if (age < 18) {
        return false;
    };
};