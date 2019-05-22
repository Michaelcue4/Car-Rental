import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Customers extends Component{
 state = {
    customers: [],
    newCustomer: {
        name: '',
    }, 
    isCustomerFormDisplayed: false 
    }
    componentDidMount = () => {
        axios.get('api/customers').then(res => {
            this.setState({customers: res.data})
        })
      }
      toggleCustomerForm = () => {
        this.setState((state, props) => {
            return ({isCustomerFormDisplayed: !state.isCustomerFormDisplayed})
        })
    }
  
    handleChange = (e) => {
      const cloneNewCustomer = {...this.state.newCustomer}
      cloneNewCustomer[e.target.name] = e.target.value
      this.setState({newCustomer: cloneNewCustomer})
    }
  
    createCustomer = (e) => {
      e.preventDefault()
      axios
          .post('api/customers', {
              name: this.state.newCustomer.name,
          })
          .then(res => {
              const customerList = [...this.state.customers]
              customerList.unshift(res.data)
              this.setState({
                  newCustomer: {
                      name: ''
                  },
                  isCustomerFormDisplayed: false,
                  customers: customerList
              })
          })
  
    }
    render() {
        return (
          <div className = 'Homepage'>
            <h1> New / Existing Customer</h1>
            <h2>Available Inventory -- Please Select </h2>
            <p>Lamborghini  - Hurracan  - Aventador  - Murcelaigo  --900$ Per Day </p> 
            <p>McClaren -  P1  - 720s  - 520s -- 1000 Per Day </p>
            <p>LandRover - RangeRover -- 400 Per Day </p>
            {
                this.state.customers.map(customers => {
                    return (
                    <div className = 'middleName'>
                    
                        <div key={customers._id}>
                            <Link
                                to={`/customers/${customers._id}`}
                            >
                                {customers.name}
                            </Link>
                        </div>
                    </div>
                    )
                })
            }
            <div className = 'button'>
            <button onClick={this.toggleCustomerForm}>+ New Customer</button>
            {
                this.state.isCustomerFormDisplayed
                    ? <form onSubmit={this.createCustomer}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                                value={this.state.newCustomer.name}
                            />
                        </div>
                        
                        <button>Create</button> 
                    </form>
                   
                    
                    : null
            } 
            </div>
            <div className = 'back'>
            <Link to ="/"> Home </Link>
            </div>
          </div>
        )
      }
    
  
}
export default Customers