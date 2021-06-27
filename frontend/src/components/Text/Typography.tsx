import style from './Typography.module.css';
interface Props {
    children: any;
}

export const H1 = (props: Props) => {
    return (
        <>
            <h1 className={style.H1}> {props.children} </h1>
        </>
    )
}

export const H2 = (props: Props) => {
    return (
        <>
            <h2 className={style.H2}> {props.children} </h2>
        </>
    )
}

export const H3 = (props: Props) => {
    return (
        <>
            <h3 className={style.H3}> {props.children} </h3>
        </>
    )
}

export const H4 = (props: Props) => {
    return (
        <>
            <h4 className={style.H4}> {props.children} </h4>
        </>
    )
}

export const H5 = (props: Props) => {
    return (
        <>
            <h5 className={style.H5}> {props.children} </h5>
        </>
    )
}
export const H6 = (props: Props) => {
    return (
        <>
            <h6 className={style.H6}> {props.children} </h6>
        </>
    )
}
export const P = (props: Props) => {
    return (
        <>
            <p className={style.P}> {props.children} </p>
        </>
    )
}
export const SmallText = (props: Props) => {
    return (
        <>
            <p className={style.small}> {props.children} </p>
        </>
    )
}
