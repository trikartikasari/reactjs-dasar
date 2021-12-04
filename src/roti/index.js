import React from "react";
import NavbarComponent from "./NavbarComponent";
import TokoRoti from "./TokoRoti"

export default class Crud extends React.Component {
    render() {
        return (
            <div>
                <NavbarComponent />
                <div className="container mt-4">
                    <TokoRoti />
                </div>
            </div>
        )
    }
}