import React, {useEffect, useState} from 'react'

interface Props {
    
}

export const Invited = (props: Props) => {

    const [invited, setInvited] = useState<any>([]);

    useEffect(()=>{
        setInvited([{id: 1, name: 'Steph'}, {id: 2, name: 'Wayde'}]);
        
    },[])
    return (
        
        <div>
            {invited.map((person: any)=>{
                return <div key={person.id}> {person.name} </div>
            })}
        </div>
    )
}
