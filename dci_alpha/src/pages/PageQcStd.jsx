import React, { useEffect, useState } from 'react'
import { Container, TagButton, TagFilter } from '../styles/layoutStyled'
import { Button, InputLabel, FormControl, Box, Paper } from '@mui/material'
import { FaSearch } from 'react-icons/fa'
import { FaPencilAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
function PageQcStd() {
    const baseUrl = 'http://localhost:5019';
    const [open, setOpen] = React.useState(false);
    const navigation = useNavigate();
    const [rows, setRows] = useState([]);
    const columns = [
        { field: 'fhId', headerName: 'SER.NO.', flex: 1 },
        { field: 'fhDate', headerName: 'วันที่บันทึก', flex: 1 }
    ];
    useEffect(() => {
        axios.post(baseUrl + '/qcstd/getall', {})
            .then(function (res) {
                setRows(res.data);
            })
            .catch(function (error) {
                console.log(error)
            });
    }, [])
    return (
        <Container>
            <TagButton>
                <Button variant='contained' onClick={() => navigation('/qcstd/add')}><FaPencilAlt />&nbsp;&nbsp;เพิ่มเครื่องมือวัด (MASTER)</Button>
            </TagButton>
            <TagFilter variant='outlined'>
                <div>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel></InputLabel>
                    </FormControl>
                </div>
                <Button variant='contained'><FaSearch />&nbsp;Search</Button>
            </TagFilter>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    }
                }} getRowId={row => row.fhId}
                    pageSizeOptions={[10, 50, 100]} disableColumnSelector disableColumnMenu >
                </DataGrid>
            </div>
        </Container>
    )
}

export default PageQcStd