import React from 'react'
import { Box, Stack, Typography, Card, Paper, TextField, Divider } from '@mui/material'
import { PaperMaster } from '../../styles/qcstdStyled'
function ItemmCrankShaft() {
    const rMaster = [
        { text: 'I.D', width: 150 },
        { text: 'ROUNDNESS', width: 150 },
        { text: 'CYLINDRICITY', width: 150 },
        { text: 'PERPEN', width: 150 },
        { text: 'CONCENTRICITY', width: 150 }
    ]
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <PaperMaster variant='outlined'>
                    <Stack direction='row' spacing={{ xs: 1 }}>
                        <PaperMaster variant='outlined'>
                            <Typography variant=''>O.D FRONT SHAFT</Typography>
                            <Divider className='mt-2 mb-3' />
                            <Stack direction='column' spacing={3}>
                                {
                                    ['O.D FRONT SHAFT', 'ROUNDNESS', 'CYLINDRICITY'].map((item) => (
                                        <TextField type="number" label={item} size='small' fullWidth  InputLabelProps={{shrink:true}}></TextField>
                                    ))
                                }
                            </Stack>
                        </PaperMaster>
                        <PaperMaster variant='outlined'>
                            <Typography variant=''>O.D REAR SHAFT</Typography>
                            <Divider className='mt-2 mb-3' />
                            <Stack direction='column' spacing={3}>
                                {
                                    ['O.D REAR SHAFT', 'ROUNDNESS', 'CYLINDRICITY'].map((item) => (
                                        <TextField type="number" label={item} size='small' fullWidth InputLabelProps={{shrink:true}}></TextField>
                                    ))
                                }
                            </Stack>
                        </PaperMaster>
                        <PaperMaster variant='outlined'>
                            <Typography variant=''>O.D Pin</Typography>
                            <Divider className='mt-2 mb-3' />
                            <Stack direction='column' spacing={3}>
                                {
                                    ['O.D PIN', 'ROUNDNESS', 'CYLINDRICITY'].map((item) => (
                                        <TextField  type="number" label={item} size='small' InputLabelProps={{ shrink:true}} fullWidth></TextField>
                                    ))
                                }
                            </Stack>
                        </PaperMaster>
                    </Stack>
                    <TextField
                    className='mt-3'
                        id="outlined-number"
                        label="ECCENTICITY"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                    />
                </PaperMaster>
            </Box>
        </>
    )
}

export default ItemmCrankShaft