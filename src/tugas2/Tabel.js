import React from "react";
import { Table } from 'react-bootstrap'

const Tabel = ({ bukus, editData, hapusData }) => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Artika's Bakery</h1>
            <Table striped bordered hover style={{ borderRadius: "5px" }}>
                <thead>
                    <tr style={{ backgroundColor: "IndianRed" }}>
                        <th>No</th>
                        <th>Nama Roti</th>
                        <th>Deskripsi Rasa Roti</th>
                        <th>Harga</th>
                        <th>Total Pesanan</th>
                        <th>Total Harga</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {bukus.map((buku, index) => {
                        return (
                            <tr key={index}>
                                <td style={{ backgroundColor: "RosyBrown" }}>{index + 1}</td>
                                <td style={{ backgroundColor: "RosyBrown" }}>{buku.nama}</td>
                                <td style={{ backgroundColor: "RosyBrown" }}>{buku.deskripsi}</td>
                                <td style={{ backgroundColor: "RosyBrown" }}>{buku.harga}</td>
                                <td style={{ backgroundColor: "RosyBrown" }}>{buku.pesan}</td>
                                <td style={{ backgroundColor: "RosyBrown" }}>{buku.harga * buku.pesan}</td>
                                <td style={{ backgroundColor: "RosyBrown" }}><button className="btn btn-warning mr-1" onClick={() => editData(buku.id)}>Edit</button>
                                    <button className="btn btn-danger mr-1" onClick={() => hapusData(buku.id)}>Hapus</button></td>
                            </tr>
                        );
                    })}

                </tbody>
            </Table>
        </div>
    );
};

export default Tabel;