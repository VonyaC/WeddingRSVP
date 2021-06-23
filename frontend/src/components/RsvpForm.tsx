import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

export const RsvpForm = () => {
    const [code, setCode] = useState('');
    const [statusError, setStatusError] = useState('');
    let history = useHistory();

    const checkReservation = (e: any) => {
        e.preventDefault();
        if (code !== '') {
            axios.get(`https://wedding-backend-rsvp.herokuapp.com/guest/${code}`).then(res => {
                const { data } = res
                if (data.length > 0) {
                    setStatusError('');
                    return history.push(`/invited/${code}`);
                } else {
                    return setStatusError('Hmm.. we don\'t recognize this code.');
                }
            }).catch(()=> {
                return setStatusError('Hmm.. we don\'t recognize this code.');
            });
        } else {
            return setStatusError('Sorry, do you have a code?');
        }
    };

    return (
        <div className="rsvp">
                <div className="rsvp-card">
                    <div className="intro-box">
                        <h4>RSVP for the wedding of Hepburn + Cox.</h4>
                    </div>
                    <div className="rsvp-form">
                        <form onSubmit={checkReservation} className='rsvp-form'>
                            <label htmlFor="findRSVP" className='form-label'>Enter your invitation code</label><br />
                            <input type="text" id='findRSVP' className='textfield'name='code' onChange={(e: any)=> { setCode(e.target.value)}}/>
                                {statusError!=='' && <div className='form-error'>{statusError}</div>}
                            <input type="submit" value="Check code" className='btn btn-rsvp'/>
                        </form>
                        <div className="intro-box">
                        <p className='small-text'>* July 15th will be the last day to RSVP your attendance. Contact Charvonya or Stefano if there are any changes after this date.</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}
