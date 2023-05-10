import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

function TableMain() {
    return (
        <>
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
