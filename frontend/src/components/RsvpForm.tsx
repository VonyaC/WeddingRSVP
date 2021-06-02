import React,{useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

interface Props {
    
}

export const RsvpForm = (props: Props) => {
    const [code, setCode] = useState('');
    const [statusError, setStatusError] = useState('');
    let [invited, setInvited] = useState<any>([]);
    let history = useHistory();

    const checkReservation = (e: any) => {
        e.preventDefault();
        // setInvited([{name: 'Stephanie Hepburn'}, {name: 'Wayde Hepburn'}]);
        if (invited.length>0) {
            setStatusError('');
            return history.push(`/invited/${code}`)
        } else {
            return setStatusError('Hmm.. we don\'t recognize this code.');
        }
    };
    
    // useEffect(() => {
        
    // }, []);

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
                    <div>{invited.map((person: any)=> person.name)}</div>
                </div>
        </div>
    )
}
