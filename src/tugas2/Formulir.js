import React from "react";
import { Row, Col, Form, Button } from 'react-bootstrap'

const Formulir = ({ nama, deskripsi, harga, pesan, handleChange, handleSubmit, id }) => {
    return (
        <div className="mt-3">
            <Row style={{ backgroundColor: "PeachPuff", borderRadius: "5px" }}>
                <Col>
                    <h4>{id ? "Edit Data" : "Tambah Data"}</h4><hr />
                </Col>
            </Row>
            <Row style={{ backgroundColor: "Salmon", borderRadius: "5px" }}>
                <Col>
                    <Form onSubmit={handleSubmit} >
                        <Form.Group className="mb-3" controlId="nama">
                            <Form.Label>Nama roti</Form.Label>
                            <Form.Control type="text" name="nama" style={{ backgroundColor: "LightSalmon" }}
                                value={nama} onChange={(event) => handleChange(event)} placeholder="Nama Roti" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="deskripsi">
                            <Form.Label>Deskripsi Rasa Roti</Form.Label>
                            <Form.Control as="textarea" rows="3" style={{ backgroundColor: "LightSalmon" }} name="deskripsi" value={deskripsi} onChange={(event) => handleChange(event)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="harga">
                            <Form.Label>Harga Roti </Form.Label>
                            <Form.Control type="number" style={{ backgroundColor: "LightSalmon" }} value={harga} onChange={(event) => handleChange(event)} name="harga" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="pesan">
                            <Form.Label>Total Pesanan </Form.Label>
                            <Form.Control type="number" style={{ backgroundColor: "LightSalmon" }} value={pesan} onChange={(event) => handleChange(event)} name="pesan" />
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{ backgroundColor: "Maroon", marginLeft: "500px" }}>
                            Submit
                        </Button><br /><br />
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Formulir;