import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { H3, P } from '../../components/Text/Typography';

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
            <div><H3> Coming </H3></div>
            {
                guest.map((g) => {

                    return (
                        <div key={g.id}> 
                            {g.rsvp && <P> {` ${g.name} ${g.invite_code}`}</P>}
                        </div>
                    )
                })
            }
            <div><H3>Not coming</H3></div>

            {
                guest.map((g) => {
                    return (
                        <div key={g.id}> 
                            {!g.rsvp && <P> {` ${g.name} ${g.invite_code}`}</P>}
                        </div>
                    )
                })
            }
    
        </div>
    )
}
