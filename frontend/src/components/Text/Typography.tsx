import style from './Typography.module.css';
interface Props {
    variant: string;
    children: any;
}

export const Typography = (props: Props) => {
    return (
        <>
            {
                props.variant === 'h1' && <h1 className={style.H1}> {props.children} </h1>
            }
            {
                props.variant === 'h2' && <h2 className={style.H2}> {props.children} </h2>
            }
            {
                props.variant === 'h3' && <h3 className={style.H3}> {props.children} </h3>
            }
            {
                props.variant === 'h4' && <h4 className={style.H4}> {props.children} </h4>
            }
            {
                props.variant === 'h5' && <h5 className={style.H5}> {props.children} </h5>
            }
            {
                props.variant === 'h6' && <h6 className={style.H6}> {props.children} </h6>
            }
            {
                props.variant === 'p' && <p className={style.P}> {props.children} </p>
            }
            {
                props.variant === 'small' && <p className={style.small}> {props.children} </p>
            } 
        </>
    )
}
