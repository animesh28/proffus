import React, {useEffect, useState} from 'react'
import Header from "./components/Header";
import bg from './assets/images/bg.jpg'
import styled from 'styled-components'
import hero from './assets/images/hero.png'
import CategoryItem from "./subcomponents/CategoryItem"
import { setCategories } from './store/category/categorySlice'
import db, { storage } from './firebase'
import { collection, getDocs } from "firebase/firestore"
import { useDispatch } from 'react-redux'


const BgCover = styled.img`
  width: 200vw;
  min-height: 100vh;
  display: flex;
  flex-grow: 1;
  height: auto;
  opacity: .1;
  position: absolute;
  z-index: -10;
`;

const HeroImg = styled.img`
  display: block;
  margin: auto;
  margin-top: 45px;
`

const HowItWorks = styled.div`
  margin: 50px 0 120px 0;
  
  h2 {
    font-family: 'Roboto';
    font-size: 48px;
    font-weight: 500;
    line-height: 56px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 50px;
  }

  span {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    display: block;
  }
`
const Categories = styled.div`
  h2 {
    font-size: 36px;
    line-height: 42px;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    margin: 0 0 60px 120px;
  }
`


function App() {

  const dispatch = useDispatch()
    let res = []
    
    useEffect(() => {  
        getCategoryList().then(() => {dispatch(
            setCategories({
                item: res
            })
          )
        })

    }, [])
    

  const getCategoryList = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));
    res = []
    querySnapshot.forEach((doc) => {
        let data = doc.data();
        res = [...res, {...data}]
    });
  }
    
  return (
    <div className="App">
      <BgCover src={bg} alt="background-cover"/>
      <Header/>
      <HeroImg src={hero} alt="hero"/>
      <HowItWorks>
        <h2>How it works?</h2>  
        <span>Sea Basket delivers fresh sourced seafood in a few easy clicks</span>
      </HowItWorks>  
      <Categories>
        <h2>Categories</h2>
        <CategoryItem/>
      </Categories>
    </div>
  );
}

export default App;