import React from "react";

export default function Navbar() {
    return (
        <div className="topnav" id="myTopnav">
            <a href="/" className="active">Inicio</a>
            <a href="/cvv">Generar CVV</a>
            <a href="/acercade">Acerca de</a>
            <a className="icon">
                <i className="fa fa-bars"></i>
            </a>
        </div>
    )
}
