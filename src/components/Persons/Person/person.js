import React,{Component} from 'react';
import Aux from '../../../Hoc/auxi';
import classes from './Person.css';
import withClass from '../../../Hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
   constructor(props){
     super(props);
     this.inputElementRef=React.createRef();
   }
   static contextType = AuthContext;

  componentDidMount(){
    // document.querySelector('input').focus();
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
    
  }
  
    render(){
      console.log("[person.js] rendering...");
      
  return (
   <Aux>
     
      { this.context.authenticated?<p>Authenticated</p>:<p>Please Log in</p>}
     
      <p onClick={this.props.click}>
        I'm {this.props.name} and I am {this.props.age} years old!
      </p>
      <p>{this.props.children}</p>
      <input 
      //ref={(inputEl)=>{this.inputElement=inputEl}}
      ref={this.inputElementRef}
       type="text" onChange={this.props.changed} value={this.props.name} />
    </Aux> 
    );
};
}
Person.propTypes={
  click:PropTypes.func,
  changed:PropTypes.func,
  name:PropTypes.string,
  age:PropTypes.number
}


export default withClass(Person,classes.Person);