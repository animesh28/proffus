import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo.png'

const Container = styled.div`
    margin: 40px 120px;
    width: auto;
    height: 60px;
    display: flex;
    justify-content: space-between;
`

const Nav = styled.div`
    & > a {
        color: #0E79BD;
        font-size: 24px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        
        &:not(:first-of-type) {
            margin-left: 50px;
        }
    } 
`

const LoginBtn = styled.a`
    padding: 15px 75px;
    background: #0E79BD;
    border-radius: 10px;
    color: #fff !important;
`

function Header() {
  return (
    <Container>
        <img src={logo} alt="logo"/>

        <Nav>
            <a href='#'>Category</a>
            <a href='#'>FAQs</a>
            <a href='#'>My Cart</a>
            <LoginBtn href='#'>Login</LoginBtn>
        </Nav>
    </Container>
  )
}

export default Header