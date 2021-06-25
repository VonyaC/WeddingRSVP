import React, {useEffect, useState} from 'react';
import { Button } from './Button/Button';

interface Props {
    
}

const generateCode = () => {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomString = ''; 
    
    for (let i = 0; i < 6; i++) {
      randomString += characters.charAt(Math.floor(Math.random()*characters.length))
    }
    return randomString;
}

export const GuestForm = (props: Props) => {
    const [inviteCode, setInviteCode] = useState('');
    const [formInputs, setFormInputs] = useState<any>([{id: 1, formName:"Primary guest", name: '', invite_code: ''}])

    const handleChange = (e, index) => {
        const list : any= [...formInputs];
        list[index]['name'] = e.target.value;
        list[index]['invite_code'] = inviteCode;
        setFormInputs(list);
    }
    useEffect(()=> {
        setInviteCode(generateCode)
    },[])

    const addToGuestList = (e) => {
        e.preventDefault();
        console.log(formInputs)
    }
    const addGuestBox= (e) => {
        e.preventDefault();
        const newForm = {id: formInputs.length+1, formName:`Guest #${formInputs.length+1}`, name: '', invite_code: '', };
        const list = [...formInputs, newForm]
        setFormInputs(list)
    }

    const deleteGuestBox = (e) => {
        e.preventDefault();
        const list = [...formInputs]
        if (formInputs.length > 1) {
            list.pop()
        }
        setFormInputs(list)
    }

    return (
        <>
            {
                formInputs.map((f, i)=> {
                    return (
                        <div key={f.id}>
                            <label htmlFor={f.formName} className='form-label'>{f.formName}</label><br />
                            <input type="text" id={f.formName} className='textfield' name={f.formName } onChange={(e: any)=> { handleChange(e, i)}}/>
                                {/* {statusError!=='' && <div className='form-error'>{statusError}</div>} */}
                        </div>
                    )
                })
            }
            <div className='btn-group side-by-side'>
                <Button variant='cta' onClick={addGuestBox}> Add guest field</Button>
                <Button variant='danger' onClick={deleteGuestBox}> Remove field </Button>

            </div>
            <div className='btn-group'>
                <Button variant='rsvp' onClick={addToGuestList}>Add to list</Button>
            </div>
                

        </>
    )
}
