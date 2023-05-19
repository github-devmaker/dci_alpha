import React, { useState,useEffect } from 'react'
import { Container, TagBodyDataHistory, TagFilter } from '../styles/layoutStyled'
import { Breadcrumbs, Button, Card, FormControl, Input, InputLabel, Link, MenuItem, Paper, Select, Typography } from '@mui/material'
import { FaSearchs, FaTrashs } from '../styles/styledElement';
import { BoxBtnSearch } from '../styles/DataHistory/layout';
import TableMain from '../components/DataHistory/TableMain';
import axios from 'axios';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
function DataHistory() {
    const [data,setData] = useState([])
    const [date, setDate] = React.useState(dayjs('2022-04-17'));
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
    const handleSearch = (event) => {

        alert(date.format('YYYYMMDD'))
        axios.get('https://api.github.com/users/hadley/orgs')
            .then(res => {
                setData(res.data);
            })
    }
    const handleClear = (event) => {
        setData([])
    }
    function handleDate(e){
        console.log(e)
    }
    useEffect(() => {
      console.log(date)
    }, [])
    
    return (
        <>
            <Container>
                <Breadcrumbs>
                    <Link underline='hover'>DATA HISTORY</Link>
                    <Typography color="text.primary">VIEW DETAIL</Typography>
                </Breadcrumbs>

                <TagFilter variant='outlined'>
                    <div>
                        <FormControl sx={{ m: 1, minWidth: 150 }} >
                            <InputLabel id='demo-simple-select-label'>Factory</InputLabel>
                            <Select labelId="demo-simple-select-label" value={fac} label='Factory' onChange={handleFac}>
                                {
                                    listFac.map((item) => (
                                        <MenuItem key={item.code} value={item.code}>{item.name}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 150 }} >
                            <InputLabel id='demo-simple-select-label'>Line</InputLabel>
                            <Select labelId="demo-simple-select-label" value={line} label='Line' onChange={handleLine}>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m:1,minWidth : 150}}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DatePicker defaultValue={dayjs(dayjs().year() + '/01/01')} value={date} onChange={(newValue)=>setDate(newValue)}/>
                            </LocalizationProvider>
                        </FormControl>
                        <FormControl sx={{ m:1,minWidth : 150}}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DatePicker defaultValue={dayjs()}/>
                            </LocalizationProvider>
                        </FormControl>
                    </div>
                    <BoxBtnSearch>
                        <Button variant='contained' onClick={handleSearch}><FaSearchs />&nbsp;Search</Button>
                        <Button variant='contained' color='error' onClick={handleClear}><FaTrashs />&nbsp;Clear</Button>
                    </BoxBtnSearch>
                </TagFilter>
                {/* <TagBodyDataHistory variant='outlined'> */}
                <Breadcrumbs>
                    <Typography style={{ marginBottom: '.5rem' }}>DATA</Typography>
                </Breadcrumbs>
                <TableMain rows = {data} />
                {/* </TagBodyDataHistory> */}
            </Container>
        </>
    )
}

export default DataHistory
