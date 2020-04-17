import PropTypes from 'prop-types'; 
import React from 'react'; 
import ReactDOM from 'react-dom'; 
  
// Component 
class Employee extends React.Component{ 
    render(){ 
        return( 
                <div> 
                    {/* printing all props */} 
                    <h1> 
                        Employee Id: {this.props.idProp} 
                        <br /> 
                        Employee Name: {this.props.stringProp} 
                        <br /> 
                        Employee Company: {this.props.companyProp} 
                        <br /> 
                    </h1> 
                </div> 
            ); 
    } 
}
  
// validating prop types 
Employee.propTypes = { 
    idProp: PropTypes.number, 
    nameProp: PropTypes.string, 
    companyProp: PropTypes.string
} 
  
// creating default props 
Employee.defaultProps = { 
  
    idProp: "101", 
    nameProp: 'Max Millium', 
    companyProp: "yash Technology"
}  

export default Employee;