import React, {Fragment} from 'react'


function Header ({ titulo }){

    
    return(
        <Fragment>
            <h1>{ titulo }</h1>
        </Fragment>
       
    )
}

// Este se utiliza cuando no hay retornos de variables o calculos
// const Header = ({titulo}) => ( 
//     <h1>{titulo }</h1>
// );



export default Header;