import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';
import axios from "axios";

class SingleCustomer extends Component {
  state = {
      customer: {
          name: ''
      },
      redirectToHome: false,
      isEditFormDisplayed: false
  }

  componentDidMount = () => {
      axios.get(`/api/customers/${this.props.match.params.id}`).then(res => {
          this.setState({customer: res.data})
      })
  }

  deleteCustomer = () => {
      axios.delete(`/api/customers/${this.props.match.params.id}`).then(res => {
          this.setState({redirectToHome: true})
      })
  }

  toggleEditForm = () => {
      this.setState((state, props) => {
          return {isEditFormDisplayed: !state.isEditFormDisplayed}
      })
  }

  handleChange = (e) => {
      const cloneCustomer = {...this.state.Customer}
      cloneCustomer[e.target.name] = e.target.value
      this.setState({customer: cloneCustomer})
  }

  updateCustomer = (e) => {
      e.preventDefault()
      axios
        .put(`/api/customers/${this.props.match.params.id}`, {
            name: this.state.customer.name
        })
        .then(res => {
            this.setState({customer: res.data, isEditFormDisplayed: false})
        })
  }

  render() {
    if(this.state.redirectToHome) {
        return (<Redirect to="/customer" />)
    }

    return (
      <div>
        <Link to="/customer">Customers/Reservations</Link>
        <h1>Single customer</h1>
        <button onClick={this.toggleEditForm}>Edit</button>
        {
            this.state.isEditFormDisplayed
                ? <form onSubmit={this.updateCustomer}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.customer.name}
                        />
                    </div>
                    <button>Update</button>
                </form>
                : <div>
                    <div>
                        Name: {this.state.customer.name}
                    </div>
                    <button onClick={this.deleteCustomer}>Delete</button>
                </div>
        }
      </div>
    );
  }
}

export default SingleCustomer;