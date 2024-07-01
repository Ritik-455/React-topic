import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div>
            <div className="d-flex gap-3">
                <Link to="/about"> about</Link>
                <Link to="/">Home</Link>
                <Link to="/user">User</Link>
            </div>
            <h2>
                this is about page
            </h2>
        </div>
    )
}

export default About