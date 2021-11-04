import './ExpensesFilter.scss';

export default function ExpensesFilter(props) {
    console.log("[2.1] ExpensesFilter.js run");
    const handleDropdownChange = (event) =>{
        console.log(event.target.value);
        props.onRecieveExpenseFilter(event.target.value);
    }
    return(
        <div className="expense-filter">
            <div className="expense-filter__control">
                <label>Filter by year</label>
                <select value={props.selected} onChange={handleDropdownChange}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};
