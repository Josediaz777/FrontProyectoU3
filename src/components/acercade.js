import React from 'react'
import Navbar from './navbar';
import foto from '../sources/yos.jpg'
import foto2 from '../sources/alan.jpg'



function Acercade() {
    return (
        <div className="acercade">
            <Navbar />
            <div className='containerpok'>
                <div className="card2" style={{ width: '450px' }}>
                    <div>
                        <img src={foto} className="foto" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">: Jose Manuel Tiscareño Moreno</h5>
                        <p className="card-text">:191382</p>
                    </div>

                </div>
            </div>
            <div className='containerpok'>
                <div className="card2" style={{ width: '450px' }}>
                    <div>
                        <img src={foto2} className="foto" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">: Alan Jesus Rivera Reyes</h5>
                        <p className="card-text">:191338</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Acercade;