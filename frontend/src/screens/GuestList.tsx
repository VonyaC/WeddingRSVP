import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
            <div><h3>Coming</h3></div>
            {
                guest.map((g) => {

                    return (
                        <div key={g.id}> 
                            {g.rsvp && <p> {` ${g.name} ${g.invite_code}`}</p>}
                        </div>
                    )
                })
            }
            <div><h3>Not coming</h3></div>

            {
                guest.map((g) => {
                    return (
                        <div key={g.id}> 
                            {!g.rsvp && <p> {` ${g.name} ${g.invite_code}`}</p>}
                        </div>
                    )
                })
            }
    
        </div>
    )
}
