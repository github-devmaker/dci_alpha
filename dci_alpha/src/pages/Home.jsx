import React from 'react'
import { Container } from '../styles/layoutStyled'

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
