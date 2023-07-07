import React from 'react'
import { useGlobalState } from '../context/GlobalState'

export const IncomeExpenses = () => {

    const { transactions } = useGlobalState();

    const amounts = transactions.map( transaction => transaction.amount)
    // console.log(amounts)

    const income = amounts.filter( item => item > 0).reduce((acc,item) => (acc += item),0).toFixed(2);
    const expense = amounts.filter( item => item < 0).reduce((acc,item) => (acc += item),0).toFixed(2) *-1;

    return (
        <>
            <div className='flex justify-between my-2'>
                <h4>Income</h4>
                <p>${income}</p>
            </div>
            <div className='flex justify-between my-2'>
                <h4>Expense</h4>
                <p>${expense}</p>
            </div>
        </>
    )
}
