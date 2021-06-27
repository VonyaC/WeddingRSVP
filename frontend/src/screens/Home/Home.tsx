import React from 'react'
import engagementPhoto from '../../assets/placeholder-img.jpeg'
import {Button} from '../../components/Button/Button'

import { Link } from 'react-router-dom';
import { H1, H2, H3, H4, P } from '../../components/Text/Typography';

const Home: React.FC = () => {

    return (
        <>
            <main className="side-by-side row main">
                <div className="left-box box">
                    <H4>August 14th 2021</H4>
                    <H1>Save the date </H1>
                    <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In accusamus atque error ipsa, veritatis maiores voluptas temporibus culpa quam sapiente accusantium quisquam ut! Nisi voluptas quidem reprehenderit eligendi voluptatum, iusto nulla voluptate corrupti. Culpa iure, blanditiis unde, ex repudiandae aut itaque expedita veniam praesentium necessitatibus repellendus minima fuga maxime esse similique? Illo nemo sunt necessitatibus harum omnis! Numquam, pariatur quo!</P>
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
                                    <P>Stefano and Charvonya Hepburn </P>
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