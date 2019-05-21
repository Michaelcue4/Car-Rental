import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Reservation extends Component{
 state = {
    reservation: [],
    newReservation: {
        carName: '',
        model: '',
        year: '',
        date: '',
        description:''
    }, 
    isReservationFormDisplayed: false 
    }
    componentDidMount = () => {
        axios.get('api/customers/reservation').then(res => {
            this.setState({reservations: res.data})
        })
      }
      toggleReservationForm = () => {
        this.setState((state, props) => {
            return ({isReservationFormDisplayed: !state.isReservationFormDisplayed})
        })
    }
  
    handleChange = (e) => {
      const cloneNewReservation = {...this.state.newReservation}
      cloneNewReservation[e.target.name] = e.target.value
      this.setState({newReservation: cloneNewReservation})
    }
  
    createCustomer = (e) => {
      e.preventDefault()
      axios
          .post('api/customers/reservation', {
              name: this.state.newCustomer.name,
          })
          .then(res => {
              const reservationList = [...this.state.reservation]
              reservationList.unshift(res.data)
              this.setState({
                  newReservation: {
                    carName: '',
                    model: '',
                    year: '',
                    date: '',
                    description:''
                  },
                  isReservationFormDisplayed: false,
                  reservations: reservationList
              })
          })
  
    }
    render() {
        return (
          <div>
            <h1> New / Existing Customer</h1>
            {
                this.state.reservations.map(reservations => {
                    return (
                        <div key={reservations._id}>
                            <Link
                                to={`/customers/reservation/${reservations._id}`}
                            >
                                {reservations.name}
                            </Link>
                        </div>
                    )
                })
            }
            <button onClick={this.toggleReservationForm}>+ New Reservation</button>
            {
                this.state.isReservationFormDisplayed
                    ? <form onSubmit={this.createReservation}>
                        <div>
                            <label htmlFor="carName">Car Model</label>
                            <input
                                id="name"
                                type="text"
                                name="carName"
                                onChange={this.handleChange}
                                value={this.state.newReservation.carName}
                            /><label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                                value={this.state.newReservation.date}
                            /><label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                                value={this.state.newReservation.model}
                            /><label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                                value={this.state.newReservation.year}
                            />
                        </div>
                        <button>Create</button>
                    </form>
                    : null
            }<div>
            <Link to ="/"> Home </Link>
            </div>
          </div>
        )
      }
    
  
}
export default Reservation