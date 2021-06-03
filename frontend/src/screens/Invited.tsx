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
        
    },[])
    return (
        
        <div>
            {invited.map((person: any)=>{
                console.log(person);
                return <div key={person.id}> {person.name} </div>
            })}
        </div>
    )
}
