"use client";

import { useState } from "react";
import { Button } from "reactstrap";

export function Contador ({posicion, color}) {
    const [numero, setNumero] = useState(0);

    const contarNumero = numero + 1;

    return ( 
        <div style={{ textAlign: posicion }}>
            <p style={{ color: color }}>Contador : {numero}</p>
            <Button onClick={() => setNumero(contarNumero)}>Incrementar</Button>
        </div>
    )
}

