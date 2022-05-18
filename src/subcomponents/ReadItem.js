import React from 'react'
import styled from 'styled-components'
import ReadBtn from './ReadBtn'

const Container = styled.div`
    margin: 50px 120px;
    background: #FFFFFF;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    padding: 50px;

    h3 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 35px;
        margin-bottom: 50px;
    }
    
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
    }
` 

function ReadItem({head}) {
  return (
    <Container>
        <h3>{head}</h3>
        <p>
            Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.
        </p>
        <ReadBtn/>
    </Container>
  )
}

export default ReadItem