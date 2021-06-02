import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

interface Props {
    
}

export const RsvpForm = (props: Props) => {
    const [code, setCode] = useState('');
    const [statusError, setStatusError] = useState('');
    let [invited, setInvited] = useState<any>([]);
    let history = useHistory();

    const checkReservation = (e: any) => {
        e.preventDefault();
        if (code != '') {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${code}`).then(res => {
                setInvited(res);
                const { data } = res
                if (data) {
                    console.log(data)
                    setStatusError('');
                    return history.push(`/invited/${code}`)
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
                        RSVP for the wedding of Hepburn + Cox.
                    </div>
                    <div className="rsvp-form">
                        <form onSubmit={checkReservation} className='rsvp-form'>
                            <label htmlFor="findRSVP" className='form-label'>Enter your invitation code</label><br />
                            <input type="text" id='findRSVP' className='textfield'name='code' onChange={(e: any)=> { setCode(e.target.value)}}/>
                                {invited.length==0 && <div className='form-error'>{statusError}</div>}
                            <input type="submit" value="Check code" className='btn btn-rsvp'/>
                        </form>
                    </div>
                </div>
        </div>
    )
}
