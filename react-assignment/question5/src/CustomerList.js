import React from 'react';
import Customer from './Customer';

class CustomerList extends React.Component{
    state = {
        customerList : [
            {id: '101', name: 'Max', address: 'America'},
            {id: '102', name: 'Allen', address: 'Australia'},
            {id: '103', name: 'Kamal', address: 'India'},
            {id: '104', name: 'Bapi', address: 'India'},
        ],
        tempCustomerList: []
    }

    
    filterCustomer = (event) => {
        let searchTest = event.target.value
        let tempList = (this.state.tempCustomerList.length === 0) ? this.state.customerList : this.state.tempCustomerList;
        let filteredCustomer = tempList.filter((customer) => {
            return customer.address === searchTest;
        });
        if(searchTest.length === 0){
            filteredCustomer = tempList;
        }
        this.setState({
            customerList: filteredCustomer,
            tempCustomerList: tempList
        })
    }

    render() {
        let customers = this.state.customerList.map((customer, index) => <Customer customer = {customer} key={index}/>);
        return (
            <div>
                <input type="text" 
                    placeholder="search by country"
                    onChange={this.filterCustomer}/><hr/>
                <h2>Available Customer:</h2>
                {customers}
            </div>
        );
    }
}

export default CustomerList;