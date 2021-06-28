import React, {useState} from 'react';
import { Button } from '../../components/Button/Button';
import { Textfield } from '../../components/TextField/Textfield';
import axios from 'axios';

interface Props {
    
}

// const generateCode = () => {
//     let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let randomString = ''; 
    
//     for (let i = 0; i < 6; i++) {
//       randomString += characters.charAt(Math.floor(Math.random()*characters.length))
//     }
//     return randomString;
// }

export const GuestForm = (props: Props) => {
    const [inviteCode, setInviteCode] = useState('');
    const [formInputs, setFormInputs] = useState<any>([{id: 1, formName:"Primary guest", name: '', invite_code: ''}])

    const handleChange = (e, index) => {
        const list : any= [...formInputs];
        list[index]['name'] = e.target.value;
        list[index]['invite_code'] = inviteCode;
        setFormInputs(list);
    }
    // useEffect(()=> {
    //     setInviteCode(generateCode)
    // },[])

    const addToGuestList = (e) => {
        e.preventDefault();
        console.log(formInputs)

        axios.post(`https://wedding-backend-rsvp.herokuapp.com/guests`, formInputs).then(res => {
            const { data } = res
            setInviteCode(data);
            window.location.reload();

        }).catch(()=> {
            return console.log('didn\'t work')
        });
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
                            <Textfield id={f.formName} statusError={''} label={f.formName} onChange={(e: any)=> { handleChange(e, i)}}/>
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
