import React from "react";
import ReactDOM from "react-dom";

export default function Portals({ children }){
    return ReactDOM.createPortal(
        <div className="Protals">{ children }</div>,
        document.querySelector('body'),
    );
}