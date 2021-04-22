import React, {useState} from 'react';


const CalcForm = ({onSalaryAdd}) => {

    const [input, setInput] = useState("")

    const handleSalaryInput = (event) => {
        setInput(event.target.value)
        console.log(event.target.value)

    }


    const handleSalarySubmit = (event) => {
        event.preventDefault();
        const inputToSubmit = input.trim();
    }

    return(
        <div>
            <form onSubmit = {handleSalarySubmit}>
                <input type="text" onChange={handleSalaryInput}/>
                <input type="submit" value="Check"/>
            </form>
        </div>
    );
}

export default CalcForm;