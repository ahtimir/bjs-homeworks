'use strict'; 

// Задача 1

function getSolutions(a, b, c) {
    let d = (Math.pow(b, 2) - 4 * a * c);
    if (d < 0) {
        return { D: d, roots: [] };
    } else if (d === 0) {
        let x1 = [(-b / (2 * a))];
		return {D: d, roots: [x1]};
    } else {
        let x1 = ((-b + Math.sqrt(d)) / (2 * a));
		let x2 = ((-b - Math.sqrt(d)) / (2 * a))
		return {D: d, roots: [x1 , x2]};
    };
};

function showSolutionsMessage(a, b, c) {
	let result = getSolutions(a, b, c);
	console.log(`Вычисляем корни квадратного уравнения ${a}x^2 + ${b}x + ${c} = 0`);
	
	if (result.D === 0) {
		console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
	} else if (result.D > 0) {
		console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
	} else {
		console.log(`Уравнение не имеет вещественных корней`);
	};
};

showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4 , 2);
showSolutionsMessage(1, 2 , 3);

// Задача 2

let marks = {
	algebra: [2, 4, 5, 2, 3, 4],
	geometry: [2, 4, 5],
	russian: [3, 3, 4, 5],
	physics: [5, 5],
	music: [2, 2, 6],
	english: [4, 4, 3],
	poetry: [5, 3, 4],
	chemistry: [3, 4],
	french: [4, 4]
};

let finalResult = marks;
let z = 0;

function getAverageMark(data) {
	let averageScore = 0;
  for (let i = 0; i < data.length; i++) {
		averageScore += data[i];
	  }
	averageScore = averageScore / data.length;
  return averageScore;
};

function getAverageScore(data) {
  let averageScore = 0;
  let overAllScore = 0;
  for (let prop in data) {
    averageScore = getAverageMark(data[prop]);
    finalResult[prop] = getAverageMark(data[prop]);
    overAllScore = overAllScore + averageScore;
    z++;
  };
  overAllScore = overAllScore / z;
  finalResult['average'] = overAllScore;
  return finalResult;
};

console.log(getAverageScore(marks));

// Задача 3

let data = {
	aaa: 0,
	bbb: 1
};

function getPersonData(secretData) {
	return {
		firstName: getDecodedValue(secretData.aaa), 
		lastName: getDecodedValue(secretData.bbb)
	};
};

function getDecodedValue(secret) {
	if (secret === 0) {
		return 'Родриго';
	} else if (secret === 1) {
		return 'Эмильо';
	};
};

console.log(getPersonData(data));
