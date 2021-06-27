import React from 'react'
import {useLocation} from 'react-router-dom'
import { Card } from '../../components/Card/Card';
import { P } from '../../components/Text/Typography';

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

        <Card>
                <P>Thank you. Your response has been recorded.{isAttending && ' Your invitation will be sent at a later date.'}</P>
                <P><span className={''}>You can safely close this page.</span></P>   
        </Card>
    )
}
