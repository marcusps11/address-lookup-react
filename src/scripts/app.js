import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './components/dropdown';
import Search from './components/search';
import httpService from './services/httpService';

 class Main extends Component {
   constructor(props) {
     super(props)
     this.state = {
       years: ['1 year','2 years', '3 years'],
       months: ['1 month', '2 months', '3 months','4 months','5 months','6 months', '7 months', '8 months', '9 months', '10 months','11 months', ' 12 months' ],
       address: null,
       errorStatus: false
     }
     this.handleSubmit = this.handleSubmit.bind(this);
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
        errorStatus: true
      })
    }
  }

   render() {
     const addressData = this.state.address  && this.state.address.length && !this.state.errorStatus ? this.state.address : []
     console.log(addressData)
     return (
       <div>
        <form onSubmit={this.handleSubmit}>
          <Dropdown option={this.state.years} />
          <Dropdown option={this.state.months} />
          <Search />
          <button>Send</button>
         </form>
         <Dropdown option={addressData} />
       </div>

     )
   }
 }

 ReactDOM.render((
     <Main />
 ), document.getElementById('root'))
