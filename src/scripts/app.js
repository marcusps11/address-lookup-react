import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './components/dropdown';
import Search from './components/search';
import httpService from './services/httpService';
import StepTwoContainer from './containers/step-two-container';


 class Main extends Component {
   constructor(props) {
     super(props)
     this.state = {
       years: ['1 year','2 years', '3 years'],
       months: ['1 month', '2 months', '3 months','4 months','5 months','6 months', '7 months', '8 months', '9 months', '10 months','11 months', ' 12 months' ],
       address: null,
       errorStatus: false,
       stage: 0
     }
     this.handleSubmit = this.handleSubmit.bind(this);
     this.populateAddressInputElements = this.populateAddressInputElements.bind(this);
   }

   handleSubmit(event) {
     event.preventDefault();
     const formData = new FormData(event.target);
     const query = formData.get('search');
     httpService.getAddressData(query)
      .then(this.onDataResponse.bind(this))
      .catch(err => console.log(err))
   }

   onDataResponse(response) {
    if (response.status === 200) {
      this.setState({
        address: response.data.addresses,
        errorStatus: false
      })
    } else {
      this.setState({
        errorStatus: true,
        stage: +1
      })
    }
  }

  populateAddressInputElements(e) {
    // console.log(e.target)
  }

   render() {
     const addressData = this.state.address  && this.state.address.length && !this.state.errorStatus ? this.state.address : []
     console.log(this.state)
     return (
       <div>
        <form onSubmit={this.handleSubmit}>
          <Dropdown option={this.state.years} />
          <Dropdown option={this.state.months} />
          <Search />
          <button onClick={this.goToNextStep}>Send</button>
         </form>
         <Dropdown onChange={(e) => this.populateAddressInputElements(e)} option={addressData}  />
         <StepTwoContainer data={addressData}/>
       </div>

     )
   }
 }

 ReactDOM.render((
     <Main />
 ), document.getElementById('root'))
