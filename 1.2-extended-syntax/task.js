'use strict';

function getResult(a,b,c){
	let d = (Math.pow(b, 2) - 4 * a * c);
	if (d < 0) {
		return [];
	} else if (d === 0) {
		return [(-b / (2 * a))];
	} else {
		return [((-b + Math.sqrt(d)) / (2 * a)), 
		  		((-b - Math.sqrt(d)) / (2 * a))];
	};
};

function getAverageMark(marks){
    let marksSum = 0;
    if (marks.length > 5) {
		marks.splice(5);
		console.log(`Внимание! Будет рассчитано среднее арифметическое 5 оценок.`);
    } else if (marks.length === 0) {
        return 0;
    };

    for (let i = 0; i < marks.length; i++) {
        marksSum += marks[i];
    };
	return marksSum / marks.length;
};

function askDrink(name,dateOfBirthday) {
    if (name == '') {
        name = 'Незнакомец';
    };
    let yearNow = new Date().getFullYear();
    if ((yearNow - dateOfBirthday.getFullYear()) < 18) {
		return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
	} else {
		return `Не желаете ли олд-фэшн, ${name}?`;
	};
};