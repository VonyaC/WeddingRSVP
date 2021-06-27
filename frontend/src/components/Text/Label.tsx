import style from './../Text/Typography.module.css'
interface Props {
    htmlFor: string;
    children: any;
}

export const Label = (props: Props) => {
    return (
        <>
            <label htmlFor={props.htmlFor} className={style.label}>{props.children}</label><br />
        </>
    )
}
