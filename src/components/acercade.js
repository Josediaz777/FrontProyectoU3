import React from 'react'
import Navbar from './navbar';
import foto from '../sources/yos.jpg'



function Acercade() {
    return (
        <div>
            <Navbar />
            <div className="acercade">
                <div className='containerpok'>
                    <div className="card2" style={{ width: '400px' }}>
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
                    <div className="card2" style={{ width: '400px' }}>
                        <div>
                            <img src={foto} className="foto" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">: Jose Manuel Tiscareño Moreno</h5>
                            <p className="card-text">:191382</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Acercade;