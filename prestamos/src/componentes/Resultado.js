import React from "react";

const Resultado = ({total, plazo, cantidad}) => ( 
        <div className= "resultado">

            <h2>Resumen</h2>
            <p>La cantidad solicitada es: $ {cantidad}</p>
            <p>A pagar en: {plazo} meses</p>
            <p>Su pago mensual es de: $ { (total / plazo).toFixed(2) }</p>
            <p>Cantidad total a pagar: $ {total}</p>

        </div>
);

 
export default Resultado;


