import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Home extends Component{
    render() {
        return (
            <div>
                <h1> Exotic Rentals</h1>
                <Link to ="/customer"> Make Customer Inquiry </Link>
                <Link to ="/customer/reservation">  Make Reservation </Link>
                
            </div>
                )
            }
    
}
export default Home