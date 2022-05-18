import React from 'react'
import styled from 'styled-components'
import topic1 from '../assets/images/topic1.jpg'
import topic2 from '../assets/images/topic2.jpg'
import ReadBtn from './ReadBtn'




function TopicItem({head1,head2}) {
  return (
    <>
    <Container>
        <LeftText1>
            <h3>{head1}</h3>
            <p>
                Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.
            </p>
            <ReadBtn/>
        </LeftText1>
        <RightImg1>

        </RightImg1>
    </Container>
    <Container>
        <LeftText2>
            <h3>{head2}</h3>
            <p>
                Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.
            </p>
            <ReadBtn/>
        </LeftText2>
        <RightImg2>

        </RightImg2>
    </Container>
    </>
  )
}

const Container = styled.div`
    display: flex;
    width: auto;
    height: 60vh;
    margin: 50px 120px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    border-radius: 30px 0 0 30px;
`
const LeftText1 = styled.div`
    width: 45%;
    height: 100%;
    background-color: #fff;
    border-radius: 30px 0 0 30px;
    padding: 50px 0 0 50px;

    h3 {
        font-weight: 500;
        font-size: 28px;
        line-height: 33px;
        text-transform: uppercase;
    }

    p {
        font-weight: 400;
        font-size: 21px;
        line-height: 30px;
        margin-top: 50px;
    }

    a {
        justify-content: left;
    }
`
const RightImg1 = styled.div`
    width: 55%;
    height: 100%;
    background: linear-gradient(90.13deg, #FFFFFF 1.67%, rgba(255, 255, 255, 0) 99.89%), url(${topic1}) no-repeat;
    background-size: cover;
    border-radius: 0px 30px 30px 0px;
`
const LeftText2 = styled(LeftText1)``

const RightImg2 = styled.div`
    width: 55%;
    height: 100%;
    background: linear-gradient(90.13deg, #FFFFFF 1.67%, rgba(255, 255, 255, 0) 99.89%), url(${topic2}) no-repeat;
    background-size: cover;
    border-radius: 0px 30px 30px 0px;
`

export default TopicItem