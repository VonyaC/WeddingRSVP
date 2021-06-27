import React from 'react'
import { GuestForm } from './GuestForm'

interface Props {
    
}

export const AddGuest = (props: Props) => {
    return (
        <div className='row'>
            <GuestForm />
        </div>
    )
}
