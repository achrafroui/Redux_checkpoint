import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'

const Counter = (props) => {
    const increment = () => {
        props.dispatch({ type: "INCREMENT" });
      };
     
      const decrement = () => {
        props.dispatch({ type: "DECREMENT" });
      };
  
      const reset = () => {
          props.dispatch({ type: "RESET" });
        };
    return (
        <div className="counter">
       <h2>Counter</h2>
       <div>
       <Button variant="danger" onClick={() =>decrement()}>-</Button>{' '}
         
         <span className="count">{props.count}</span>
         <Button variant="success" onClick={() =>increment()}>+</Button>{' '}
        
       </div>
       <Button variant="outline-success"  type="reset" value="Reset" onClick={() =>reset()}> Reset </Button>
       
     </div>
    )
}

const mapStateToProps = state => {
    return {
      count: state.count
    };
   };
   
   export default connect(mapStateToProps)(Counter);
