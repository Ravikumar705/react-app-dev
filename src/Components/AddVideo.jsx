import React, { useState } from 'react'
import './addVideo.css';

let newVedio = {
    channel: 'Coder Dost',
    created: '5 month ago',
};

function AddVideo({ newVedioObject }) {
    const [inputTitleVaue, setTitleInputValue] = useState('')
    const [inputViewVaue, setInputViewValue] = useState('')
    const [radioValue, setRadioValue] = useState('')


    function handleAddCource(e) {
        e.preventDefault()
        if (newVedio.course === undefined || newVedio.views === undefined || newVedio.isVerified === undefined)
            alert('All Field must be filled');
        else {
            newVedioObject(newVedio)
            setTitleInputValue('')
            setInputViewValue('')
            setRadioValue('')
        }
    }
    function handleTitleOnchange(e) {
        newVedio[e.target.name] = e.target.value;
        setTitleInputValue(e.target.value)
    }
    function handleViewOnchange(e) {
        newVedio[e.target.name] = e.target.value;
        setInputViewValue(e.target.value)
    }
    function handleRadioOnchange(e) {
        newVedio[e.target.name] = e.target.value;
        setRadioValue(e.target.value)
    }


    return (
        <div className='form-data'>
            <form>
                <input type="text" name="course" value={inputTitleVaue} onChange={handleTitleOnchange} placeholder="Title" />
                <input type="text" name="views" value={inputViewVaue} onChange={handleViewOnchange} placeholder="Views" />
                <div className='radio-button'>
                    <input type="radio" value={true} checked={radioValue === 'true'} name="isVerified" onChange={handleRadioOnchange} />
                    <label>Verified</label>
                    <input type="radio" value={false} checked={radioValue === 'false'} name="isVerified" onChange={handleRadioOnchange} />
                    <label>Not Verified</label>
                </div>
                <button onClick={handleAddCource}> Add Course </button>
            </form>
        </div>
    )
}


export default AddVideo;
