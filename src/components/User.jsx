import React from 'react'
import { Link} from 'react-router-dom'

const User = () => {
    return (
        <>
            <div className="d-flex gap-3">
                <Link to="/about"> about</Link>
                <Link to="/">Home</Link>
                <Link to="/user">User</Link>
            </div>
            <h2>this is user name</h2>
        </>
    )
}

export default User