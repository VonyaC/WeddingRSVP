import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom'

export const Invited = () => {

    const [invited, setInvited] = useState<any>([]);
    let { code } = useParams<any>();
    let rsvp : any = [...invited];
    let history = useHistory();

    const updateRsvpStatus = (e : any) => {
        for (let i = 0; i<rsvp.length; i++) {
            if (rsvp[i].id === parseInt(e.target.value)) {
                rsvp[i].rsvp = e.target.checked;
            }
        }
    };
    const submitRsvp = () => {
        // console.log(rsvp);
        const attending : any = []
        axios.patch(`api/guest/${code}`,rsvp).then(res => {
            const {data} = res;
            for (let i = 0; i<data.length; i++) {
                if (data[i].rsvp) {
                    attending.push(data);
                }
            }
            return history.push({pathname: `/wedding-info`, state:{attending: attending.length}});

        })
    };

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
            <h2>Are you attending?</h2>
            <div className="guestList">
                {invited.map((person: any)=>{
                return <div className="guest-rsvp" key={person.id}>
                    <div className="guest"><p>{person.name}</p></div>
                        <div className="rsvp-option">
                            <div className="button r" id="button-1">
                                <input type="checkbox" onChange={updateRsvpStatus} value={person.id} defaultChecked={person.rsvp} className="checkbox" />
                            <div className="knobs"></div>
                            <div className="layer"></div>
                        </div>
                    </div>
                </div>
                })}
            <input type="button" value="Done" className='btn btn-rsvp' onClick={submitRsvp} />



            </div>
            </div>
        </div>

    )
}
