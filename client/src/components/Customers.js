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
        axios.get('/api/customers').then(res => {
            this.setState({customers: res.data})
        })
      }
      toggleCustomerForm = () => {
        this.setState((state, props) => {
            return ({isCustomerFormDisplayed: !state.isCreatureFormDisplayed})
        })
    }
  
    handleChange = (e) => {
      const cloneNewCustomer = {...this.state.newCustomer}
      cloneNewCustomer[e.target.name] = e.target.value
      this.setState({newCustomer: cloneNewCustomer})
    }
  
    createCreature = (e) => {
      e.preventDefault()
      axios
          .post('/api/v1', {
              name: this.state.newCreature.name,
              description: this.state.newCreature.description
          })
          .then(res => {
              const customerList = [...this.state.customer]
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
          <div>
            <h1>Add Name</h1>
            {
                this.state.customers.map(customers => {
                    return (
                        <div key={customers._id}>
                            <Link
                                to={`/${customers._id}`}
                            >
                                {customers.name}
                            </Link>
                        </div>
                    )
                })
            }
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
        )
      }
    
  
}
export default Customers