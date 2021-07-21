import React,{useState} from 'react';

import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {Button} from '../../components/Button/Button';
import {Card} from '../../components/Card/Card';
import { Textfield } from '../../components/TextField/Textfield';
import { H4, SmallText } from '../../components/Text/Typography';



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
                <Card>
                    <div className="intro-box">
                        <H4>RSVP for the wedding of Hepburn + Cox.</H4>
                    </div>
                    <div className="rsvp-form">
                        <form onSubmit={checkReservation} className='rsvp-form'>
                            <Textfield id='findRSVP' statusError={statusError} label='Enter your invitation code' onChange={(e: any)=> setCode(e.target.value.toUpperCase())}/>
                            <Button variant='rsvp'>Check code</Button>
                        </form>
                        <div className="intro-box">
                            <SmallText>* July 21st will be the last day to RSVP your attendance. Contact Charvonya or Stefano if there are any changes after this date.</SmallText>
                        </div>
                    </div>
                </Card> 
        </div>
    )
}
