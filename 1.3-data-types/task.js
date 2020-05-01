'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
   percent = parseFloat(percent);
   contribution = parseFloat(contribution);
   amount = parseFloat(amount);

    if (isNaN(percent)) {
        return `Параметр <Процентная ставка> содержит неправильное значение <${percent}>`;
    };

    if (isNaN(contribution)) {
        return `Параметр <Начальный взнос> содержит неправильное значение <${contribution}>`;
    };

    if (isNaN(amount)) {
        return `Параметр <Общая стоимость> содержит неправильное значение <${amount}>`;
    };

   
   const todayIs = new Date();
   let months = Math.ceil(Math.abs(new Date(date).getTime() - todayIs.getTime()) / (1000 * 3600 * 24)) / 30;
   months = Math.floor(months);
   const toReturn = amount - contribution;
   const P = percent / 1200;
   let monthlyRate = toReturn * ((P + P / ((Math.pow((1 + P), months) - 1))));
   let mortgage = parseFloat((monthlyRate * months).toFixed(2));
   console.log(`Общая выплата по ипотеке ${mortgage} ₽`);
   return mortgage;  
};

function getGreeting(name) {
    if (name === undefined || name === null || name === '') {
        name = 'Аноним';
    };
    
    console.log(`Привет, мир! Меня зовут ${name}`);
    return `Привет, мир! Меня зовут ${name}`;
};