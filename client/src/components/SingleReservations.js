import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';
import axios from "axios";

class SingleReservation extends Component {
  state = {
      reservation: {
        customerName: '',
        carName: '',
        model: '',
        year: '',
        date: ''
      },
      redirectToHome: false,
      isEditFormDisplayed: false
  }

  componentDidMount = () => {
      axios.get(`/api/reservation/${this.props.match.params.id}`).then(res => {
          this.setState({reservation: res.data})
      })
  }

  deleteReservation = () => {
      axios.delete(`/api/reservation/${this.props.match.params.id}`).then(res => {
          this.setState({redirectToHome: true})
      })
  }

  toggleEditForm = () => {
      this.setState((state, props) => {
          return {isEditFormDisplayed: !state.isEditFormDisplayed}
      })
  }

  handleChange = e => {
      const cloneReservation = {...this.state.reservation}
      cloneReservation[e.target.name] = e.target.value
      this.setState({reservation: cloneReservation})
  }

  updateReservation = (e) => {
      e.preventDefault()
      axios
        .put(`/api/reservation/${this.props.match.params.id}`, {
            customerName: this.state.reservation.customerName
        })
        .then(res => {
            this.setState({reservation: res.data, isEditFormDisplayed: false})
        })
  }

  render() {
    if(this.state.redirectToHome) {
        return (<Redirect to="/reservation" />)
    }

    return (
      <div className = 'Homepage'>
          <div className = 'middleName'>
        <Link to="/">Home</Link>
        <Link to="/reservation"> Reservations</Link>
        </div>
        <h1>Reservation</h1>
        <div className = 'button'>
        <button onClick={this.toggleEditForm}>Edit</button>
        </div>
        {
            this.state.isEditFormDisplayed
                ?<div className = 'button'> 
                <form onSubmit={this.updateReservation}>
                        <label htmlFor="customerName">Name</label>
                        <input
                            id="customerName"
                            type="text"
                            name="customerName"
                            onChange={this.handleChange}
                            value={this.state.reservation.customerName}
                        />
                        
                    <button>Update</button>
                    
                
                </form>
                </div>
                : <div className = 'RevWords'>
                    <div className = 'newBorder'>
                        Name : {this.state.reservation.customerName}
                        </div>
                       <div className = 'newBorder' >car : {this.state.reservation.carName}</div>
                        <div className = 'newBorder'>model : {this.state.reservation.model}</div>
                        <div className = 'newBorder'>year : {this.state.reservation.year}</div>
                        <div className = 'button'>
                    <button onClick={this.deleteReservation}>Delete</button>
                    </div>
                </div>
        }
      </div>
    );
  }
}

export default SingleReservation;