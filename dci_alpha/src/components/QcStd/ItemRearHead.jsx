import React from 'react'
import { Stack, TextField } from '@mui/material'
import { useState } from 'react';
import { useEffect } from 'react';
function ItemRearHead() {
    const rMaster = [
        { text: 'I.D', width: 150 },
        { text: 'ROUNDNESS', width: 150 },
        { text: 'CYLINDRICITY', width: 150 },
        { text: 'PERPEN', width: 150 },
    ]
    return (
        <>
            <Stack direction='column' spacing={{ xs:2 }}>
                {
                    rMaster.map((master) => (
                        <TextField key={master.text} label={master.text} size='small' fullWidth InputLabelProps={{shrink:true}} type='number'></TextField>
                    ))
                }
            </Stack>
        </>
    )
}

export default ItemRearHead