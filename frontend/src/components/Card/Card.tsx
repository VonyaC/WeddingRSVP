import style from './Card.module.css'

interface Props {
    children: any;   
}

export const Card = (props: Props) => {
    return (
        <div className={style.card}>
            {props.children}
        </div>
    )
}
