import React from 'react'
import {useLocation} from 'react-router-dom'

interface Props {
    
}
interface LocationState {
    state?: {
        attending?: string;
    }
}
export const WeddingInfo = (props: Props) => {
    const {state} = useLocation<LocationState>();
    let isAttending = false;
    if (state> 0 || typeof(state) !== 'undefined') {
        isAttending = true
        console.log('this was called')
    } else {
        isAttending = false
    }
    
    return (
        <div> 
            {isAttending ? 'hi' : 'no'}
        </div>
    )
}
