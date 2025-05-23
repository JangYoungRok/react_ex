// import React, {Component} from 'react';
import './ExpenseForm.css';
import ExpenseItem from "./ExpenseItem";
import {MdDelete} from "react-icons/md";


// class ExpenseList extends Component {
//
//     render() {
//         // console.log(this.props.initialExpense);
//
//         return (
//                 <>
//                     <ul className='list'>
//                         {/* Expense Item */}
//                         {this.props.initialExpenses.map(expense =>{
//                             return (
//                                     <ExpenseItem expense={expense} key={expense.id}
//                                                  handleDelete={this.props.handleDelete}/>
//                             )
//                         })}
//                     </ul>
//                     <button className='btn'>
//                         목록 지우기
//                         <MdDelete className='btn-icon'/>
//                     </button>
//                 </>
//         )
//     }
// }

const ExpenseList = ({ handleDelete, initialExpenses }) => {
    return (
            <>
                <ul className='list'>
                    {/* Expense Item */}
                    {initialExpenses.map(expense =>{
                        return (
                                <ExpenseItem expense={expense} key={expense.id}
                                             handleDelete={handleDelete}/>
                        )
                    })}
                </ul>
                <button className='btn'>
                    목록 지우기
                    <MdDelete className='btn-icon'/>
                </button>
            </>
    )
}

export default ExpenseList;