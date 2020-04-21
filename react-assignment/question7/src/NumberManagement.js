import React from 'react'; 

class NumberManagement extends React.Component{
    state = {
        numbersArray: [0,1,2,3,4,5,6,7,8,9,10],
        number: 0
    }

    onIncrement = () => {
        let num = this.state.number;
        if(num < Math.max(...this.state.numbersArray)){
            this.setState({
                number: ++num
            })
        }
    }

    onDecrement = () => {
        let num = this.state.number;
        if(num > Math.min(...this.state.numbersArray)){
            this.setState({
                number: --num
            })
        }
    }

    render() {
        const style = {
            border: '3px solid black',
            padding: '5px',
            margin: '30px auto',
            width: '60px',
            textAllign: 'center'
        }


        return (
            <div className="row">
                <div className="col-xs-12 text-center">
                    <h3>Increment Or Decrement Numbers using bellow button</h3>
                    <h4>Numbers ranges from 0 to 10</h4>
                    <hr/>
                    <button className="btn btn-primary" onClick= {this.onIncrement}>Increment</button> | <button className="btn btn-danger" onClick= {this.onDecrement}>Decrement</button>
                    <div style={style}>
                        {this.state.number}
                    </div>
                </div>
            </div>
        );
    }
}

export default NumberManagement;