import axios from 'axios';
import React, { useEffect, useState } from 'react'


function Login() {
    const [usuario, setUsuario] = useState(null);


    useEffect(() => {
        axios.get(`https://cvvproject.herokuapp.com/users`).then(value => {
            setUsuario(value.data);
            console.log(value.data);
        })
    }, []);

    const modelUser = {
        correo: "",
        password: "",
    }

    function Verificar() {
        // usuario.map(value, index => {
        //     console.log(value);
        //     if(modelUser.correo == && modelUser.password){}
        // })
        for (var i = 0; i < usuario.length; i++) {
            if (modelUser.correo == usuario[i].correo && modelUser.password == usuario[i].password) {
                console.log("si existen estas credenciales");
                window.location.href = "/";
            }

        }

    }

    return (
        <div className="bodylog">

            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <div className="form">
                <h3>Login Here</h3>

                <label >Correo</label>
                <input onChange={(e) => { modelUser.correo = e.target.value }} type="text" placeholder="Email or Phone" id="username" />

                <label>Password</label>
                <input onChange={(e) => { modelUser.password = e.target.value }} type="password" placeholder="Password" id="password" />

                <button onClick={() => Verificar()}>Log In</button>
                <div className="social">
                    <div className="go"><i className="fab fa-google"></i>  Google</div>
                    <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
                </div>
            </div>
        </div>
    );
}

export default Login;