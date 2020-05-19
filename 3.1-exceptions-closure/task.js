'use strict';

// Задача 1 

function parseCount(number) {

    if (isNaN(number)) {
        const error = new Error (`Невалидное значение`);
        console.error(error);
        throw error;
    };
        return parseInt(number);
    };

function validateCount(number) {
    try {
        return parseCount(number);
    } catch (error) {
        return error;
    };
};

// Задача 2

class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        
        if (((a + b) < c) || ((a + c) < b) || ((b + c) < a)) {
            const error = new Error ('Треугольник с такими сторонами не существует');
            throw error;
        };
    };

    getPerimeter() {
        return parseFloat(this.a + this.b + this.c);
    };

    getArea() {
        let s,
            p = this.getPerimeter() / 2;

        s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return parseFloat(s.toFixed(3));
    };
};

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {   
        console.error(error);
        return {
            getPerimeter () {
                return 'Ошибка! Неправильный треугольник';
            },
            getArea () {
                return 'Ошибка! Неправильный треугольник';
            }
        };
    };
};



/*
function parseCount(number) {
    try {
        if (isNaN(number)) {
            throw `Невалидное значение ${number}`;
        };
    } catch (error) {
        console.warn(error);
    };
    return Number.parseInt(number, 10); 
};

function validateCount(number) {
    try {
        let result = parseCount(number);
        if (isNaN(result)) {
            throw `Преобразование к числу не удалось. ${number} не является числом`;
        };
        return result;
    } catch (error) {
        console.error(error);
        return error;
    };
};
*/