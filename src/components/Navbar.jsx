import React, { useEffect, useState } from 'react';
import {Button, Menu, Typography, Avatar} from 'antd';
import {Link } from 'react-router-dom'
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons/lib/icons';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [screenSize, setScreenSize] = useState(null)

    useEffect(() => {
     const handleresize= () => setScreenSize(window.innerWidth)
     window.addEventListener('resize', handleresize);
     return ()=> window.removeEventListener('resize', handleresize)   
    },[])
    useEffect(()=>{
        if(screenSize < 768) {setActiveMenu(false)}
        else{ setActiveMenu(true)}
    },[screenSize])
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src="https://i.ibb.co/Z11pcGG/cryptocurrency.png" size='large'/>
                <Typography.Title level={2} className='logo'>
                    <Link to="/">Cryptoworld</Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={()=> setActiveMenu(!activeMenu)}>
                    <MenuOutlined/>
                </Button>
            </div>
            {activeMenu && (
            <Menu theme='dark'>
                <Menu.Item key='home' icon={<HomeOutlined/>}>
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item key='Cryptocurrencies' icon={<FundOutlined/>}>
                    <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item key='news' icon={<BulbOutlined/>}>
                    <Link to='/news'>News</Link>
                </Menu.Item>
            </Menu>

            )}
        </div>
    )
}

export default Navbar
 