import React, {Component} from 'react';
import './ExpenseForm.css';
import ExpenseItem from "./ExpenseItem";
import {MdDelete} from "react-icons/md";
import {ReactComponent} from "*.svg";

class ExpenseList extends Component {

    render() {
        // console.log(this.props.initialExpense);

        return (
            <>
                <ul className='list'>
                    {/* Expense Item */}
                    {this.props.initialExpense.map(expense =>{
                        return (
                            <ExpenseItem expense={expense} key={expense.id}/>
                        )
                    })}
                    {/*<ExpenseItem />*/}
                </ul>
                <button className='btn'>
                    목록 지우기
                    <MdDelete className='btn-icon'/>
                </button>
            </>
        )
    }
}

export default ExpenseList;