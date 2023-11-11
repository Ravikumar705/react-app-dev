import React, { useState } from 'react'
import './addVideo.css';


let intialValues = {
    course: '',
    views: '',
    isVerified: '',
    created: '1 Month ago',
    channel: 'Coder Dost'
}


function AddVideo({ newVedioObject }) {
    const [newVedio, setFinalValues] = useState(intialValues)
    // console.log(newVedio)

    const clearFields = () => {
        setFinalValues({ ...intialValues, course:'', channel : ''});
    }

    function handleAddCource(e) {
        e.preventDefault()
        if (newVedio.course === '' || newVedio.views === '' || newVedio.isVerified === '') {
            alert('All Field must be filled');
        }
        else {
            newVedioObject(newVedio)
            // console.log(newVedio)
            clearFields()
        }
    }

    function handleOnchange(e) {
        // newVedio[e.target.name] = e.target.value;
        // setFinalValues(e.target.value)
        setFinalValues({ ...newVedio, [e.target.name]: e.target.value })
    }

    return (
        <div className='form-data'>
            <form>
                <input type="text" name="course" value={newVedio.course} onChange={handleOnchange} placeholder="Title" />
                <input type="text" name="views" value={newVedio.views} onChange={handleOnchange} placeholder="Views" />
                <div className='radio-button'>
                    <input type="radio" value={true} checked={newVedio.isVerified === 'true'} name="isVerified" onChange={handleOnchange} />
                    <label>Verified</label>
                    <input type="radio" value={false} checked={newVedio.isVerified === 'false'} name="isVerified" onChange={handleOnchange} />
                    <label>Not Verified</label>
                </div>
                <button onClick={handleAddCource}> Add Course </button>
            </form>
        </div>
    )
}


export default AddVideo;
