import React from 'react'
import '../App.css'

export default function Videos({course ,channel ='Coder dost' ,views ,created ,isVerified ,id }) {
    let URL = `https://source.unsplash.com/random/300x200?sig=${id}`
    return (
        <>
            <div className='card'>
                <img src={URL} alt=""/>
                <h3>{course}</h3>
                <p>{channel}{isVerified && '✔️'}</p>
                <span>{views}. </span>
                <span>{created}</span>
            </div>
        </>
    )
}
