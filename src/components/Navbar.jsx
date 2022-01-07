import React from 'react';
import {Button, Menu, Typography, Avatar} from 'antd';
import {Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons/lib/icons';

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src="https://i.ibb.co/Z11pcGG/cryptocurrency.png" size='large'/>
                <Typography.Title level={2} className='logo'>
                    <Link to="/">Cryptoworld</Link>
                </Typography.Title>
                {/* <button className="menu-control-container">

                </button> */}
            </div>
            <Menu theme='dark'>
                <Menu.Item key='home' icon={<HomeOutlined/>}>
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item key='Cryptocurrencies' icon={<FundOutlined/>}>
                    <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item key='exchanges' icon={<MoneyCollectOutlined />}>
                    <Link to='/exchanges'>Exchanges</Link>
                </Menu.Item>
                <Menu.Item key='news' icon={<BulbOutlined/>}>
                    <Link to='/news'>News</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar
 