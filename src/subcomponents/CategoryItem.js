import React, {useEffect} from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { selectItem } from '../store/category/categorySlice'

const Container = styled.div`
    display: flex;
    justify-content: space-around;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 75px;
    width: 310px;
    height: 188px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    text-align: center;

    img {
        width: 159px;
        height: 100px;
    }

    h3 {
        margin-top: 20px;
        font-size: 24px;
        line-height: 28px;
        text-transform: uppercase;
    }
`

function CategoryItem() {
    let items = useSelector(selectItem)
    
  


    return (
        <Container>
            {
                items ?
                items.map(item => 
                <Card>
                    <img src={item.imageURL} alt='img'/>
                    <h3>{item.name}</h3>
                </Card>
                ): null
            }
        </Container>
    )
    
    
}

export default CategoryItem