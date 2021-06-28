import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { H3, P } from '../../components/Text/Typography';

interface Props {
    
}

export const GuestList = (props: Props) => {
    const [guest, setGuest] = useState<any>([]);
    const [coming, setComing] = useState<any>([]);
    const [notComing, setNotComing] = useState<any>([]);

    useEffect(()=>{
        axios.get(`https://wedding-backend-rsvp.herokuapp.com/guests`).then(res => {
            const { data } = res

            const coming: any = [];
            const notComing: any = []
            
            for (let i = 0; i< data.length; i++) {
                if (data[i].rsvp) {
                     coming.push(data[i]);
                } else {
                    notComing.push(data[i]);
                }
            } 
            setComing(coming);
            setNotComing(notComing);
            setGuest(data);

        }).catch(()=> {
            return console.log('didn\'t work')
        });

    },[])

    return (
        <div className='row'>
            <div className='guestList'>
                <div><H3> Coming </H3></div>
                <table>
                {
                    coming.map((g, index) => {

                        return (
                            <tr key={g.id}> 
                                <td> {index+1}.</td> 
                                <td>{g.name}</td> 
                                <td>{g.invite_code}</td>
                            </tr>
                        )
                    })
                }
                </table>
            </div>
            <div className='guestList'>
                <div><H3>Not coming</H3></div>
                <table>
                {
                    notComing.map((g, index) => {
                        return (
                            <tr key={g.id}> 
                                <td> {index+1}.</td> 
                                <td>{g.name}</td> 
                                <td>{g.invite_code}</td>
                            </tr>
                        )
                    })
                }
                </table>
            </div>
            <P>Total: {guest.length}</P>
    
        </div>
    )
}
