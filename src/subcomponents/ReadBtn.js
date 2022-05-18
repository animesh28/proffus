import React from 'react'
import styled from 'styled-components'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 22px;
    text-transform: uppercase;
    color: #0E79BD;
    margin-top: 50px;
    cursor: pointer;
     svg {
         margin-left: 15px;
     }
`

function ReadBtn() {
  return (
    <Button>
        Read More <ArrowForwardIosIcon/>
    </Button>
  )
}

export default ReadBtn