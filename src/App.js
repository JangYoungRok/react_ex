// import React from "react";
import {useState} from "react";
import "./App.css";
import Alert from "./components/Alert.js"
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

// class App extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             expenses: [
//                 {id: 1, charge: "렌트비", amount: 1600},
//                 {id: 2, charge: "교통비", amount: 400},
//                 {id: 3, charge: "식비", amount: 1200}
//             ]
//         }
//     }
//
//     // initialExpenses = [
//     //   {id: 1, charge: "렌트비", amount: 1600},
//     //   {id: 2, charge: "교통비", amount: 400},
//     //   {id: 3, charge: "식비", amount: 1200}
//     // ]
//
//     handleDelete = (id) => {
//         // console.log(id)
//         // const newExpenses = this.state.expenses.filter(expense => expense.id !== id)
//         // console.log(newExpenses)
//         // this.setState({expenses: this.state.expenses.filter(expense => expense.id !== id)})
//         const newExpenses = this.state.expenses.filter(expense => expense.id !== id)
//         this.setState({expenses: newExpenses})
//     }
//
//     render()  {
//         return (
//                 <main className="main-container">
//                     <h1>예산 계산기</h1>
//
//                     <div style={{width: "100%", backgroundColor: "white", padding: "1rem"}}>
//                         <ExpenseForm />
//                     </div>
//
//                     <div style={{width:"100%", backgroundColor: "white", padding: "1rem"}}>
//                         {/* Props 사용 */}
//                         <ExpenseList initialExpenses={this.state.expenses}
//                                      handleDelete={this.handleDelete}/>
//                     </div>
//
//                     <div style={{display: "flex", justifyContent: "end", marginTop: "1rem"}}>
//                         <p style={{ fontSize: "2rem"}}>
//                             총지출:
//                             <span>원</span>
//                         </p>
//                     </div>
//                 </main>
//         )
//     }
// }

const App = () => {

    const [charge, setCharge] = useState("");
    const [amount, setAmount] = useState(0);
    const [id, setId] = useState('');
    const [edit, setEdit] = useState(false);
    const [alert, setAlert] = useState({show: false});

    const handleCharge = (e) => {
        setCharge(e.target.value)
    }

    const handleAmount = (e) => {
        setAmount(e.target.valueAsNumber)
    }

    const handleAlert = ({type, text}) => {
        setAlert({show: true, type, text})
        setTimeout(() => {
            setAlert({show: false});
        }, 7000)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (charge !== "" && amount > 0) {
            if (edit) {
                const newExpenses = expenses.map(item => {
                    return item.id === id ? {...item, charge, amount} : item;
                })
                setExpenses(newExpenses)
                setEdit(false)
                handleAlert({type: "success", text: "아이템이 수정되었습니다."});
            } else {
                const newExpense = {id: crypto.randomUUID(), charge, amount};
                const newExpenses = [...expenses, newExpense];
                setExpenses(newExpenses);
                handleAlert({type: "success", text: "아이텡미 생성 되었습니다."});
            }
            setCharge("");
            setAmount(0);
        } else {
            handleAlert({type: "danger", text: "charge는 빈 값일 수 없으며 amount는 0보다 큰 숫자를 입력해 주세요."})
        }
    }

    const handleEdit = id => {
        const expense = expenses.find(x => x.id === id);
        const {charge, amount} = expense;
        setId(id);
        setCharge(charge);
        setAmount(amount);
        setEdit(true);
    }

    const [expenses, setExpenses] = useState([
        {id: 1, charge: "렌트비", amount: 1600},
        {id: 2, charge: "교통비", amount: 400},
        {id: 3, charge: "식비", amount: 1200}
    ])

    const handleDelete = (id) => {
        const newExpenses = expenses.filter(expense => expense.id !== id)
        setExpenses(newExpenses)
        handleAlert({type: "danger", text: "아이템이 삭제 되었습니다."})
    }

    const handleClear = () => {
      const newExpenses = []
      setExpenses(newExpenses)
      handleAlert({type: "danger", text: "모든 항목이 삭제 되었습니다."})
    }

    return (
            <main className="main-container">
                {alert.show ? <Alert type={alert.type} text={alert.text}/> : null}
                <h1>예산 계산기</h1>

                <div style={{width: "100%", backgroundColor: "white", padding: "1rem"}}>
                    <ExpenseForm
                            handleCharge={handleCharge}
                            charge={charge}
                            handleAmount={handleAmount}
                            amount={amount}
                            handleSubmit={handleSubmit}
                            edit={edit}
                    />
                </div>

                <div style={{width: "100%", backgroundColor: "white", padding: "1rem"}}>
                    {/* Props 사용 */}
                    <ExpenseList initialExpenses={expenses}
                                 handleDelete={handleDelete}
                                 handleEdit={handleEdit}
                                 handleClear={handleClear}
                    />
                </div>

                <div style={{display: "flex", justifyContent: "end", marginTop: "1rem"}}>
                    <p style={{fontSize: "2rem"}}>
                        총지출:
                        <span>
          {expenses.reduce((acc, expense) => acc + expense.amount, 0)}
                            원
          </span>
                    </p>
                </div>
            </main>
    )
}

export default App;