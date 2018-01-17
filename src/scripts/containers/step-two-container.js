import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextInput from '../components/text-input';
import DropDown from '../components/dropdown';

 class StepTwoContainer extends Component {
   constructor(props) {
     super(props)
     this.state = {
       addressData: []
     }
   }

   componentWillReceiveProps(nextProps, prevState) {
    this.setState((prevState) => Object.assign({}, prevState, { addressData: nextProps.data }));
   }


   render() {
     console.log(this.state)
     return (
       <div>
        <form>
          <TextInput />
          <TextInput />
          <TextInput />
          <TextInput />

        </form>
        </div>


     )
   }
 }

export default StepTwoContainer;
