import React, {useState, useEffect} from 'react';
import axios from 'axios';

interface Props {
    
}

// const [guest, setGuest] = useState<any>([]);

export const GuestList = (props: Props) => {
    const [guest, setGuest] = useState<any>([]);
    useEffect(()=>{
        axios.get(`https://wedding-backend-rsvp.herokuapp.com/guests`).then(res => {
            const { data } = res
            setGuest(data);

        }).catch(()=> {
            return console.log('didn\'t work')
        });
        
    },[guest])

    return (
        <div className='row'>
            {guest.map(g => {return <div key={g.id}> {g.name}</div>})}
        </div>
    )
}
