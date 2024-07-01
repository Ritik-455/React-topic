import React, { useState } from 'react'

function Validation() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [number, setnumber] = useState("")
    const [numbererror, setnumbererror] = useState("")
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleNumber = (e) => {
        setnumber(e.target.value)
    }
    const validateNumber = () => {
        const numberRegex = /^\d{1,10}$/;
        if (!numberRegex.test(number)) {
            setnumbererror("Number should at least 10 digit or not more then 10")
        }
        else {
            setnumbererror("")
        }
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    } ;

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError("Invalid email address");
        } else {
            setEmailError("");
        }
    };

    const validatePassword = () => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError(
                "Password must be at least 8 characters long and contain letters and numbers"
            );
        } else {
            setPasswordError("");
        }
    };

    return (
        <>
            <div className="container mt-5">
           
            <h2 className=" font-monospace text-uppercase">From validation</h2>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        validateEmail();
                        validatePassword();
                        validateNumber();
                    }}
                >
                    <div className=' mt-3'>
                        <label className=' font-monospace fs-3 fw-medium lh-base'>Email:</label>
                        <input
                            type="text"
                            value={email}
                            onChange={handleEmailChange}
                            onBlur={validateEmail}
                            className=' rounded-3 outline_none'
                        />
                        {emailError && <span>{emailError}</span>}
                    </div>
                    <div className=' mt-3'>
                        <label className=' font-monospace fs-3 fw-medium lh-base'>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            onBlur={validatePassword}
                            className=' rounded-3 outline_none'
                        />
                        {passwordError && <span>{passwordError}</span>}
                    </div>
                    <div className=" mt-3">
                        <label className=' font-monospace fs-3 fw-medium lh-base'>Mobile Number:</label>
                        <input type="number"
                            value={number}
                            onChange={handleNumber}
                            onBlur={validateNumber}
                            className=' rounded-3 outline_none' />
                        {numbererror && <span>{numbererror}</span>}
                    </div>
                    <button type="submit" className=' py-2 px-3 rounded-4 border-0 bg-dark-subtle mt-3'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Validation