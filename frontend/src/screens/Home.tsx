import React from 'react'
import engagementPhoto from './../assets/placeholder-img.jpeg'

import { useHistory, Link } from 'react-router-dom';

const Home: React.FC = () => {

    const history = useHistory();
    const goRSVP = () => history.push('/rsvp');
    return (
        <>
            <main className="side-by-side row main">
                <div className="left-box">
                    <h4>August 14th 2021</h4>
                    <h1>Save the date </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In accusamus atque error ipsa, veritatis maiores voluptas temporibus culpa quam sapiente accusantium quisquam ut! Nisi voluptas quidem reprehenderit eligendi voluptatum, iusto nulla voluptate corrupti. Culpa iure, blanditiis unde, ex repudiandae aut itaque expedita veniam praesentium necessitatibus repellendus minima fuga maxime esse similique? Illo nemo sunt necessitatibus harum omnis! Numquam, pariatur quo!</p>
                    <Link to='/rsvp'><button className='btn'>RSVP Now</button></Link>
                    <div className="gift-selection side-by-side">
                        <div className="gift left-box">
                            <h3>Kellys</h3>
                            <p>Stefano and Charvonya Hepburn </p>
                        </div>
                        <div className="gift left-box">
                            <h3> Monetary</h3>
                            <h4>CIBC</h4>
                            <p>Stefano Hepburn or Charvonya Cox </p>
                            <p>Account number: 201655893</p>

                        </div>
                    </div>

                </div>
                <div className="right-box">
                    <img src={ engagementPhoto } alt="placeholder img" className='main-photo'/>
                </div>
            </main>
  
            <footer className="row footer">
                Hepburn 2021
            </footer>
        </>
    )
}

export {Home}