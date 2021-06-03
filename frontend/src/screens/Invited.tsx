import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'


interface Props {
    
}

export const Invited = (props: Props) => {

    const [invited, setInvited] = useState<any>([]);
    let { code } = useParams<any>();

    useEffect(()=>{
        axios.get(`/guest/${code}`).then(res => {
            const { data } = res
            setInvited(data);
            

        }).catch(()=> {
            return console.log('didn\'t work')
        });
        
    },[code])
    return (
        <div className="rsvp-page">
                    <div className='rsvp-card'>
            {/* {invited.map((person: any)=>{
                return <div key={person.id}> {person.name} </div>
            })} */}
            <h2>Are you attending?</h2>
            <div className="guestList">
                {invited.map((person: any)=>{
                return <div className="guest-rsvp" key={person.id}>
                    <div className="guest"><p>{person.name}</p></div>
                        <div className="rsvp-option">
                            <div className="button r" id="button-1">
                                <input type="checkbox" className="checkbox" />
                            <div className="knobs"></div>
                            <div className="layer"></div>
                        </div>
                    </div>
                </div>
                })}



            </div>
        </div>
        </div>

    )
}
