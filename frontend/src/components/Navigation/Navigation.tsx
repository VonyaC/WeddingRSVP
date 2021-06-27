import React from 'react'
import style from './Navigation.module.css';
import { Link } from 'react-router-dom';
interface Props {
    
}

export const Navigation = (props: Props) => {
    return (
        <nav className={style.navigation}>
            <Link to='/'> Stefano &#38; Charvonya 2021 </Link>  
        </nav>
    )
}
