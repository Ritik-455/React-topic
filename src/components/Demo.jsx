import React from 'react'
import { Link } from 'react-router-dom'

function Demo() {


    return (
        <>

            <div className="d-flex gap-3">
                <Link to="/about"> about</Link>
                <Link to="/">Home</Link>
                <Link to="/user">User</Link>
            </div>
            <h3> hello world this is home page</h3>
        </>
    )
}

export default Demo