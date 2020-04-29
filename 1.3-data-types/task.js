'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
   percent = parseFloat(percent);
   contribution = parseFloat(contribution);
   amount = parseFloat(amount);

   if ((typeof percent != 'number') || (typeof contribution != 'number') || (typeof amount != 'number')) {
    // error
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
    if (name == '' || NaN || undefined || null) {
        name = 'Аноним';
    };
    console.log(`Привет, мир! Меня зовут ${name}`);
    return `Привет, мир! Меня зовут ${name}`;
};