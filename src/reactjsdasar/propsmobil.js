import React from 'react';

export default class StateProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobil: "Pajero, Avanza ,Toyota"
        }
    }
    gantiMobil = (mobil_baru) => {
        this.setState({
            mobil: mobil_baru,
        })//kalau state bisa diganti
    }
    render() {
        return (
            <div>
                <h2>{this.state.mobil}</h2>
                <button onClick={() => this.gantiMobil("Pajero, Toyota")}>Ganti Mobil</button>
            </div >
        )
    }
}