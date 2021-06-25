import style from './TextField.module.css'
import { Label } from '../Text/Label';
interface Props {
    statusError?: string;
    onChange?: any;
    id?: string;
    label?: string;
    type?: string;
}

export const Textfield = (props: Props) => {
    return (
        <>
            <Label htmlFor={props.id || ''}> {props.label}</Label>
            <input type={props.type || 'text'} id={props.id}className={style.textfield} name='code' onChange={props.onChange}/>
            {props.statusError!=='' && <div className={style.error}>{props.statusError || ''}</div>}
        </>
    )
}


