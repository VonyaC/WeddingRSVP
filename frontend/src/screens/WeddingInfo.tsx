import React from 'react'
import {useLocation} from 'react-router-dom'

interface Props {
    
}
export const WeddingInfo = (props: Props) => {
    
    const {state} = useLocation<any>();
    const { attending } = state
    
    let isAttending = false;
    if (typeof(state) !== 'undefined' && attending > 0) {
        isAttending = true
    } else {
        isAttending = false
    }
    
    return (
        <div className='row'> 
            <div className="rsvp-card">
                <p>Thank you. Your response has been recorded.{isAttending && ' Your invitation will be sent at a later date.'}</p>
                <p><span>You can safely close this page.</span></p>
            </div>
        </div>
    )
}
