import React from 'react'
import { Stack, TextField } from '@mui/material'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';


function ChildQcStd({ type }) {
    // const rMaster = [
    //     {
    //         'fr': [
    //             { text: 'I.D', width: 150 },
    //             { text: 'ROUNDNESS', width: 150 },
    //             { text: 'CYLINDRICITY', width: 150 },
    //             { text: 'PERPEN', width: 150 },
    //             { text: 'CONCENTRICITY', width: 150 }
    //         ]
    //     },
    //     {
    //         'rh': [
    //             { text: 'I.D', width: 150 },
    //             { text: 'ROUNDNESS', width: 150 },
    //             { text: 'CYLINDRICITY', width: 150 },
    //             { text: 'PERPEN', width: 150 }
    //         ]
    //     }
    // ]
    const [typeMaster, setType] = useState('');
    useEffect(() => {
        setType(type);
    });
    return (
        <>
            {typeMaster}
            <Stack direction='column' spacing={{ xs: 1 }}>
                {
                    rMaster[typeMaster].map((master) => (
                        <TextField key={master.text} label={master.text} size='small' fullWidth></TextField>
                    ))
                }
            </Stack>
        </>
    )
}

export default ChildQcStd