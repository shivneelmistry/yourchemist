import React from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

const DistributorsSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    min-height: 25vh;
    padding: 0;
`

const Item = styled(Paper)(() => ({
    backgroundColor: 'grey',
    padding: 100,
    textAlign: 'center',
    color: "yellowgreen"
}));

const Distributors = () => {
    return (
        <DistributorsSection id="distributors">
            <h1>Distributors </h1>
        </DistributorsSection>
    )
};

export default Distributors;