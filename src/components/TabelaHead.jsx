import React from "react";

const TabelaHead = (props) => {
    return (
    <thead>
        <tr>
            <th colSpan={4}>Tabela de Livros
            <div className="conteiner-setinhas">
                <div onClick={( ) => props.ordenarCrescente( )}>&#129093; </div>
                <div onClick={( ) => props.ordenarDecrescente( )}>&#129095;</div>
                </div>
                </th>
        </tr>
    </thead>
    )
}

export default TabelaHead;