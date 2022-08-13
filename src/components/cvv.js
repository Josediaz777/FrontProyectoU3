import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import React, { useState, useEffect } from 'react'
import DocuPdf from './docupdf';
import Navbar from './navbar';
import VistaWeb from './vistaweb';
import axios from 'axios'


function CVV() {


    const Menu = () => {

        return (
            <nav>
                <button onClick={() => {
                    setVerWeb(!verWeb);
                    setVerPdf(!verWeb);

                }}
                    className='btnC'>{verWeb ? "Ocultar web" : "Ver Web"}</button>
                <button onClick={() => {
                    setVerWeb(false);
                    setVerPdf(!verPdf);

                }}
                    className='btnC'>{verPdf ? "Ocultar PDF" : "Ver PDF"}</button>
                <button className='btnC'>Descargar PDF</button>
            </nav>
        );


    };

    const model = {
        nombre: "",
        apellidos: "",
        fecha_nacimiento: "",
        lugar_nacimiento: "",
        direccion: "",
        telefono: "",
        email: "",
        nivel_academico: "",
        cursos_extras: "",
        experiencia_profesional: "",
        idiomas: "",
        hobbies: "",
        cont_ref: {
            nombre: "",
            telefono: "",
            correo: ""
        }

    }
    // IMagen
    var bodyFormData = new FormData();


    const [cvv, setCvv] = useState(null);
    const [verWeb, setVerWeb] = useState(null);
    const [verPdf, setVerPdf] = useState(null);
    function fetchCvv() {
        fetch("https://cvvproject.herokuapp.com/curriculum")
            .then((response) => response.json())
            .then((data) => {
                var ultimo = data ? data.length - 1 : 0;
                setCvv(data[ultimo]);
                console.log(data[ultimo]);
            });
    }

    function postCvv() {
        axios({
            method: "post",
            url: "https://cvvproject.herokuapp.com/curriculum",
            data: bodyFormData,
            headers: {
                'Content-Type': `multipart/form-data; boundary=${bodyFormData._boundary}`,
            }
        }).then((data) => {
            console.log(data);
            fetchCvv()
        })
        for (const value of bodyFormData.values()) {
            console.log(value);
        }
    }
    React.useEffect(() => {
        fetchCvv();
    }, []);

    const [file, setfile] = useState();

    const fileOnload = async (e) => {
        const result = e.target.result
        setfile(result)
    }

    const addImage = async (e) => {
        const file = e.target.files[0], imageType = /image.*/
        const reader = new FileReader()
        reader.onload = await fileOnload
        reader.readAsDataURL(file)
    }
    return (

        <div className="register">
            <Navbar />
            <Menu />
            {verWeb ? <VistaWeb cvv={cvv} /> : null}
            {verPdf ? <p>PDF</p> : null}
            <br />
            <div className="row">
                <div className="col-md-3 register-left">
                    <h3>CVV</h3>
                </div>
                <div className="col-md-9 register-right">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h2 className="register-heading">Apply </h2>

                            <div className="row register-form">
                                <div className="col-md-6">
                                    <div className="form-group2">
                                        <input className="form-control" type="file" onChange={(e) => { bodyFormData.set("image", e.target.files[0]) }} />
                                        <img className='btnSubir' src={file ? file : " "} placeholder="img" />


                                    </div>
                                    <br></br><br></br>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Nombres *" onChange={(e) => { bodyFormData.set("nombre", e.target.value) }} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Apellidos *" onChange={(e) => { bodyFormData.set("apellidos", e.target.value) }} />
                                    </div>
                                    <div className="form-group">
                                        <input type="date" className="form-control" placeholder="Fecha de Nacimiento" onChange={(e) => { bodyFormData.set("fecha_nacimiento", e.target.value) }} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Lugar de Nacimiento *" onChange={(e) => { bodyFormData.set("lugar_nacimiento", e.target.value) }} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Dirección *" onChange={(e) => { bodyFormData.set("direccion", e.target.value) }} />
                                    </div>
                                    <div className="form-group">
                                        <input type="number" className="form-control" placeholder="Telefono *" name='telefono' onChange={(e) => { bodyFormData.set("telefono", e.target.value) }} />
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Your Email *" onChange={(e) => { bodyFormData.set("email", e.target.value) }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mt-2">
                                        <select className="form-control" onChange={(e) => { bodyFormData.set("nivel_academico", e.target.value) }}>
                                            <option className="hidden" defaultValue>Nivel Academico</option>
                                            <option>Primaria</option>
                                            <option>Secundaria</option>
                                            <option>Secundaria trunca</option>
                                            <option>Preparatoria</option>
                                            <option>Preparatoria trunca</option>
                                            <option>Universidad</option>
                                            <option>Universidad trunca</option>
                                            <option>Otro</option>
                                            <option>No aplica</option>
                                        </select>
                                    </div>
                                    <div className="form-group mt-2">
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Cursos extra*" onChange={(e) => { bodyFormData.set("cursos_extras", e.target.value) }}></textarea>
                                    </div>
                                    <div className="form-group mt-2">
                                        <textarea className="form-control" id="exampleFormControlTextarea2" rows="3" placeholder="Experiencia profesional*" onChange={(e) => { bodyFormData.set("experiencia_profesional", e.target.value) }}></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Idiomas *" onChange={(e) => { bodyFormData.set("idiomas", e.target.value) }} />
                                    </div>
                                    <div className="form-group mt-2">
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Hobbies*" onChange={(e) => { bodyFormData.set("hobbies", e.target.value) }}></textarea>
                                    </div>
                                    <h2 className='refer' >Referencias</h2>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Nombre*" onChange={(e) => { model.cont_ref.nombre = e.target.value }} />
                                        <input type="number" className="form-control" placeholder="Telefono*" onChange={(e) => { model.cont_ref.telefono = e.target.value }} />
                                        <input type="email" className="form-control" placeholder="Correo *" onChange={(e) => { model.cont_ref.correo = e.target.value }} />
                                    </div>

                                    <PDFDownloadLink
                                        document={<DocuPdf poema={cvv} />}
                                        fileName="poema.pdf"
                                    >
                                        <button variant="info">Descargar PDF</button>
                                    </PDFDownloadLink>

                                    <div style={{ minHeight: "100vh" }}>
                                        <Menu />
                                        {cvv ? (
                                            <>
                                                {verWeb ? <VistaWeb poema={cvv} /> : null}
                                                {verPdf ? (
                                                    <PDFViewer style={{ width: "100%", height: "90vh" }}>
                                                        <DocuPdf poema={cvv} />
                                                    </PDFViewer>
                                                ) : null}
                                            </>
                                        ) : null}
                                    </div>
                                    <input type="submit" className="btnRegister" value="Create CVV" onClick={() => postCvv()} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default CVV;