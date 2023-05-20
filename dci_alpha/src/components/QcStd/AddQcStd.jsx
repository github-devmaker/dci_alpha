import React, { useRef } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BodyAddQcStd, Container } from '../../styles/layoutStyled'
import { FormControl, InputLabel, OutlinedInput, CircularProgress, Input, InputAdornment, Alert, AlertTitle, Typography, TextField, Select, MenuItem, Box, Divider, Stack, Breadcrumbs, Link, Button, Grid } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import ChildQcStd from './ChildQcStd';
import ItemFrontHead from './ItemFrontHead';
import ItemRearHead from './ItemRearHead';
import ItemmCrankShaft from './ItemmCrankShaft';
import { FaPencilAlt } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { baseUrl } from '../../../vite.config';
function AddQcStd() {
    const baseUrl = 'http://localhost:5019';
    const navigete = useNavigate();
    const [type, setType] = useState('fh');
    const [viewMaster, setViewMaster] = useState(null);
    const [dots, setDots] = useState('');
    const [no, setNo] = useState('');
    const [ser, setSer] = useState('');
    const [pos3, setPos3] = useState('');
    const [pos456, setPos456] = useState('35A');
    const [alert,setAlert] = useState(false);
    const { register, handleSubmit, onChange, watch, formState: { errors } } = useForm();
    const doSubmit = (data) => {
        data[data.type + 'Id'] = data.ser + '' + pos3 + '' + '' + data.no;
        data['fhId1'] = 0;
        data['fhId2'] = 0;
        data['fhId3'] = 0;
        data['fhRoundness1'] = 0;
        data['fhRoundness2'] = 0;
        data['fhRoundness3'] = 0;
        data['fhJudgement'] = 'OK';
        data['fhRankC'] = 'A';
        setprogress(true)
        const interval = setInterval(() => {
            setDots(dots => dots + '.')
        }, 1000);
        navigete('/qcstd');
        // axios.post(baseUrl + '/fh/add', data).then(function (res) {
        //     if (res.status) {
        //         navigete('/qcstd')
        //     }
        // }).catch(function (error) {
        //     setprogress(false);
        //     setAlert(true);
        // })
    }
    const rTypeTool = [
        { text: 'FRONT HEAD_MASTER', code: 'fh', pattern: [5] },
        { text: 'REAR HEAD_MASTER', code: 'rh', pattern: [6] },
        { text: 'CRANK SHAFT_MASTER', code: 'cs', pattern: [7] },
        { text: 'CYLINDER_MASTER', code: 'cy', pattern: [3, 4] },
        { text: 'PISTON_MASTER', code: 'pt', pattern: [1, 2] }
    ]
    const [progress, setprogress] = useState(false)
    const [pattern, setPattern] = useState([]);
    const rView = {
        'fh': <ItemFrontHead register={register} errors={errors} />,
        'rh': <ItemRearHead register={register} errors={errors} />,
        'cs': <ItemmCrankShaft register={register} errors={errors} />
    };
    useEffect(() => {
        setPattern(rTypeTool[rTypeTool.map(item => item.code).indexOf('fh')].pattern)
        setPos3(rTypeTool[0].pattern[0])
        setViewMaster(rView['fh'])
    }, [])


    const handleType = (event) => {
        setType(event.target.value)
        setViewMaster(rView[event.target.value]);
        let PatternSelected = rTypeTool[rTypeTool.map(item => item.code).indexOf(event.target.value)].pattern
        setPattern(PatternSelected)
        setPos3(PatternSelected[0])
    }

    const handleSerno = (event) => {
        if (event.target.value.length >= 2) {
            document.querySelector('#no').focus();
        }
    }

    const handleNo = (e) => {
        if (e.target.value.length >= 8) {
            document.querySelector('#model').focus();
        }
    }

    const handlePattern = (e) => {
        const indexType = rTypeTool.map(item => item.code).indexOf(type);
        let pattern = e.target.value;
        if (!rTypeTool[indexType].pattern.includes(Number(pattern))) {
            setPos3('')
            return false;
        }
        setPos3(e.target.value)
    }


    return (
        <Container>
            <Breadcrumbs className='mb-2'>
                <Link underline='hover' color='inherit'>
                    เครื่องมือวัด
                </Link>
                <Link underline='hover'>
                    เพิ่มเครื่องมือวัด (MASTER)
                </Link>
            </Breadcrumbs>
            <form id='formAddQcStd' onSubmit={handleSubmit(doSubmit)}>
                <BodyAddQcStd variant='outlined'>
                    {
                        progress && <Alert icon={false} className='mb-3' variant="filled" style={{ justifyContent: 'center', alignItems: 'center' }} >
                            <CircularProgress color="inherit" />&nbsp;
                            <span className='pl-3'>กำลังบันทึกข้อมูล เมื่อสำเร็จระบบจะท่านกลับยังหน้าแรก {dots} </span>
                        </Alert>
                    }
                    {/* <CircularProgress style={{ display: !progress ? 'none' : '' }} /> */}
                    <Box style={{ display: progress ? 'none' : '' }}>
                        <Grid className='mb-2' container spacing={2}>
                            <Grid xs={12}>
                                <Typography sx={{ pb: 1 }} variant="button" display="block" gutterBottom>ชื่อเครื่องมือวัด</Typography>
                                <Select {...register('type')} value={type} onChange={handleType} sx={{ m: 1, minWidth: 200 }} fullWidth style={{ margin: 0 }}>
                                    {rTypeTool.map((item) => (
                                        <MenuItem key={item.code} value={item.code}>{item.text}</MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                            {/* <Grid xs={6} container> */}
                            <Grid xs={3}>
                                <TextField {...register('ser', { required: true, minLength: { value: 2 } })} label='SER. NO.' onKeyUp={handleSerno} inputProps={{ maxLength: 2, readOnly: true }} defaultValue='00' onChange={(e) => setSer(e.target.value)} fullWidth></TextField>
                                {/* {
                                        errors.ser ? (
                                            <>
                                                {
                                                    errors.ser.type === 'required' && (<p role="alert" className='text-red-500 mt-1'>- กรุณากรอกข้อมูลให้ครบถ้วน</p>)
                                                }
                                                {
                                                    errors.ser.type === 'minLength' && (<p role="alert" className='text-red-500 mt-1'>- อย่างน้อย 2 ตัวอักษร</p>)
                                                }
                                            </>
                                        ) : null
                                    } */}
                            </Grid>
                            <Grid xs={2}>
                                {/* <TextField label='MASTER' value={pos3} {...register('pos3', {})} inputProps={{ readOnly: false }} onChange={(e)=>setPos3(e.target.value)} onKeyUp={handlePattern}></TextField> */}
                                <Select value={pos3} fullWidth {...register('pos3', {})} onChange={handlePattern}>
                                    {
                                        pattern.map((item) => (
                                            <MenuItem key={item} value={item} selected>{item}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </Grid>
                            <Grid xs={2}>
                                <TextField inputProps={{ readOnly: true }} defaultValue='35A' {...register('pos456')} value={pos456}></TextField>
                            </Grid>
                            <Grid xs={5}>
                                <TextField id='no' {...register('no', { required: true, minLength: { value: 5 } })} inputProps={{ maxLength: 5 }} onChange={(e) => setNo(e.target.value)} placeholder='' onKeyUp={handleNo} fullWidth focused></TextField>
                                {
                                    errors.no ? (
                                        <>
                                            {
                                                errors.no.type === 'required' && (<p role="alert" className='text-red-500 mt-1'>- กรุณากรอกข้อมูลให้ครบถ้วน</p>)
                                            }
                                            {
                                                errors.no.type === 'minLength' && (<p role="alert" className='text-red-500 mt-1'>- อย่างน้อย 5 ตัวอักษร</p>)
                                            }
                                        </>
                                    ) : null
                                }
                            </Grid>
                        </Grid>
                        <Typography sx={{ pb: 1 }} variant="button" display="block" gutterBottom>จุดการควบคุม MASTER WORK</Typography>
                        {viewMaster}
                        <Box className='pt-2'>
                        </Box>
                        {
                            alert && <Box>
                                <Alert severity="error">ไม่สามารเพิ่มข้อมูลได้ ติดต่อ IT 250 (เบียร์)</Alert>
                            </Box>
                        }
                        <Box sx={{ pt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                            <Stack spacing={1} direction='row'>
                                <Button variant='contained' form='formAddQcStd' type='submit'><FaPencilAlt />&nbsp;เพิ่ม</Button>
                                <Button variant='contained' color='error'>ล้าง</Button>
                            </Stack>
                        </Box>

                    </Box>
                </BodyAddQcStd>
            </form>

        </Container>
    )
}

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        let id = setInterval(() => {
            savedCallback.current();
        }, delay);
        return () => clearInterval(id);
    }, [delay]);
}

export default AddQcStd