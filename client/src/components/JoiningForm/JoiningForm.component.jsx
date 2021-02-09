import React, {useState, useEffect} from 'react';


import { useHistory } from 'react-router-dom';
import './JoiningForm.styles.css'; 
import { connect } from 'react-redux';
import { setUniCode } from './../../redux/user/user.action';

const JoiningForm = ({setUniCode}) => {

    const [name, setName] = useState("");
    const [room , setRoom] = useState("");
     const [uni, setUni] = useState(0);
    const rng = () =>{
    setUni(Math.floor(Math.random() * (9999 - 1000 + 1) ) + 1000);
    }
    useEffect(() => {
        rng();
    }, [])
    useEffect(() =>{
        setUniCode(uni)
    },[uni])
    let history = useHistory();

    const handleClick = (event) => {
        event.preventDefault()
        history.push(`/chat?name=${name}&room=${room}`);
       
    }
    return(
        <div className="formOuterContainer">
            <form>
                <input
                    className='form-input'
                    type='text'
                    value = {name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder='Your Name'
                    required
                />
                <input
                    className='form-input'
                    type='text'
                    value={room}
                    onChange={(event) => setRoom(event.target.value)}
                    placeholder='Your Room'
                    required
                />
                <span className="uniSpan"><p>Your unique code is #{uni}</p></span>
                <button 
                    className = 'joinButton'
                    type='submit'
                    onClick={handleClick}
                >
                    Join
                </button>
            </form>
        </div>
        
    )

}

const mapDispatchToProps = (dispatch) =>({
    setUniCode: uni =>dispatch(setUniCode(uni)),
})
export default connect(null, mapDispatchToProps)(JoiningForm);