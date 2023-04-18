import Rows, { RowsProps } from '../atoms/Rows';

import { BoxTable } from './MoleculesStyle/Table';
import React from 'react'
import TableHeadCel from '../atoms/TableHeadCel';

type TableProps = {
    data: any;
}


const Table = ({ data }: TableProps) => {
    console.log(data)
    return (
        <BoxTable>
            <thead>
                
                <TableHeadCel titulo="Nome" />
                <TableHeadCel titulo="Nº Clientes" />
                <TableHeadCel titulo="Nº Usuários" />
                <TableHeadCel titulo="Editar" />
                <TableHeadCel titulo="Situação" />
                

                
            </thead>
            <tbody>
                {data.map((row: RowsProps, index: any) =>
                    <Rows key={index}  nome={row.nome} clientes={row.clientes} usuarios={row.usuarios} situacao={row.situacao} />
                )}
            </tbody>
        </BoxTable>
    )
}

export default Table
