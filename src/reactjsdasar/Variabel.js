import React from 'react';

// const harga = 3000;
// harga = 3000;
// const harga = 3000;


// var harga = 20000;
// if (false) {
//     var harga = 30000;
// }
// jika var untuk menampilkan data sesuai kondisi

let harga = 20000;
if (true) {
    let harga = 40000;
}//jika let maka yg muncul adalah yg berada di let tersebut
const Variabel = () => {
    return (
        <div>
            <h2>Harga : {harga}</h2>
        </div>
    )
}

export default Variabel