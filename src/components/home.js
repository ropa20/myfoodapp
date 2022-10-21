import React, { useState } from 'react';
import './index.css';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import Search from './search';
import Specials from './specials';

const Home=()=>
{
    const {user, logout} = UserAuth();
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    const handleLogOut = async () => {
        try{
            await logout()
            navigate('/')
            console.log("you are logged out");
        }
        catch(e){
            console.log(e.message);
        }
    }
    const menu = (
        <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
      {user && user.email}
      </a>
    </Menu.Item>
    </Menu>
      );
      
return <div className='container'>
    <div className='seg-1'>
    <div class="banner">
        <div className='navbar'>
            <div className='logo'>
                <i className="fa-solid fa-cloud fa-xl"></i> 
                WindRecipes
            </div>
            <div className='menu'>
                    <span className='menu 1'>
                        Home
                    </span >
                    <span className='menu 2'>
                        Menu
                    </span>
                    <span className='menu 3'> 
                    Contact
                    </span>
                    <span className='menu 4'>
                    Shop
                    </span>
            </div>
            <Search/>
                <div className='buttons'>
                    <button className='signup' type="button">
                    <Dropdown overlay={menu} placement="bottom" visible={visible} onVisibleChange={isVisible => setVisible(isVisible)} >
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <i className="fa-solid fa-user fa"></i><DownOutlined />
                        </a>
                    </Dropdown>
                    </button>
                    <button className='signup' type="button" onClick={handleLogOut}>Log out</button>
                </div>
        </div>
        <div className='main-text'>
            <h3>Easy way to know your food</h3>
            <span className='heading'>
            <span className='h1'>All </span><span className='h2'><div>Food</div><div>Recipes</div></span>
            </span>
            <h4>Cook your favourite food just like thats.</h4>
            <p>Have you got your offer?
                Best recipes at your service</p>
            <div className='buttons'>
                <button className='ordernow' type="button">Cook Now</button>
                <button className='orderprocess' type="button"><i className="fa-solid fa-play"></i> Process now</button>
            </div>
            <div className='stars'>
            <i className="fa-solid fa-star" ></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
            <div className='text'>
                5 star rating
            </div>
            </div>
            
        </div>
    </div>
    </div>
    <div className='seg-2'>
        <div className='seg-2-text'>
            Make your food faster than ever!
        </div>
    </div>
    <div className='seg-3'>
        <div className='small-text'>
        Lorem ipsum dolor sit amet, consectetur  uiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur  uiscing elit, sed do 
        </div>
        <div className='small-cards'>
            <div className='card1'>
            <img src="images/icon1.png" alt="Avatar" />
            <div class="content">
                <h4><b>Variety of foods</b></h4>
                <p>Lorem ipsum dolor sit amet, consectetur  uiscing elit, sed do eiusmod tempor in</p>
            </div>
            </div>
            <div className='card2'>
            <img src="images/icon2.png" alt="Avatar" />
            <div class="content">
                <h4><b>Foods all over the world</b></h4>
                <p>Lorem ipsum dolor sit amet, consectetur  uiscing elit, sed do eiusmod tempor in</p>
            </div>
            </div>
            <div className='card3'>
            <img src="images/icon3.png" alt="Avatar" />
            <div class="content">
                <h4><b>Enjoy your meal</b></h4>
                <p>Lorem ipsum dolor sit amet, consectetur  uiscing elit, sed do eiusmod tempor in</p>
            </div>
            </div>
        </div>
    </div>
    <div className='seg-4'>
        <div className='orange-text'>
            Picked just for you
        </div>
        <div className='seg-4-text'>
            Chef's choices: 
        </div>
    </div>
    <Specials />
    <div className='seg-6'>
        <button className='ordernow2' type="button">Cook Now</button>
    </div>
    <div className='seg-7'>
        <div className='footer-card'>
               <p> Have you got your offer?</p>
                <p>Best cooks and tastiest foods at your self-service</p>
                
        </div>
    </div>
</div>
}

export default Home;