import React from 'react'
import {useLocation} from 'react-router-dom'
import { Card } from '../components/Card/Card';
import { Typography } from '../components/Text/Typography';
import style from '../components/Text/Typography.module.css'

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
                <Typography variant='p'>Thank you. Your response has been recorded.{isAttending && ' Your invitation will be sent at a later date.'}</Typography>
                <Typography variant='p'><span className={style.bold}>You can safely close this page.</span></Typography>   
        </Card>
    )
}
