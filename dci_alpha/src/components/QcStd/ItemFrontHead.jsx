import React from 'react'
import { Stack, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react';
function ItemFrontHead({ register, errors, }) {
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const rMaster = [
        { text: 'I.D', width: 150, id: 'fhRank' },
        { text: 'ROUNDNESS', width: 150, id: 'fhJudgeRoundness' },
        { text: 'CYLINDRICITY', width: 150, id: 'fhCylindricity' },
        { text: 'PERPEN', width: 150, id: 'fhPerpendicularity' },
        { text: 'CONCENTRICITY', width: 150, id: 'fhConcentricity' }
    ]
    return (
        <> 
            <Stack direction='column' spacing={{ xs: 2 }}>
                {
                    rMaster.map((master) => (
                        <>
                            <TextField {...register(master.id, { required: true })} key={master.id.toString()} label={master.text} size='small' fullWidth InputLabelProps={{ shrink: true }} type='number'  inputProps={{ maxLength: 11,step:'any' }}></TextField>
                        </>
                    ))
                }
            </Stack>
        </>
    )
}

export default ItemFrontHead