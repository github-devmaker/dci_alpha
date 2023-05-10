import React from 'react'
import { Container } from '../styles/layoutStyled'
import { styled,useTheme } from '@mui/material'
import Box from '@mui/material/Box'

const Home = ({headname}) => {    
    return (
        <>
            <Container>
                {headname}
            </Container>            
        </>
        
        

    )
}



export default Home
