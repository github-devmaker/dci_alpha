import { Button, Card, Paper } from "@mui/material";
import styled from "styled-components";
export const Container = styled.div`
    padding:2rem 4rem;
    // max-width:960px;
    margin:0;
`

export const NavMenu = styled.div`
    width:200px;
    background:red;
`
export const TagFilter = styled(Card)`
    display:flex;
    align-items:center;
    margin-top:.5rem;
    margin-bottom:1rem;
    padding:.5rem 1rem;
    justify-content: space-between;
`
export const TagBodyDataHistory = styled(Card)`
    padding:1rem;
    margin-top:.75rem;
`