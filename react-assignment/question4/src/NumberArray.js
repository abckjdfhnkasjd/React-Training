import React from 'react';
import OddEvenNumber from './OddEvenNumber';


class NumberArray extends React.Component{
    render() {
        let numberArray = [1,2,3,4,5,6,7,8,9];

        const numbers = numberArray
                        .map((number, index) => <OddEvenNumber number = {number} key={index}/>);

        const oddArray = numberArray
                        .filter(number => number%2 !== 0)
                        .map((number, index) => <OddEvenNumber number = {number} key={index}/>);

        const evenArray = numberArray
                        .filter(number => number%2 === 0)
                        .map((number, index) => <OddEvenNumber number = {number} key={index}/>);

        return (
            <div>
                <div>
                    Numbers:
                    {numbers}
                </div>
                <div>
                    Odd Numbers:
                    {oddArray}
                </div>
                <div>
                    Event Numbers:
                    {evenArray}
                </div>
            </div>
        );
    }
} 
export default NumberArray;