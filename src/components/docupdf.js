import React, { useEffect } from "react";


import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

const DocuPdf = (cvv) => {

    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    return (
        <Document>
            <Page
                size="A4"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                }}
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        // justifyContent: "center",
                        // alignItems: "center",
                        backgroundColor: "white",
                        padding: 10,
                    }}
                >

                    <Image
                        src={cvv.poema ? cvv.poema.image.secure_url : "..."}
                        style={{ maxWidth: "100px", maxHeight: "100" }}
                    />

                    <Text
                        style={{
                            color: "gray",
                            fontStyle: "italic",
                            fontSize: "10px",
                        }}
                    >
                        Fecha de nacimiento:{cvv.poema ? cvv.poema.fecha_nacimiento : "..."}
                    </Text>
                    <Text
                        style={{
                            color: "gray",
                            fontStyle: "italic",
                            fontSize: "10px",
                        }}
                    >
                        Lugar de Nacimiento:{cvv.poema ? cvv.poema.lugar_nacimiento : "..."}
                    </Text>
                    <Text style={{ color: "#3388af", fontSize: "28px" }}>
                        Nombre Completo :{cvv.poema ? cvv.poema.nombre : "..."} {cvv.poema ? cvv.poema.apellidos : "..."}
                    </Text>

                    <Text style={{ textAlign: "justify", marginTop: "22px" }}>
                        Direccion: {cvv.poema ? cvv.poema.direccion : "..."}
                    </Text>
                    <Text style={{ textAlign: "justify", marginTop: "22px" }}>
                        Telefono: {cvv.poema ? cvv.poema.telefono : "..."}
                    </Text>
                    <Text style={{ textAlign: "justify", marginTop: "22px" }}>
                        Email: {cvv.poema ? cvv.poema.email : "..."}
                    </Text>
                    <Text style={{ textAlign: "justify", marginTop: "22px" }}>
                        Nivel Academico: {cvv.poema ? cvv.poema.nivel_academico : "..."}
                    </Text>
                    <Text style={{ textAlign: "justify", marginTop: "22px" }}>
                        Cursos Extras: {cvv.poema ? cvv.poema.cursos_extras[0] : "..."}
                    </Text>
                    <Text style={{ textAlign: "justify", marginTop: "22px" }}>
                        Experiencia Laboral: {cvv.poema ? cvv.poema.experiencia_profesional : "..."}
                    </Text>
                    <Text style={{ textAlign: "justify", marginTop: "22px" }}>
                        Idiomas: {cvv.poema ? cvv.poema.idiomas[0] : "..."}
                    </Text>
                    <Text style={{ textAlign: "justify", marginTop: "22px" }}>
                        Hobbies: {cvv.poema ? cvv.poema.hobbies[0] : "..."}
                    </Text>
                </View>
            </Page>
        </Document>
    );
};

export default DocuPdf;