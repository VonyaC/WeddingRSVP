import style from './Button.module.css'

interface Props {
    children?: any;
    variant?: string;
    onClick?: any;
    type?: string;
}

export const Button = (props: Props) => {
    const buttonVariant = () => {
        if (props.variant === 'cta') {
            return style.cta;
        } else if (props.variant === 'rsvp') {
            return style.rsvp;
        } else if (props.variant === 'danger') {
            return style.danger;
        }
        return '';
    }
    return (
        <button className={`${style.btn} ${buttonVariant()}`} onClick={props.onClick}>
            {props.children}
        </button>
    )
}
