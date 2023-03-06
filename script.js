/* let money, time;
function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money)|| money=='' || money==null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}
start();


let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
	chooseExpenses: function() {
		for (let i=0; i<2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
				b = prompt("Во сколько обойдется?", '');
			if ((typeof(a))==="string" && (typeof(a)) !=null && (typeof(b)) !=null
				&& a !='' && b !='' && a.length <50) {
				console.log("done");
				appData.expenses[a] = b;
			} else {
				i=(i-1);
			}
		}
	},
	detectDayBudget: function() {
		appData.moneyPerDay =(appData.budget / 30).toFixed();
		alert("Ежедневный бюджет: "+appData.moneyPerDay+ "руб.");
	},
	detectLevel: function() {
		if(appData.moneyPerDay <100) {
			console.log("Минимальный уровень достатка");
		}	else if (appData.moneyPerDay >100 && appData.moneyPerDay <2000) {
			console.log("Средний уровень достатка");
		}	else if (appData.moneyPerDay >2000) {
			console.log("Высокий уровень достатка");
		}	else {
			console.log("Произошла ошибка");
		}
	},
	checkSavings: function() {
		if (appData.savings == true) {
			let save= +prompt("Какова сумма накоплений?"),
				percent= +prompt("Под какой процент?");
			
			appData.monthIncone = save/100/12*percent;
			alert("Доход в месяц с Вашего депозита: "+ appData.monthIncone);
		}
	},
	chooseOptExpenses: function() {
		for (let i=0; i<3;) {
			let a = prompt("Статья необязательных расходов?", '');
			if ((typeof(a)) === "string" && (typeof(a)) !=null && a !='') {
			i=(i+1);
			appData.optionalExpenses [i] = a;
			};
		}
	},
	chooseIncome: function() {
		for (let i=0; i<1;) {
			let items = prompt('что принесет дополнительный доход? (Перечислите через запятую)', '');
			appData.income = items.split(', ');
			appData.income.push(prompt('Может что-то ещё?'));
			appData.income.sort();
			if ((typeof(items)) === "string" && (typeof(items)) !=null && items !='') {
			i=(i+1);
			};
		}
		appData.income.forEach(function(item, y) {
		alert("Способы доп. заработка: " + (y+1) + " - " + item);
		});
	},
};
for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
} */

// let x = 5; alert( x++ )  6
// let a = []
// alert (a + false - null + true)  NaN
// let y = 1; 
// let x = y = 2;           2
// alert(x);
// alert([ ] + 1 + 2)      "12"
// alert( "1"[0] )          1
// alert(2 && 1 && null && 0 && undefined)      null
// alert (!!( a && b ))
// alert (a && b)
// alert( null || 2 && 3 || 4 )
// alert( +"Infinity" )
// alert(0 || "" || 2 || undefined || true || falsе)   2

