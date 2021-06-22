import React from 'react'
import { Link } from 'react-router-dom';
interface Props {
    
}

export const Navigation = (props: Props) => {
    return (
        <div className='row navigation'>
            <Link to='/'> Stefano &#38; Charvonya 2021 </Link>
        </div>
    )
}
