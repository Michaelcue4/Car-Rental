import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Home extends Component{
    render() {
        return (
            <div>
                <h1> Exotic Rentals</h1>
                <Link to ="/Customer"> Customer / Reservation </Link>
                {/* /* <Link to="/ProjectsToStart">Projects To Start</Link> */ }
            </div>
                )
            }
    
}
export default Home