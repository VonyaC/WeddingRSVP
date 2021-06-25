import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Typography } from '../components/Text/Typography';

interface Props {
    
}

export const GuestList = (props: Props) => {
    const [guest, setGuest] = useState<any>([]);

    useEffect(()=>{
        axios.get(`https://wedding-backend-rsvp.herokuapp.com/guests`).then(res => {
            const { data } = res
            setGuest(data);

        }).catch(()=> {
            return console.log('didn\'t work')
        });

    },[])

    return (
        <div className='row'>
            <div><Typography variant='h3'> Coming </Typography></div>
            {
                guest.map((g) => {

                    return (
                        <div key={g.id}> 
                            {g.rsvp && <Typography variant='p'> {` ${g.name} ${g.invite_code}`}</Typography>}
                        </div>
                    )
                })
            }
            <div><Typography variant='h3'>Not coming</Typography></div>

            {
                guest.map((g) => {
                    return (
                        <div key={g.id}> 
                            {!g.rsvp && <Typography variant='p'> {` ${g.name} ${g.invite_code}`}</Typography>}
                        </div>
                    )
                })
            }
    
        </div>
    )
}
