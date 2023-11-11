import React, { useState } from 'react'
import './addVideo.css';


let intialValues = {
    course: '',
    views: '',
    isVerified: '',
    channel : 'Coder Dost',
    created :'5 month ago'
}

function AddVideo({ newVedioObject }) {
    const [newVedio, setFinalValues] = useState(intialValues)

    const clearFields = () => {
        setFinalValues({ ...intialValues });
    }

    function handleAddCource(e) {
        e.preventDefault()
        if (newVedio.course === undefined || newVedio.views === undefined || newVedio.isVerified === undefined) {
            alert('All Field must be filled');
            console.log(newVedio.course)
            console.log(newVedio.views)
            console.log(newVedio.isVerified)
        }
        else {
            newVedioObject(newVedio)
            clearFields()
        }
    }

    function handleOnchange(e) {
        // newVedio[e.target.name] = e.target.value;
        // setFinalValues(e.target.value)
        setFinalValues({...newVedio,[e.target.name]: e.target.value})
    }

    return (
        <div className='form-data'>
            <form>
                <input type="text" name="course" value={newVedio.course} onChange={handleOnchange} placeholder="Title" />
                <input type="text" name="views" value={newVedio.views} onChange={handleOnchange} placeholder="Views" />
                <div className='radio-button'>
                    <input type="radio" value={newVedio.isVerified} checked={newVedio.isVerified === 'true'} name="isVerified" onChange={handleOnchange} />
                    <label>Verified</label>
                    <input type="radio" value={newVedio.isVerified} checked={newVedio.isVerified === 'false'} name="isVerified" onChange={handleOnchange} />
                    <label>Not Verified</label>
                </div>
                <button onClick={handleAddCource}> Add Course </button>
            </form>
        </div>
    )
}


export default AddVideo;
