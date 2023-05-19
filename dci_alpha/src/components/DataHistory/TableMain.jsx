import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
function TableMain({rows}) {
    console.log(rows);
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'node_id', headerName: 'NODE ID', width: 130 },
        { field: 'url', headerName: 'URL', width: 130 },
        // {
        //     field: 'age',
        //     headerName: 'Age',
        //     type: 'number',
        //     width: 90,
        // },
        // {
        //     field: 'fullName',
        //     headerName: 'Full name',
        //     description: 'This column has a value getter and is not sortable.',
        //     sortable: false,
        //     width: 160,
        //     valueGetter: (params) =>
        //         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        // },
    ];
    // const rows = [
    //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    // ];
    return (
        <>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination:{
                            paginationModel: { page: 0, pageSize: 3 },
                        }
                    }}
                    pageSizeOptions={[3,6]}
                    // checkboxSelection
                >

                </DataGrid>
            </div>
            {/* <TableContainer component={Paper}>
                <Table size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell>CY ID</TableCell>
                            <TableCell>MUFFLER_ID</TableCell>
                            <TableCell>PRO_ID</TableCell>
                            <TableCell align='center'>#</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            [...Array(100)].map((i, v) =>
                                <TableRow>
                                    <TableCell>{v}</TableCell>
                                    <TableCell>{v}</TableCell>
                                    <TableCell>{v}</TableCell>
                                    <TableCell align='center'>{v}</TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer> */}
        </>
    )
}

export default TableMain
