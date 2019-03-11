import React from 'react';
import styled from 'styled-components';

const Grid = styled.article`
    padding: 10px;
`;

const Business = props => (
    <Grid>
        <p>{props.business.name}</p>
    </Grid>
)

export default Business;