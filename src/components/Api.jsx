import React, { useState, useEffect } from 'react'
const Api = () => {
    const [dogImage, setDogImage] = useState(null)
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random/3")
            .then(response => response.json())
            .then(data => setDogImage(data.message))
    }, [])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    return (

        <>
            <div className="container mt-5">
                <h3 className=' text-uppercase'> api practice 1</h3>
                {dogImage && dogImage.map((dog) => <img width={"200px"} height={"200px"} src={dog}></img>)}

                <h3 className=' text-uppercase mt-5'> api practice 2</h3>

                <div>
                    {data && data.map((item, index) => (
                        <div key={index}>
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Api