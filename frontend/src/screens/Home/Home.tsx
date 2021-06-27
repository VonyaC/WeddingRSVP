import React from 'react'
import engagementPhoto from '../../assets/placeholder-img.jpeg'
import {Button} from '../../components/Button/Button'

import { Link } from 'react-router-dom';

const Home: React.FC = () => {

    return (
        <>
            <main className="side-by-side row main">
                <div className="left-box box">
                    <h4>August 14th 2021</h4>
                    <h1>Save the date </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In accusamus atque error ipsa, veritatis maiores voluptas temporibus culpa quam sapiente accusantium quisquam ut! Nisi voluptas quidem reprehenderit eligendi voluptatum, iusto nulla voluptate corrupti. Culpa iure, blanditiis unde, ex repudiandae aut itaque expedita veniam praesentium necessitatibus repellendus minima fuga maxime esse similique? Illo nemo sunt necessitatibus harum omnis! Numquam, pariatur quo!</p>
                    <Link to='/rsvp'><Button variant='cta'> RSVP Now</Button></Link>

                    </div>
                <div className="right-box box">
                    <img src={ engagementPhoto } alt="placeholder img" className='main-photo'/>
                </div>
            </main>
            <section className='row'>
            <div className="gift-section">
                        <h2>Want to bless our marriage?</h2>
                        <div className="gift-selection side-by-side">
                            <div className="gift box">
                                <h3>Gift selection</h3>
                                <div className="rsvp-item">
                                    <h4 className='gift-subheader'>Kellys</h4>
                                    <p>Stefano and Charvonya Hepburn </p>
                                </div>

                            </div>
                            <div className="gift box">
                                <h3> Monetary <span className='preferred'>Preferred</span></h3>
                                <div className="rsvp-item">
                                    <h4 className='gift-subheader'>CIBC</h4>
                                    <p>Stefano Hepburn or Charvonya Cox </p>
                                    <p><span>Account number:</span> 201736587</p>
                                    <p><span>Branch:</span> East bay street (Downtown) </p>
                                </div>
                                <div className="rsvp-item">
                                    <h4 className='gift-subheader'>Cash</h4>
                                </div>
                                <div className="rsvp-item">
                                    <h4 className='gift-subheader'>Cheque</h4>
                                    <p>Stefano Hepburn or Charvonya Cox </p>
                                </div>

                            </div>
                        </div>
                        </div>
            </section>
  
            <footer className="row footer">
                <p>Hepburn wedding 2021 | Built by Stefano and Charvonya</p>
            </footer>
        </>
    )
}

export {Home}