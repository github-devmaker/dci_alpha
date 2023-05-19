import React from 'react'
import { Container } from '../styles/layoutStyled'
import { Button } from '@mui/material'
function Modal() {
    const [open,setOpen] = React.useState(false);
    function handleClickOpen(){
        setOpen(true);
    }
    return (
        <Container>
            <h3>การใช้ Modal ใน React</h3>
            <Button variant='contained' onClick={handleClickOpen}>Show Modal</Button>
        </Container>
    )
}

export default Modal
