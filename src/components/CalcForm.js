import React, {useState} from 'react';


const CalcForm = ({onSalaryAdd, checkAffordability}) => {

    const [input, setInput] = useState("")

    const handleSalaryInput = (event) => {
        setInput(event.target.value)


    }


    const handleSalarySubmit = (event) => {
        event.preventDefault();
        const inputToSubmit = input.trim();
        onSalaryAdd(inputToSubmit);
        checkAffordability();

        }
    

    return(
        <div>
            <form onSubmit = {handleSalarySubmit}>
                <input type="number" min="1" max="100000" placeholder="2000" onChange={handleSalaryInput}/>
                <input type="submit" value="Check"/>
            </form>
        </div>
    );
}

export default CalcForm;
