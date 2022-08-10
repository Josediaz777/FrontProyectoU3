import React from 'react'
import Navbar from './navbar';


function CVV() {
    return (

        <div className="cvv">
            <Navbar />
            <div className="title">
                <h1 className="titulo">Curriculum Vitae</h1>
                <div className="cvv">
                    <form>
                        <label>
                            foto:
                            <input type="file" className="name" placeholer="Ingresa Nombre" />
                        </label>
                    </form>
                    <br></br>
                    <form>
                        <label>
                            Nombre(s):
                            <input type="text" className="name" placeholer="Ingresa Nombre" />
                        </label>
                    </form>
                    <br></br>
                    <form>
                        <label>
                            Apellido(s):
                            <input type="text" className="Lname" placeholer="Ingresa Nombre" />
                        </label>
                    </form>
                    <br></br>
                    <form>
                        <label>
                            Fecha de Nacimiento:
                            <input type="date" className="nacimiento" placeholer="Ingresa Nombre" />
                        </label>
                    </form>
                    <br></br>
                    <form>
                        <label>
                            Lugar de Nacimiento:
                            <input type="text" className="nacimiento" placeholer="Ingresa Nombre" />
                        </label>
                    </form>
                    <br></br>
                    <form>
                        <label>
                            email:
                            <input type="email" className="email" placeholer="Ingresa Nombre" />
                        </label>
                    </form>
                    <br></br>
                    <form>
                        <label>
                            Numero:
                            <input type="number" className="number" placeholer="Ingresa Nombre" />
                        </label>
                    </form>
                    <br></br>
                    <form>
                        <label>
                            Domicilio:
                            <input type="domicilio" className="domicilio" placeholer="Ingresa Nombre" />
                        </label>
                    </form>
                    <br></br>
                    <form>
                        <label>
                            Formacion Academica:
                            <input type="text" className="email" placeholer="Ingresa Nombre" />
                        </label>
                    </form>


                </div>
            </div>

        </div>

    );
}

export default CVV;