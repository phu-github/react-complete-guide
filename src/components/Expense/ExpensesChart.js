import React from 'react';
import Chart from '../Chart/Chart';

function ExpensesChart(props) {
    const chartDataPoints = [
        { label: "jan", value:'0'},
        { label: "Feb", value:'0'},
        { label: "Mar", value:'0'},
        { label: "Apr", value:'0'},
        { label: "May", value:'0'},
        { label: "Jun", value:'0'},
        { label: "Jul", value:'0'},
        { label: "Aug", value:'0'},
        { label: "Sep", value:'0'},
        { label: "Oct", value:'0'},
        { label: "Nov", value:'0'},
        { label: "Dec", value:'0'},
    ];
    // console.log("================props.expenses" ,props.expenses);
    for(const expense of props.expenses){
        const expenseMonth =  expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
        console.log("================ expenseMonth:" ,expenseMonth);
    }
    const arrayName = [1 , 2 ,3,4,5,6,7,8,9,10,11,12];
    return (
       <Chart dataPoints = {chartDataPoints} ></Chart>
    );
}

export default ExpensesChart;