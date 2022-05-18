import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo2.png'

const Foot = styled.div`
    height: 40vh;
    background: #0E79BD;
    position: relative;
    display: flex;
    width: 100vw;
    justify-content: flex-end;

    img {
        position: absolute;
        top: 60px;
        left: 150px;
    }
`

const FooterLinks = styled.div`
  display: flex;
  margin: 30px 150px;
`
const Link = styled.ul`
    list-style: none;
    margin: 0 40px;

    li {
        margin: 30px 0;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        color: #FFFFFF;
    }
`

const CopyRight = styled.div`
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%, 0);
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #FFFFFF;
`

function Footer() {
  return (
    <Foot>
        <img src={logo} alt=''/>
        <FooterLinks>
            <Link>
                <li>Support</li>
                <li>About Us</li>
                <li>Privacy Policy</li>
            </Link>
            <Link>
                <li>Terms & Conditions</li>
                <li>Return & Refund Policy</li>
                <li>Shipping & Delivery Policy</li>
            </Link>
        </FooterLinks>
        <CopyRight>
            Sea Basket I All Rights Reserved I 2021 Copyright
        </CopyRight>
    </Foot>
  )
}

export default Footer