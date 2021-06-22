import React from 'react';
import { RsvpForm } from '../components/RsvpForm';

const RSVP: React.FC = () => {
    return (
        <div className='rsvp-page row'>
            <RsvpForm />
        </div>
    )
}

export {RSVP}