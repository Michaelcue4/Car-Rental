import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class About extends Component{
    render() {
        return (
            <div>
                <h1> About</h1>
                <Link to ="/"> Homepage</Link>
                {/* /* <Link to="/ProjectsToStart">Projects To Start</Link> */ }
                <h2>Contact us</h2>
            </div>
                )
            }
    
}
export default About