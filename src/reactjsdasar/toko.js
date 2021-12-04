import React from "react";

const makanans = [
    {
        nama: "Roti Tawar",
        QTY: 12,
        harga: 12000,
    },
    {
        nama: "Roti Gandum",
        QTY: 9,
        harga: 10000,
    },
    {
        nama: "Bagel",
        QTY: 15,
        harga: 15000,
    },
    {
        nama: "Brioche",
        QTY: 25,
        harga: 30000,
    },
    {
        nama: "Challah",
        QTY: 10,
        harga: 23000,
    },
    {
        nama: "Ciabatta",
        QTY: 29,
        harga: 17000,
    },
    {
        nama: "Corn rye bread",
        QTY: 3,
        harga: 150000,
    },
    {
        nama: "Pan blanco",
        QTY: 13,
        harga: 25000,
    },
    {
        nama: "Breadsticks",
        QTY: 30,
        harga: 10000,
    },
    {
        nama: "Muffin",
        QTY: 21,
        harga: 40000,
    },
];

//Reduce
const total_bayar = makanans.reduce((total_harga, makanan) => total_harga + makanan.harga, 0);

const Map = () => {
    return (
        <div>
            <h2>Maping</h2>
            < table >
                <tr>
                    <th>No.</th>
                    <th>Nama Roti</th>
                    <th>QTY</th>
                    <th>Harga</th>
                    <th>Total Harga</th>
                </tr>

                {makanans.map((makanan, index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{makanan.nama}</td>
                        <td>{makanan.QTY}</td>
                        <td>{makanan.harga}</td>
                        <td>{makanan.harga * makanan.QTY}</td>
                    </tr>
                ))}
            </table>


            <h2>Map Filter Harga yang lebih dari 11.000</h2>
            <ul>
                {makanans
                    .filter((makanan) => makanan.harga > 11000)
                    .map((makanan, index) => (
                        <p>
                            {index + 1}. {makanan.nama} = Harga Rp {makanan.harga}
                        </p>
                    ))}
            </ul>

            <h3>Total Bayar : {total_bayar}</h3>
        </div >
    );
};

export default Map;