import React from 'react'
import engagementPhoto from '../../assets/engagement-1.jpg'
import {Button} from '../../components/Button/Button'

import { Link } from 'react-router-dom';
import { H1, H2, H3, H4, P } from '../../components/Text/Typography';

const Home: React.FC = () => {

    return (
        <>
            <main className="side-by-side row main">
                <div className="left-box box">
                    <H4>Hepburn's wedding 2021</H4>
                    <H1>Reserve your seat </H1>
                    <P>Stefano Hepburn and Charvonya Cox, together since 2018, have decided to take the next level and solidify their commitment to each other in holy matrimony. Join us on August 14th at 2 PM as we begin our lifelong journey as Husband and Wife.</P>
                    <Link to='/rsvp'><Button variant='cta'> RSVP Now</Button></Link>

                    </div>
                <div className="right-box box">
                    <img src={ engagementPhoto } alt="placeholder img" className='main-photo'/>
                </div>
            </main>
            <section className='row'>
            <div className="gift-section">
                        <H2>Want to bless our marriage?</H2>
                        <div className="gift-selection side-by-side">
                            <div className="gift box">
                                <H3>Gift selection</H3>
                                <div className="rsvp-item">
                                    <H4>Kellys</H4>
                                    <P>Stefano Hepburn and Charvonya Cox </P>
                                </div>

                            </div>
                            <div className="gift box">
                                <H3> Monetary <span className='preferred'>Preferred</span></H3>
                                <div className="rsvp-item">
                                    <H4> CIBC</H4>
                                    <P>Stefano Hepburn or Charvonya Cox </P>
                                    <P><span>Account number:</span> 201736587</P>
                                    <P><span>Branch:</span> East bay street (Harbour Bay) </P>
                                </div>
                                <div className="rsvp-item">
                                    <H4>Cash</H4>
                                </div>
                                <div className="rsvp-item">
                                    <H4>Cheque</H4>
                                    <P>Stefano Hepburn or Charvonya Cox </P>
                                </div>

                            </div>
                        </div>
                        </div>
            </section>
  
            <footer className="row footer">
                <P>Hepburn wedding 2021 | Built by Stefano and Charvonya</P>
            </footer>
        </>
    )
}

export {Home}