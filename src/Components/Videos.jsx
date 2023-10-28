import React from 'react'
import '../App.css'

export default function Videos({course ,channel ='Coder dost' ,views ,created ,isVerified ,id ,children}) {
    let imageURL = `https://source.unsplash.com/random/290x200?sig=${id}`
    return (
        <>
            <div className='card'>
                <img src={imageURL} alt=""/>
                <h3>{course}</h3>
                <p>{channel}{JSON.parse(isVerified) && '✔️'}</p>
                <span>{views}. </span>
                <span>{created}</span>
                {children}
            </div>
        </>
    )
}
