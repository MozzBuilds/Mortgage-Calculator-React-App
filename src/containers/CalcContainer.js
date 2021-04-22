import React, {useState, useEffect} from 'react';
import CalcForm from '../components/CalcForm';


const CalcContainer = () => {

    const [salary, setSalary] = useState(null)
    const [mortgage, setMortgage] = useState(null)
    const [properties, setProperties] = useState(
        [
            {"address" : "712 Gilmerton Steet",
            "price:": 10000},
            {"address" : "82 Fancy Place",
            "price:": 25000},
            {"address" : "16 Jelly Road",
            "price:": 15000},
        ]
    )



    useEffect(() => {
        setMortgage(salary * 35);
    })

    const addSalary = (addedSalary) => {
        // addedSalary.id = Date.now();
        setSalary(addedSalary);

    }

    const checkAffordability = () => {
        const propertiesYouCanAfford = properties.filter((property) => {
            return property.price < mortgage;

        });

        return propertiesYouCanAfford;
    

    }
    return(
        <div>
        <h1>Mortgage Calculator</h1>
        <CalcForm  onSalaryAdd={(addedSalary) => addSalary(addedSalary)} checkAffordability={checkAffordability}/>
        <ul>

        </ul>
        </div>
    );
}

export default CalcContainer;