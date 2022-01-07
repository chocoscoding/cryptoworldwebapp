import React, { useEffect, useRef, useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, HomePage, CryptoDetails, Cryptocurrencies, News } from './components'
import './App.css'
import 'antd/dist/antd.css'


const App = () => {
    const mainCntnt = useRef(null)    
    const returnmargin=()=>{
        const width = document.querySelector("#root > div > div:nth-child(1) > div").clientWidth;
        if(window.innerWidth > 800){
            mainCntnt.current.style.marginLeft = `${width+2}px`;
        }
        else{
            mainCntnt.current.style.marginLeft = `auto`;

        }
    }
    useEffect(()=>{
        returnmargin()
        window.addEventListener('resize',returnmargin)
        // return ()=>{
        //     window.removeEventListener('resize',returnmargin)
        // }
    },[]);
    return (
        <div className="app">
            <div >
                <Navbar />
            </div>
            <div className="main" ref={mainCntnt}>
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path='/'>
                                <HomePage />
                            </Route>
                            <Route exact path='/exchanges'>
                                <Exchanges />
                            </Route>
                            <Route exact path='/cryptocurrencies'>
                                <Cryptocurrencies />
                            </Route>
                            <Route exact path='/crypto/:coinId'>
                                <CryptoDetails />
                            </Route>
                            <Route exact path='/news'>
                                <News />
                            </Route>
                        </Switch>
                    </div>
                </Layout>


                <div className="footer">
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        Cryptoworld <br />
                        All right reserved
                    </Typography.Title>
                    <Space>
                        <Link to='/'>Home</Link>
                        <Link to='/exchanges'>Exchanges</Link>
                        <Link to='/news'>News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App
