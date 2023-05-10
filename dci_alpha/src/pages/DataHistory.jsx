import React, { useState } from 'react'
import { Container, TagBodyDataHistory, TagFilter } from '../styles/layoutStyled'
import { Breadcrumbs, Button, Card, FormControl, InputLabel, Link, MenuItem, Paper, Select, Typography } from '@mui/material'
import { FaSearchs, FaTrashs } from '../styles/styledElement';
import { BoxBtnSearch } from '../styles/DataHistory/layout';
import TableMain from '../components/DataHistory/TableMain';

function DataHistory() {
    const listFac = [
        { name: 'Factory 1', code: 1 },
        { name: 'Factory 2', code: 2 },
        { name: 'Factory 3', code: 3 },
        { name: 'ODM', code: 'odm' }
    ]
    const [fac, setFac] = React.useState('');
    const [line, setLine] = useState('');
    const handleFac = (event) => {
        setFac(event.target.value)
    }
    const handleLine = (event) => {
        console.log(event.target.value)
    }
    return (
        <>
            <Container>
                <Breadcrumbs>
                    <Link underline='hover'>DATA HISTORY</Link>
                    <Typography color="text.primary">VIEW DETAIL</Typography>
                </Breadcrumbs>

                <TagFilter variant='outlined'>
                    <div>
                        <FormControl sx={{ m: 1, minWidth: 150 }} size='small'>
                            <InputLabel id='demo-simple-select-label'>Factory</InputLabel>
                            <Select labelId="demo-simple-select-label" value={fac} label='Factory' onChange={handleFac}>
                                {
                                    listFac.map((item) => (
                                        <MenuItem key={item.code} value={item.code}>{item.name}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 150 }} size='small'>
                            <InputLabel id='demo-simple-select-label'>Line</InputLabel>
                            <Select labelId="demo-simple-select-label" value={line} label='Line' onChange={handleLine}>
                            </Select>
                        </FormControl>
                    </div>
                    <BoxBtnSearch>
                        <Button variant='contained'><FaSearchs />&nbsp;Search</Button>
                        <Button variant='contained' color='error'><FaTrashs />&nbsp;Clear</Button>
                    </BoxBtnSearch>
                </TagFilter>
                {/* <TagBodyDataHistory variant='outlined'> */}
                    <TableMain/>
                {/* </TagBodyDataHistory> */}
            </Container>
        </>
    )
}

export default DataHistory
